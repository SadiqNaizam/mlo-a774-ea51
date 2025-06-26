import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid, TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

const performanceData = [
    { name: 'Jan', target: 4000, paid: 2400, pending: 2400 },
    { name: 'Feb', target: 3000, paid: 1398, pending: 2210 },
    { name: 'Mar', target: 5000, paid: 6800, pending: 2290 },
    { name: 'Apr', target: 2780, paid: 3908, pending: 2000 },
    { name: 'May', target: 1890, paid: 4800, pending: 2181 },
    { name: 'Jun', target: 2390, paid: 3800, pending: 2500 },
    { name: 'Jul', target: 3490, paid: 4300, pending: 2100 },
    { name: 'Aug', target: 4500, paid: 5700, pending: 300 },
    { name: 'Sep', target: 3200, paid: 4000, pending: 1500 },
    { name: 'Oct', target: 5100, paid: 6200, pending: 800 },
    { name: 'Nov', target: 7000, paid: 9800, pending: 500 },
    { name: 'Dec', target: 6000, paid: 7500, pending: 1200 },
];

const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex flex-col space-y-1">
            <p className="flex items-center text-sm">
                <span className='w-2 h-2 rounded-full bg-primary mr-2'></span>
                Target: {(payload[0].value as number / 1000000).toFixed(1)}M
            </p>
            <p className="flex items-center text-sm">
                <span className='w-2 h-2 rounded-full bg-green-500 mr-2'></span>
                Paid: {(payload[1].value as number / 1000000).toFixed(1)}M
            </p>
            <p className="flex items-center text-sm">
                <span className='w-2 h-2 rounded-full bg-red-500 mr-2'></span>
                Pending: {(payload[2].value as number / 1000000).toFixed(1)}M
            </p>
          </div>
        </div>
      );
    }
    return null;
};


const PerformanceChart: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Performance</CardTitle>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm"><span className='w-2 h-2 rounded-full bg-primary'></span>Target</div>
            <div className="flex items-center gap-2 text-sm"><span className='w-2 h-2 rounded-full bg-green-500'></span>Paid</div>
            <div className="flex items-center gap-2 text-sm"><span className='w-2 h-2 rounded-full bg-red-500'></span>Pending</div>
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
        <div style={{ width: '100%', height: 250 }}>
          <ResponsiveContainer>
            <BarChart data={performanceData.map(d => ({ ...d, target: d.target * 1000, paid: d.paid * 1000, pending: d.pending * 1000}))} margin={{ top: 10, right: 0, left: 0, bottom: 0 }} barGap={6}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(value) => `${value / 1000000}M`} tickLine={false} axisLine={false} tick={{ fontSize: 12 }} domain={[0, 10000000]} tickCount={6}/>
              <Tooltip content={<CustomTooltip/>} cursor={{ fill: 'hsl(var(--secondary))' }}/>
              <Bar dataKey="target" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} stackId="a" barSize={10} />
              <Bar dataKey="paid" fill="#22c55e" radius={[4, 4, 0, 0]} stackId="a" barSize={10} />
              <Bar dataKey="pending" fill="#ef4444" radius={[4, 4, 0, 0]} stackId="a" barSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
