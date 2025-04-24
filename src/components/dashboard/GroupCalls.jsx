'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MoreVertical, User, ChevronRight, Calendar, Clock } from 'lucide-react';
import { groupCalls } from '@/lib/data/groupCallsData';
import { AvatarOverlap } from '../utils/OverlappingAvatars';

export default function GroupCalls() {
  const [filter, setFilter] = useState('All');
  
  return (
    <div className=" rounded-lg shadow-sm overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
      <div className="flex gap-2 items-center">
          <img
            src={"/images/Vector.png"}
            alt={"hamburger"}
            className="object-cover"
          />
        <h2 className="text-xs lg:text-lg text-[#B0B0B0] font-medium">Group Calls</h2>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/activities" className="text-[10px] lg:text-sm text-purple-600 hover:text-purple-800">
            See all
          </Link>
          <button className="text-[#B0B0B0] hover:text-gray-600">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 md:flex-row">
        {groupCalls.slice(0, 3).map((call) => (
          <div key={call.id} className="p-4 bg-[#F9F7FF] rounded-lg shadow-md border border-gray-100">
            <div className="space-x-4">
              <div>
              <img
                      src={call.image}
                      alt={call.title}
                      className="w-full h-[80px] rounded-lg object-cover"
                    />
              </div>
              <div className="">
                <div className={`flex mt-4 items-center w-[72px] h-[16px] space-x-2 rounded-full ${call.status === 'ongoing' ? 'bg-[#2AC10033]' : 'bg-[#E0DDFF]'}`}>

                  <span className={`ml-2 w-2 h-2 rounded-full pl-2 ${call.status === 'ongoing' ? 'bg-[#1F8B01]' : 'bg-[#1C0AE1]'}`}></span>
                  <span className="text-[5px] md:text-[8px] lg:text-xs text-[#B0B0B0] mr-2">{call.status}</span>
                </div>
                
                <h3 className="font-medium text-sm md:text-[6px] lg:text-base text-[#595564] mt-1">{call.title}</h3>
                <div className='border border-t border-[#D0D5DD] border-1'></div>
                <div className="flex items-center  space-x-4 mt-2 text-xs text-[#B0B0B0]">
               
                  <div className='flex gap-1 items-center'>
                  <Calendar className='text-[#1F0954] w-2 md:w-1 lg:w-2'/>
                  <span className='text-[8px] md:text-[4px]  lg:text-[8px] text-[#595564]'>  {new Date(call.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  
                  </div>
                  <span className='text-[#D0D5DD]'>|</span>
                  <div className='flex gap-1 items-center'>
                    <Clock className='text-[#1F0954] w-2 md:w-1 lg:w-2'/>
                  <div className='text-[#595564] text-[8px] md:text-[4px]  lg:text-[8px]'>{call.time}</div>
                  </div>
                
                </div>
                
                <div className="flex items-center space-x-2 lg:mt-2">
                  <div className='flex items-center space-x-2'>
                  <img
                      src={"/images/Frame.png"}
                      alt={"Group Call"}
                      className=" rounded-lg object-cover"
                    />
                    <div>
                      <p className='text-[#A195C0] text-[6.47px] md:text-[3px] lg:text-[6.47px]'>Study Group</p>
                      <p className='text-[#595564] text-[8.8px] md:text-[3px] lg:text-[6.47px]'>UX Strategy Study group</p>
                    </div>
                    </div>
                  <div>
                  <p className='text-[#A195C0] text-[6.47px] md:text-[3px] lg:text-[6.47px]'>Mentors</p>
                    <AvatarOverlap />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex gap-4">
              <button className="text-[9px] md:text-[4px] lg:text-[9px] px-1 lg:px-3 py-1 border border-[#6F01D0] text-[#6F01D0] rounded-md hover:bg-gray-50">
                View Participants
              </button>
              
              <button className="text-[9px] md:text-[4px] lg:text-[9px] px-1 lg:px-3 py-1 bg-purple-700 text-white rounded-md hover:bg-purple-800 flex items-center">
                Join Now
                <ChevronRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}