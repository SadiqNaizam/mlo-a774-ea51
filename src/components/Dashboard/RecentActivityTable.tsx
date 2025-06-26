import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';

interface Activity {
    id: string;
    user: string;
    dateTime: string;
    duration: string;
    commission: number;
    status: 'Successful' | 'Pending';
}

const recentActivities: Activity[] = [
    {
        id: '1',
        user: 'Esther Howard',
        dateTime: '22 Aug, 5.32 pm',
        duration: '00.18.25',
        commission: 38582,
        status: 'Successful' as const,
    },
    {
        id: '2',
        user: 'Cameron Williamson',
        dateTime: '22 Aug, 6.12 pm',
        duration: '00.13.39',
        commission: 35957,
        status: 'Pending' as const,
    },
    {
        id: '3',
        user: 'Brooklyn Simmons',
        dateTime: '22 Aug, 6.50 pm',
        duration: '00.32.21',
        commission: 30291,
        status: 'Successful' as const,
    },
    {
        id: '4',
        user: 'Kristin Watson',
        dateTime: '22 Aug, 7.15 pm',
        duration: '00.21.45',
        commission: 28450,
        status: 'Successful' as const,
    },
];

const RecentActivityTable: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        <div className="flex items-center gap-2">
            <Button variant="outline" className="h-8 bg-background">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                22 Aug 2023
            </Button>
            <Select defaultValue="4">
                <SelectTrigger className="w-[100px] h-8 bg-background">
                    <SelectValue placeholder="Show" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="4">Show 4</SelectItem>
                    <SelectItem value="10">Show 10</SelectItem>
                    <SelectItem value="20">Show 20</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentActivities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.user}</TableCell>
                <TableCell>{activity.dateTime}</TableCell>
                <TableCell>{activity.duration}</TableCell>
                <TableCell>{`${activity.commission.toLocaleString()} USD`}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn(
                      activity.status === 'Successful' 
                      ? 'bg-green-100 text-green-700 border-green-200'
                      : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                  )}>
                    {activity.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentActivityTable;
