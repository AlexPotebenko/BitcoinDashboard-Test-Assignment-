import { Separator } from "@/components/ui/separator";

const staticHistory = [
  { action: "Deposited $500", time: "2025-06-20 10:00" },
  { action: "Bought 0.5 BTC", time: "2025-06-20 09:30" },
  { action: "Sold 0.2 BTC", time: "2025-06-19 18:00" },
  { action: "Withdrew $100", time: "2025-06-19 12:00" },
];

export default function RightHistory() {
  return (
    <div>
      <h3 className="font-bold mb-2">History</h3>
      <Separator className="mb-2" />
      <ul className="space-y-2">
        {staticHistory.map((item, i) => (
          <li key={i} className="text-sm">
            <span className="font-medium">{item.action}</span>
            <br />
            <span className="text-xs text-gray-500">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
