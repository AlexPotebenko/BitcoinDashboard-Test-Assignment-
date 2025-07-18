import { ReactNode } from "react";
import History from "@/components/dashboard/History";
import LeftNav from "@/components/dashboard/LeftNav";
import NavMenuMobile from "@/components/dashboard/NavMenuMobile";
import TopRibbon from "@/components/dashboard/TopRibbon";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Ribbon + Mobile NavMenu */}
      <header className="sticky top-0 z-20 w-full bg-card shadow border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex flex-col gap-2 items-stretch">
        <TopRibbon />
        <div className="md:hidden">
          <NavMenuMobile />
        </div>
      </header>
      <div className="min-h-0 flex-1 flex flex-col md:flex-row">
        {/* Left Navigation (LeftNav) for desktop */}
        <aside className="hidden md:flex bg-card border-r border-gray-200 dark:border-gray-700 w-full md:w-56 flex-shrink-0 h-14 md:h-auto md:flex-col flex-row overflow-x-auto md:overflow-x-visible">
          <LeftNav />
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-adaptive-md overflow-y-auto">
          {children}
          <div className="lg:hidden p-6">
            <History />
          </div>
        </main>
        {/* Right History Panel */}
        <aside className="hidden lg:block w-80 bg-card border-l border-gray-200 dark:border-gray-700 p-4 overflow-y-auto">
          <History />
        </aside>
      </div>
    </div>
  );
}
