import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';

interface PageHeaderProps {
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="bg-white">
          <Calendar className="mr-2 h-4 w-4" />
          <span>Aug 21, 2023 - Sep 20, 2023</span>
        </Button>
        <Button variant="default">
            Export
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
