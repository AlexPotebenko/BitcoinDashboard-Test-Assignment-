import Link from "next/link";

interface LeftNavProps {
  currentPath: string;
}

export default function LeftNav({ currentPath }: LeftNavProps) {
  return (
    <nav className="flex flex-col gap-2 p-4 w-full">
      <Link
        href="/dashboard"
        className={`block px-4 py-2 rounded focus:outline-none text-left ${
          currentPath === "/dashboard"
            ? "bg-gray-200 font-semibold"
            : "hover:bg-gray-100"
        }`}
        aria-current={currentPath === "/dashboard" ? "page" : undefined}
      >
        Dashboard
      </Link>
      <Link
        href="/user-cabinet"
        className={`block px-4 py-2 rounded focus:outline-none text-left ${
          currentPath === "/user-cabinet"
            ? "bg-gray-200 font-semibold"
            : "hover:bg-gray-100"
        }`}
        aria-current={currentPath === "/user-cabinet" ? "page" : undefined}
      >
        User Cabinet
      </Link>
    </nav>
  );
}
