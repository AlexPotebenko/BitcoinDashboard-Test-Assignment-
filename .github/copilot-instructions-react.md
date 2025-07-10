# React Guidelines

React-specific patterns and best practices.

## Component Patterns

```jsx
// ✅ Memoized expensive components
const Chart = memo(({ data, timeframe }) => {
  const chartData = useMemo(
    () => processChartData(data, timeframe),
    [data, timeframe]
  );

  return <ChartComponent data={chartData} />;
});

// ✅ Loading states with Suspense and ErrorBoundary
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingSkeleton />}>
        <DataList />
      </Suspense>
    </ErrorBoundary>
  );
}
```

## Hooks and State Management

```jsx
// ✅ Custom hooks for data fetching
function useDataFetch(endpoint, refreshInterval = 30000) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        if (result.success) {
          setData(result.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, refreshInterval);
    return () => clearInterval(interval);
  }, [endpoint, refreshInterval]);

  return { data, loading, error };
}
```
