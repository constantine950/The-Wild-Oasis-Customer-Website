import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-primary-950">
      <div className="flex">
        {/* Sidebar - hidden on mobile (shown via button), fixed on md+ */}
        <SideNavigation />

        {/* Main content - adjusts spacing automatically */}
        <main className="flex-1">
          <div className="max-w-3xl mx-auto p-2 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
