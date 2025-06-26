import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area, CartesianGrid } from 'recharts';

const clientData = [
  { name: '7am', responds: 1000 },
  { name: '8am', responds: 1500 },
  { name: '9am', responds: 1200 },
  { name: '10am', responds: 2200 },
  { name: '11am', responds: 1800 },
  { name: '12pm', responds: 3100 },
  { name: '1pm', responds: 4200 },
  { name: '2pm', responds: 3500 },
  { name: '3pm', responds: 2800 },
  { name: '4pm', responds: 2000 },
];

const ClientRespondsAreaChart: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
            <CardTitle className="text-lg font-semibold">Client Responds</CardTitle>
            <CardDescription className="text-xs">Today</CardDescription>
            <p className="text-2xl font-bold pt-2">16,468</p>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6">
            <MoreHorizontal className="h-4 w-4"/>
        </Button>
      </CardHeader>
      <CardContent className="-ml-6">
        <div style={{ width: '100%', height: 150 }}>
          <ResponsiveContainer>
            <AreaChart data={clientData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorResponds" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip 
                cursor={false} 
                contentStyle={{ display: 'none' }}
              />
              <Area type="monotone" dataKey="responds" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorResponds)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientRespondsAreaChart;
