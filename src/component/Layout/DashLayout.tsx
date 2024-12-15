import React from 'react'
import DashboardSitebar from './DashboardSitbar'
import { Outlet } from 'react-router'

export default function DashLayout() {
  return (
    <div className="flex ">
    <div>
      <DashboardSitebar />
    </div>
    <div className=" p-4 w-full">
      <Outlet />
    </div>
  </div>
  )
}
