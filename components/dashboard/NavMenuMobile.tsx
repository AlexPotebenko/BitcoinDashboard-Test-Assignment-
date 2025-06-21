import Link from "next/link";

interface NavMenuMobileProps {
  currentPath: string;
}

export default function NavMenuMobile({ currentPath }: NavMenuMobileProps) {
  return (
    <nav className="flex gap-2 w-full p-2">
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
