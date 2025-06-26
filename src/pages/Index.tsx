import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import SalesOverviewChart from '../components/Dashboard/SalesOverviewChart';
import PerformanceChart from '../components/Dashboard/PerformanceChart';
import TrafficSourcesList from '../components/Dashboard/TrafficSourcesList';
import ClientRespondsAreaChart from '../components/Dashboard/ClientRespondsAreaChart';
import ClientRespondsPieChart from '../components/Dashboard/ClientRespondsPieChart';
import UserRatingTable from '../components/Dashboard/UserRatingTable';
import RecentActivityTable from '../components/Dashboard/RecentActivityTable';

/**
 * The main dashboard page for the DataAI Dashboard Clone application.
 * This page serves as the central hub, presenting a comprehensive overview of key metrics and activities.
 * It utilizes MainAppLayout for the overall page structure (sidebar and header) and composes
 * various specialized components for data visualization in a responsive grid.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <PageHeader />
      <StatsCardGrid />
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
        {/* Row 1: Sales and Performance Charts */}
        <div className="lg:col-span-4">
          <SalesOverviewChart />
        </div>
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>

        {/* Row 2: Traffic and Client Response Cards */}
        <div className="lg:col-span-2">
          <TrafficSourcesList />
        </div>
        <div className="lg:col-span-2">
          <ClientRespondsAreaChart />
        </div>
        <div className="lg:col-span-2">
          <ClientRespondsPieChart />
        </div>

        {/* Row 3: User Rating and Recent Activity Tables */}
        <div className="lg:col-span-2">
          <UserRatingTable />
        </div>
        <div className="lg:col-span-4">
          <RecentActivityTable />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;
