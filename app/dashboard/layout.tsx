import { ReactNode } from "react";
import TopRibbon from "@/components/dashboard/TopRibbon";
import RightHistory from "@/components/dashboard/RightHistory";
import NavMenuMobile from "@/components/dashboard/NavMenuMobile";
import LeftNav from "@/components/dashboard/LeftNav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Ribbon + Mobile NavMenu */}
      <header className="sticky top-0 z-20 w-full bg-white shadow px-4 py-2 flex flex-col gap-2 items-stretch">
        <TopRibbon />
        <div className="md:hidden">
          <NavMenuMobile />
        </div>
      </header>
      <div className="min-h-0 flex-1 flex flex-col md:flex-row">
        {/* Left Navigation (LeftNav) for desktop */}
        <aside className="hidden md:flex bg-white border-r w-full md:w-56 flex-shrink-0 h-14 md:h-auto md:flex-col flex-row overflow-x-auto md:overflow-x-visible">
          <LeftNav />
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>
        {/* Right History Panel */}
        <aside className="hidden lg:block w-80 bg-white border-l p-4 overflow-y-auto">
          <RightHistory />
        </aside>
      </div>
    </div>
  );
}
