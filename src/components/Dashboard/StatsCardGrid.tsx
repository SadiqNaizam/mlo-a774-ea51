import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MousePointerClick, FileText, TrendingDown, ArrowUp, ArrowDown, MoreHorizontal } from 'lucide-react';

interface StatCardData {
  id: number;
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ElementType;
}

const statsData: StatCardData[] = [
  {
    id: 1,
    title: 'Total Visitors',
    value: '2,01,620',
    change: 2.31,
    changeType: 'increase' as const,
    icon: Users,
  },
  {
    id: 2,
    title: 'Total Clicks',
    value: '1,96,325',
    change: 5.93,
    changeType: 'increase' as const,
    icon: MousePointerClick,
  },
  {
    id: 3,
    title: 'Commission',
    value: '1,20,145',
    change: 9.05,
    changeType: 'increase' as const,
    icon: FileText,
  },
  {
    id: 4,
    title: 'Bounce Rate',
    value: '1,546',
    change: 1.03,
    changeType: 'decrease' as const,
    icon: TrendingDown,
  },
];

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4', className)}>
      {statsData.map((stat) => (
        <Card key={stat.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className='flex items-center gap-2'>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <MoreHorizontal className="h-4 w-4"/>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
                <div className={cn(
                    'flex items-center gap-1 rounded-full px-2 py-0.5 text-xs',
                    stat.changeType === 'increase' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                )}>
                    {stat.changeType === 'increase' ? (
                        <ArrowUp className="h-3 w-3" />
                    ) : (
                        <ArrowDown className="h-3 w-3" />
                    )}
                    <span>{stat.change.toFixed(2)}%</span>
                </div>
                <span className='ml-2'>From Last Month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCardGrid;
