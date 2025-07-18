import { AccountStatus } from "@/lib/api/mock-api/index";
import { formatDate } from "../utils/formatters";

interface AccountStatusSectionProps {
  accountStatus?: AccountStatus;
}

export function AccountStatusSection({
  accountStatus,
}: AccountStatusSectionProps) {
  if (!accountStatus) return null;

  const { plan, planExpiry, features, usage } = accountStatus;

  return (
    <section className="bg-card rounded-lg shadow-sm p-4 border border-border-default">
      <h2 className="font-semibold mb-2 text-card-foreground">
        Account Status
      </h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className={`text-xs font-medium`}>
            {plan} Plan
          </span>
          {planExpiry && (
            <span className="text-muted-foreground text-xs">
              Expires: {formatDate(planExpiry)}
            </span>
          )}
        </div>

        {features && (
          <div>
            <h3 className="text-sm font-medium text-foreground mb-1">
              Features:
            </h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              {features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        )}

        {usage && (
          <div>
            <h3 className="text-sm font-medium text-foreground mb-1">Usage:</h3>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-muted rounded-full h-2">
                <div
                  className="bg-progress h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (usage.dealExecutions / usage.maxDealExecutions) * 100
                    }%`,
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {usage.dealExecutions}/{usage.maxDealExecutions} deals
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
