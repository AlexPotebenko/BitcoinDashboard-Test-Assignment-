import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <>
      {/* Main dashboard content only, layout/sidebar/top/right moved to layout */}
      <section className="mb-4 p-4 rounded-xl border border-border-default bg-card shadow-sm flex flex-col items-center">
        <span className="font-semibold mb-2 text-card-foreground">BTC Price Chart</span>
        <div className="w-full h-32 bg-bitcoin/10 border border-bitcoin/20 rounded flex items-center justify-center text-bitcoin">
          [Bitcoin Chart - Coming Soon]
        </div>
      </section>
      <section className="mb-4 p-4 rounded-xl border border-info/20 bg-card shadow-sm">
        <h4 className="font-bold mb-2 text-info">Deal Data Form</h4>
        <div className="flex flex-col gap-2">
          <label className="text-foreground">
            Accepted Delta
            <input
              value={50}
              readOnly
              className="mt-1 border border-border-default bg-background text-foreground rounded px-2 py-1 w-full"
            />
          </label>
          <label className="text-foreground">
            Order Type
            <input
              value="market"
              readOnly
              className="mt-1 border border-border-default bg-background text-foreground rounded px-2 py-1 w-full"
            />
          </label>
          <Button disabled className="mt-2">
            Submit (Static)
          </Button>
        </div>
      </section>
      <section className="mb-4 p-4 rounded-xl border border-success/20 bg-card shadow-sm">
        <h4 className="font-bold mb-2 text-success">Deposit / Withdraw</h4>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            placeholder="Amount (USD)"
            value={""}
            readOnly
            className="border border-border-default bg-background text-foreground rounded px-2 py-1 w-full"
          />
          <Button disabled>Deposit</Button>
          <Button disabled>Withdraw</Button>
        </div>
      </section>
      <section className="mb-4 p-4 rounded-xl border border-bitcoin/20 bg-card shadow-sm">
        <h4 className="font-bold mb-2 text-bitcoin">Buy / Sell Bitcoin</h4>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            placeholder="Amount (BTC)"
            value={""}
            readOnly
            className="border border-border-default bg-background text-foreground rounded px-2 py-1 w-full"
          />
          <Button disabled>Buy</Button>
          <Button disabled>Sell</Button>
        </div>
      </section>
    </>
  );
}
