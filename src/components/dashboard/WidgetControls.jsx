"use client";

import { useState, useEffect } from 'react';
import { LayoutGrid, X, Grid, List } from 'lucide-react';
import { widgets } from '@/lib/data/widgetData';
export default function WidgetControls() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [widgetVisibility, setWidgetVisibility] = useState({
    programs: true,
    groupCalls: true,
    mentors: true,
    recentActivities: true,
    applications: true,
    usersStatistics: true,
    earnings: false,
    forum: false,
    programAnalysis: false
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleWidgetToggle = (widget) => {
    setWidgetVisibility({
      ...widgetVisibility,
      [widget]: !widgetVisibility[widget]
    });
  };

  const saveChanges = () => {
    if (onSave) {
      onSave(widgetVisibility);
    }
    toggleModal();
  };

  const resetToDefault = () => {
    setWidgetVisibility({
      programs: true,
      groupCalls: true,
      mentors: true,
      recentActivities: true,
      applications: true,
      usersStatistics: true,
      earnings: false,
      forum: false,
      programAnalysis: false
    });
  };
  return (
    <div className="flex justify-end items-center space-x-2 w-full">
    <div className='flex items-center'>
  <button className="p-2 rounded border border-gray-300 hover:bg-gray-100">
    <List  className="text-[#A4A5B8] h-4" />
  </button>
  <button className="p-2 rounded border border-gray-300 bg-gray-100">
      <Grid  className="text-[#6F01D0] h-4" />
  </button>
  <button 
    onClick={toggleModal} 
    className="ml-2 px-4 py-2 text-[6px] md:text-xs bg-purple-700 text-white rounded hover:bg-purple-800 transition-colors"
  >
    Manage Widgets
  </button>
</div>
     
        {/* Modal Overlay */}
        {isModalOpen && (
        <div className="fixed inset-0 z-50 flex  justify-end bg-black bg-opacity-40">
          <div className="w-full max-w-md p-6 mx-4 bg-white shadow-xl">
            <div className='flex justify-end'>
            <button onClick={toggleModal} className="text-[#8D8D8D] hover:text-gray">
                <X size={24} />
              </button>
              <div className='border border-t border-[#D0D5DD] mt-6 border-1'></div>
            </div>
       
            <div className="flex items-center justify-between mb-6">
            
              <h2 className="text-xl font-bold text-[#6F01D0] text-[32px]">Manage Widget</h2>
             
            </div>

            <p className="mb-6 text-[#374557] text-[12px]">
              Personalize your dashboard by managing widgets: add, remove, or reorder them to fit your workflow.
            </p>

            <div className="space-y-4 mb-6">
              
              {widgets.map((widget) => (
                <div key={widget.id} className="flex items-center justify-between py-1">
                 
                  <div className="flex gap-4 items-center">
                  <img
                      src={"/images/Vector.png"}
                      alt={"hamburger"}
                      className="object-cover"
                      onClick={toggleModal}
                    />
                    <span className="text-[14.4px] text-[#4F4F4F]">{widget.label}</span>
                  </div>
                  <div 
                    className={`flex items-center justify-center w-6 h-6 rounded cursor-pointer ${
                      widgetVisibility[widget.id] ? 'bg-green-500' : 'border border-[#000000]'
                    }`}
                    onClick={() => handleWidgetToggle(widget.id)}
                  >
                    {widgetVisibility[widget.id] && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
            <button
                onClick={saveChanges}
                className="px-4 py-2 text-white text-[14px] bg-purple-700 rounded-md hover:bg-purple-800"
              >
                Save Changes
              </button>
              <button
                onClick={resetToDefault}
                className="px-4 py-2 text-[#6F01D0] text-[14px] bg-white border border-[#6F01D0] rounded-md hover:bg-gray-50"
              >
                Reset to Default
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}