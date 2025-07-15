import { LoginHistoryEntry } from "@/lib/api/mock-api/index";
import { formatDate, getStatusColor } from "../utils/formatters";

interface LoginHistorySectionProps {
  loginHistory?: LoginHistoryEntry[];
}

export function LoginHistorySection({
  loginHistory,
}: LoginHistorySectionProps) {
  return (
    <section className="bg-white rounded shadow p-4">
      <h2 className="font-semibold mb-2">Login History</h2>
      {loginHistory && loginHistory.length > 0 ? (
        <ul className="max-h-[300px] overflow-auto pr-1 text-sm text-gray-700 space-y-2">
          {loginHistory.map((entry) => (
            <li
              key={entry.id}
              className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0"
            >
              <div>
                <span className="font-medium">
                  {formatDate(entry.timestamp)}
                </span>
                <span className="ml-2 text-gray-500">
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
        <p className="text-gray-500 text-sm">No login history available.</p>
      )}
    </section>
  );
}
