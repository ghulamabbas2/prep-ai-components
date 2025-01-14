import React from "react";
import DashboardStats from "./DashboardStats";

const Dashboard = () => {
  return (
    <div>
      <DashboardStats />

      <div className="flex justify-between items-center my-16">
        <h1 className="text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Your Interview Stats
        </h1>

        {/* Date Picker */}
      </div>

      {/* Status Chart */}

      <div className="flex justify-center items-center h-80">
        <p className="text-gray-500 dark:text-gray-400">
          No interview stats available for the selected date range.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
