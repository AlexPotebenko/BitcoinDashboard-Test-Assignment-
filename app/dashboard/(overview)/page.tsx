import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <>
      {/* Main dashboard content only, layout/sidebar/top/right moved to layout */}
      <section className="mb-4 p-4 rounded-xl border bg-white shadow-sm flex flex-col items-center">
        <span className="font-semibold mb-2">BTC Price Chart</span>
        <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">
          [Static Chart Placeholder]
        </div>
      </section>
      <section className="mb-4 p-4 rounded-xl border bg-white shadow-sm">
        <h4 className="font-bold mb-2">Deal Data Form</h4>
        <div className="flex flex-col gap-2">
          <label>
            Accepted Delta
            <input
              value={50}
              readOnly
              className="mt-1 border rounded px-2 py-1 w-full"
            />
          </label>
          <label>
            Order Type
            <input
              value="market"
              readOnly
              className="mt-1 border rounded px-2 py-1 w-full"
            />
          </label>
          <Button disabled className="mt-2">
            Submit (Static)
          </Button>
        </div>
      </section>
      <section className="mb-4 p-4 rounded-xl border bg-white shadow-sm">
        <h4 className="font-bold mb-2">Deposit / Withdraw</h4>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            placeholder="Amount (USD)"
            value={""}
            readOnly
            className="border rounded px-2 py-1 w-full"
          />
          <Button disabled>Deposit</Button>
          <Button disabled>Withdraw</Button>
        </div>
      </section>
      <section className="mb-4 p-4 rounded-xl border bg-white shadow-sm">
        <h4 className="font-bold mb-2">Buy / Sell Bitcoin</h4>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            placeholder="Amount (BTC)"
            value={""}
            readOnly
            className="border rounded px-2 py-1 w-full"
          />
          <Button disabled>Buy</Button>
          <Button disabled>Sell</Button>
        </div>
      </section>
    </>
  );
}
