# React + TypeScript Guidelines

TypeScript-specific patterns for React components. Follows the TypeScript guidelines from `copilot-instructions-ts.md`. For general React patterns without TypeScript, see `copilot-instructions-react.md`.

## Event Handling with TypeScript

```typescript
// ✅ Standard React events with proper typing
function SearchInput({ onSearch }: { onSearch: (query: string) => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSearch(formData.get("query") as string);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" type="text" />
      <button type="submit">Search</button>
    </form>
  );
}

// ✅ Custom handlers with typed data
interface ItemRowProps {
  item: DataItem;
  onEdit: (id: string) => void;
  onDelete: (item: DataItem) => void;
}

function ItemRow({ item, onEdit, onDelete }: ItemRowProps) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>
        <button onClick={() => onEdit(item.id)}>Edit</button>
        <button onClick={() => onDelete(item)}>Delete</button>
      </td>
    </tr>
  );
}
```

## TypeScript State Management

```typescript
// ✅ Proper state typing
const [data, setData] = useState<DataType | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);

// ✅ Custom hooks with TypeScript
function useDataFetch(endpoint: string, refreshInterval = 30000) {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const result: ApiResponse<ApiData> = await response.json();
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

// ✅ Refs with proper typing
function Chart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Chart initialization
    }
  }, []);

  return <canvas ref={chartRef} />;
}
```

## Redux with TypeScript

```typescript
// ✅ RTK Query hooks with proper types
const { data: apiData, isLoading, error } = useGetApiDataQuery();

const [updateSettings, { isLoading: isUpdating }] =
  useUpdateUserSettingsMutation();

// ✅ Selector with typed state
const currentValue = useSelector((state: RootState) => state.app.currentValue);

// ✅ Dispatch with typed actions
const dispatch = useAppDispatch();
const handleRefresh = () => {
  dispatch(apiSlice.util.invalidateTags(["ApiData"]));
};
```

## Component Typing Patterns

```typescript
// ✅ Memoized components with TypeScript
interface ChartProps {
  data: ChartData[];
  timeframe: TimeFrame;
}

const Chart = memo<ChartProps>(({ data, timeframe }) => {
  const chartData = useMemo(
    () => processChartData(data, timeframe),
    [data, timeframe]
  );

  return <ChartComponent data={chartData} />;
});
```
