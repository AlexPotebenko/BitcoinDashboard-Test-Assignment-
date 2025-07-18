import { LoginHistoryEntry } from "@/lib/api/mock-api/index";
import { formatDate, getStatusColor } from "../utils/formatters";

interface LoginHistorySectionProps {
  loginHistory?: LoginHistoryEntry[];
}

export function LoginHistorySection({
  loginHistory,
}: LoginHistorySectionProps) {
  return (
    <section className="bg-card rounded-lg shadow-sm p-4 border border-border-default">
      <h2 className="font-semibold mb-2 text-card-foreground">Login History</h2>
      {loginHistory && loginHistory.length > 0 ? (
        <ul className="max-h-[300px] overflow-auto pr-1 text-sm text-foreground space-y-2">
          {loginHistory.map((entry) => (
            <li
              key={entry.id}
              className="flex justify-between items-center py-1 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <div>
                <span className="font-medium text-foreground">
                  {formatDate(entry.timestamp)}
                </span>
                <span className="ml-2 text-muted-foreground">
                  {entry.browser} ({entry.os})
                </span>
              </div>
              <span
                className={`text-xs font-medium ${getStatusColor(
                  entry.status
                )}`}
              >
                {entry.status}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground text-sm">No login history available.</p>
      )}
    </section>
  );
}
