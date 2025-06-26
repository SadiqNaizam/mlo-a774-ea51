import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Male', value: 58.08, color: '#4f46e5' },
  { name: 'Female', value: 35.07, color: '#a78bfa' },
  { name: 'Others', value: 6.05, color: '#e5e7eb' },
];

const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="flex flex-col gap-2">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }}></span>
            <span>{entry.value}</span>
          </div>
          <span>{`${data[index].value.toFixed(2)}%`}</span>
        </li>
      ))}
    </ul>
  );
};

const ClientRespondsPieChart: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Client Responds</CardTitle>
        <Button variant="outline" className="h-8 bg-background">
          View Details
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 items-center gap-4">
            <div style={{ width: '100%', height: 160 }}>
                <ResponsiveContainer>
                <PieChart>
                    <Tooltip 
                        formatter={(value: number) => `${value.toFixed(2)}%`}
                        wrapperStyle={{ zIndex: 10 }}
                    />
                    <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                    >
                    {data.map((entry) => (
                        <Cell key={`cell-${entry.name}`} fill={entry.color} />
                    ))}
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
            </div>
            <div>
                <Legend content={renderLegend} verticalAlign="middle" />
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientRespondsPieChart;
