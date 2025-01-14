"use client";

import React from "react";
import DashboardStats from ".//DashboardStats";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center my-16">
        <h1 className="text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Stats Overview:
        </h1>

        {/* Date Picker */}
      </div>

      <DashboardStats />
    </div>
  );
};

export default Dashboard;
