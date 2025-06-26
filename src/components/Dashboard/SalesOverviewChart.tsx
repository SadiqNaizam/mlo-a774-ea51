import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area, CartesianGrid, TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

const salesData = [
  { name: 'Aug 21', sales: 3500 },
  { name: 'Aug 22', sales: 4200 },
  { name: 'Aug 23', sales: 3800 },
  { name: 'Aug 24', sales: 4500 },
  { name: 'Aug 25', sales: 3200 },
  { name: 'Aug 26', sales: 5100 },
  { name: 'Aug 27', sales: 4800 },
  { name: 'Aug 28', sales: 8200 },
  { name: 'Aug 29', sales: 9500 },
  { name: 'Aug 30', sales: 8800 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="rounded-lg border bg-card p-2 shadow-sm">
          <div className="flex flex-col items-center justify-center p-2 bg-green-100 rounded-md">
            <span className="text-sm font-bold text-green-800">${data.sales.toLocaleString()}</span>
            <span className="text-xs text-green-600">↑ 2.5%</span>
          </div>
        </div>
      );
    }
  
    return null;
  };

const SalesOverviewChart: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Sales Overview</CardTitle>
        <div className="flex items-center gap-2">
          <Select defaultValue="sprint">
            <SelectTrigger className="w-[100px] h-8 bg-background">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sprint">Sprint</SelectItem>
              <SelectItem value="marathon">Marathon</SelectItem>
            </SelectContent>
          </Select>
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
        <div style={{ width: '100%', height: 250 }}>
          <ResponsiveContainer>
            <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(value) => `${value / 1000}k`} tickLine={false} axisLine={false} tick={{ fontSize: 12 }} domain={[0, 'dataMax + 1000']} tickCount={5} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--primary))', strokeDasharray: '5 5' }} wrapperStyle={{ outline: 'none' }} />
              <Area type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" dot={false} activeDot={{ r: 6, strokeWidth: 2, fill: '#fff' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesOverviewChart;
