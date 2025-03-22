
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SidePanel } from './SidePanel';
import { Navbar } from './Navbar';
import { cn } from '@/lib/utils';

export const Layout: React.FC = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  const closeSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  return (
    <div className="h-full flex flex-col">
      <SidePanel isOpen={isSidePanelOpen} onClose={closeSidePanel} />
      <div className={cn("flex flex-col flex-1 transition-all duration-300", "md:pl-64")}>
        <Navbar onMenuToggle={toggleSidePanel} />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
