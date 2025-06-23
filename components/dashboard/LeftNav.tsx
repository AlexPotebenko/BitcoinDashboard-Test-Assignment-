import { NAV_LINKS } from "@/lib/routes";
import NavLink from "./NavLink";

export default function LeftNav() {
  return (
    <nav className="flex flex-col gap-2 p-4 w-full">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.pathname} pathname={link.pathname} label={link.label} />
      ))}
    </nav>
  );
}
