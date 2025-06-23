import { NAV_LINKS } from "@/lib/routes";
import NavLink from "./NavLink";

export default function NavMenuMobile() {
  return (
    <nav className="flex gap-2 w-full p-2">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.pathname} pathname={link.pathname} label={link.label} />
      ))}
    </nav>
  );
}
