"use client";

import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import ProgramsList from '@/components/programs/ProgramsList';
import GroupCalls from '@/components/dashboard/GroupCalls';
import Applications from '@/components/dashboard/Applications';
import MentorsList from '@/components/dashboard/MentorsList';
import RecentActivities from '@/components/dashboard/RecentActivities';
import WidgetControls from '@/components/dashboard/WidgetControls';
import { UsersStatistics } from '@/components/dashboard/UsersStatistics';

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <WidgetControls />
      </div>
      
      <WelcomeBanner name="Blessing" />
      
      <div className="flex flex-col gap-1 h-[100%] md:flex-row">
        <div className="space-y-6">
          <div className='h-[70%]'>
          <ProgramsList />
          </div>
         <div className=''>
         <UsersStatistics />
         </div>
         
        </div>
        <div className="space-y-6">
       <div className=''>
       <GroupCalls /> 
       </div>
         
          <div className='flex flex-col gap-2 md:flex-row h-['>
          <Applications />
          <div>
          <MentorsList />
          <RecentActivities />
          </div>
          </div>
         
          
        </div>
      </div>
    </div>
  );
}