import Image from "next/image";

export default function UserCabinetPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-4">User Cabinet</h1>
      {/* Profile Info */}
      <section className="bg-white rounded shadow p-4 flex items-center gap-4">
        <Image
          src="/avatar-placeholder.png"
          alt="User Avatar"
          width={64}
          height={64}
          className="rounded-full border"
        />
        <div>
          <div className="font-semibold">Jane Doe</div>
          <div className="text-gray-500 text-sm">jane.doe@email.com</div>
        </div>
      </section>
      {/* Editable Form (static) */}
      <section className="bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Edit Profile (Static)</h2>
        <form className="space-y-2">
          <input className="w-full border rounded px-3 py-2" type="text" value="Jane Doe" readOnly />
          <input className="w-full border rounded px-3 py-2" type="email" value="jane.doe@email.com" readOnly />
          <input className="w-full border rounded px-3 py-2" type="text" value="Premium" readOnly />
        </form>
      </section>
      {/* Account Status */}
      <section className="bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Account Status</h2>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-medium">Premium Plan</span>
          <span className="text-gray-500 text-xs">(Faster deal execution)</span>
        </div>
      </section>
      {/* Login History (static) */}
      <section className="bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Login History</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>2025-06-24 10:12 - Chrome (Windows) - Success</li>
          <li>2025-06-23 18:45 - Safari (iOS) - Success</li>
          <li>2025-06-22 09:30 - Firefox (Linux) - Success</li>
        </ul>
      </section>
      {/* Notification Settings (static) */}
      <section className="bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Notification Settings</h2>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked readOnly />
            Email notifications
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked readOnly />
            Price alerts
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" readOnly />
            Product updates
          </label>
        </div>
      </section>
    </div>
  );
}
