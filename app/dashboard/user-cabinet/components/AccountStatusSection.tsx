import { AccountStatus } from "@/lib/api/mock-api/index";
import { formatDate, getPlanColor } from "../utils/formatters";

interface AccountStatusSectionProps {
  accountStatus?: AccountStatus;
}

export function AccountStatusSection({
  accountStatus,
}: AccountStatusSectionProps) {
  if (!accountStatus) return null;

  const { plan, planExpiry, features, usage } = accountStatus;

  return (
    <section className="bg-white rounded shadow p-4">
      <h2 className="font-semibold mb-2">Account Status</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${getPlanColor(
              plan || "Basic"
            )}`}
          >
            {plan} Plan
          </span>
          {planExpiry && (
            <span className="text-gray-500 text-xs">
              Expires: {formatDate(planExpiry)}
            </span>
          )}
        </div>

        {features && (
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">
              Features:
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              {features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        )}

        {usage && (
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Usage:</h3>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (usage.dealExecutions / usage.maxDealExecutions) * 100
                    }%`,
                  }}
                />
              </div>
              <span className="text-xs text-gray-600">
                {usage.dealExecutions}/{usage.maxDealExecutions} deals
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
