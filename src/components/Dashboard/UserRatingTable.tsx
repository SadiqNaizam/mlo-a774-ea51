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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserRating {
    rank: number;
    name: string;
    avatarUrl: string;
    fallback: string;
    amount: number;
}

const userRatings: UserRating[] = [
    {
        rank: 1,
        name: 'Esther Howard',
        avatarUrl: 'https://i.pravatar.cc/150?u=estherh',
        fallback: 'EH',
        amount: 25000
    },
    {
        rank: 2,
        name: 'Leslie Alexander',
        avatarUrl: 'https://i.pravatar.cc/150?u=lesliea',
        fallback: 'LA',
        amount: 18000
    },
    {
        rank: 3,
        name: 'Jenny Wilson',
        avatarUrl: 'https://i.pravatar.cc/150?u=jennyw',
        fallback: 'JW',
        amount: 14000
    },
    {
        rank: 4,
        name: 'Ronald Richards',
        avatarUrl: 'https://i.pravatar.cc/150?u=ronaldr',
        fallback: 'RR',
        amount: 10000
    },
];

const UserRatingTable: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">User Rating</CardTitle>
        <div className="flex items-center gap-2">
          <Select defaultValue="aug">
            <SelectTrigger className="w-[100px] h-8 bg-background">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aug">Aug</SelectItem>
              <SelectItem value="sep">Sep</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="2023">
            <SelectTrigger className="w-[100px] h-8 bg-background">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className='p-0'>
        <Table>
          <TableBody>
            {userRatings.map((user) => (
              <TableRow key={user.rank} className='border-t-0'>
                <TableCell className="font-medium w-12 text-center">
                    <div className='bg-secondary p-2 rounded-md'>{user.rank}</div>
                </TableCell>
                <TableCell>
                    <div className='flex items-center gap-3'>
                        <Avatar>
                            <AvatarImage src={user.avatarUrl} />
                            <AvatarFallback>{user.fallback}</AvatarFallback>
                        </Avatar>
                        <span className='font-medium'>{user.name}</span>
                    </div>
                </TableCell>
                <TableCell className="text-right font-semibold">{`$${user.amount.toLocaleString()}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UserRatingTable;
