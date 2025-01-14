"use client";

import Breadcrumb from "@/components/layout/breadcrumb/Breadcrumb";
import AppSidebar from "@/components/layout/sidebar/AppSidebar";

import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10">
      <div className="col-span-1 md:col-span-4 lg:col-span-3">
        <AppSidebar />
      </div>
      <div className="col-span-1 md:col-span-8 lg:col-span-9">
        <Breadcrumb />

        {children}
      </div>
    </div>
  );
};

export default AppLayout;
