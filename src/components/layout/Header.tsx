import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, onSidebarToggle }) => {
  // The TopHeader component from context already includes its own styling (height, padding, border).
  // This wrapper makes the header sticky for a better user experience on scrollable pages.
  // The background color is applied here to prevent content from showing through the sticky container.
  return (
    <header className={cn('sticky top-0 z-20 bg-card', className)}>
      <TopHeader onSidebarToggle={onSidebarToggle} />
    </header>
  );
};

export default Header;
