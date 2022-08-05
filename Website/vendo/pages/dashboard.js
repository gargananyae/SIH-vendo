import React from 'react'
import DashboardSidebar from './components/DashboardSidebar'
import Header from './components/Header'


export default function dashboard() {
  return (
    <div>
        <DashboardSidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <div className="dashboard-main-container">
            
        </div>
        <Header pageWrapId={'pagewrap1'} outerContainerId={'container1'}/>
        
    </div>
  )
}
