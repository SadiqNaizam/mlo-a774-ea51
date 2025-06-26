import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Static Sidebar for Desktop, hidden on smaller screens */}
      <div className="hidden w-64 flex-shrink-0 lg:block">
        <Sidebar />
      </div>
      
      {/* Mobile Sidebar: Slides in from the left */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out lg:hidden',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isSidebarOpen}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile view when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-y-auto">
        <Header onSidebarToggle={toggleSidebar} />
        <main className="flex-1 space-y-6 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
