import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Describing the expected props using comments (JSDoc)
/**
 * MetricCard component
 * @param {Object} props
 * @param {string} props.title - The title of the metric card
 * @param {string} props.value - The value of the metric
 * @param {'up' | 'down'} props.trend - The trend direction (either 'up' or 'down')
 */
const MetricCard = ({ title, value, trend }) => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex justify-between items-center">
      <span className="text-2xl font-bold">{value}</span>
      <span className={`text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
        {trend === 'up' ? '▲' : '▼'}
      </span>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const metrics = [
    { title: 'CPU Usage', value: '45%', trend: 'down' },
    { title: 'Memory', value: '62%', trend: 'up' },
    { title: 'Network I/O', value: '32 Mbps', trend: 'down' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-6">System Metrics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
