import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

interface TrafficSource {
  name: string;
  value: number;
  total: number;
  color: string;
}

const trafficData: TrafficSource[] = [
  {
    name: 'Google',
    value: 89528,
    total: 100000,
    color: 'bg-primary',
  },
  {
    name: 'Social Media',
    value: 57658,
    total: 100000,
    color: 'bg-purple-800',
  },
  {
    name: 'Direct Message',
    value: 22717,
    total: 100000,
    color: 'bg-green-500',
  },
];

const TrafficSourcesList: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Traffic Sources</CardTitle>
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
      <CardContent>
        <div className="space-y-6">
          {trafficData.map((source) => (
            <div key={source.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{source.name}</span>
                <span className="text-sm font-semibold">{source.value.toLocaleString()}</span>
              </div>
              <Progress value={(source.value / source.total) * 100} className="h-2" indicatorClassName={source.color} />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-4 border-t pt-2">
          <span>10k</span>
          <span>20k</span>
          <span>40k</span>
          <span>60k</span>
          <span>80k</span>
          <span>100k</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficSourcesList;
