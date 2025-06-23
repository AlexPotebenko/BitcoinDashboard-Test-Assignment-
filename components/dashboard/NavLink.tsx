"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  pathname: string;
  label: string;
  className?: string;
}

export default function NavLink({ pathname, label, className = "" }: NavLinkProps) {
  const currentPath = usePathname();
  const isActive = currentPath === pathname;
  return (
    <Link
      href={pathname}
      className={`block px-4 py-2 rounded focus:outline-none text-left ${
        isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
      } ${className}`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
