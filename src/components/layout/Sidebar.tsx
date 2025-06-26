import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // The SidebarNav component, provided in context, contains all the styling,
  // including background color, text color, and navigation items.
  // This Sidebar component acts as a structural wrapper to be placed within the main layout.
  return (
    <aside className={cn('h-full', className)}>
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
