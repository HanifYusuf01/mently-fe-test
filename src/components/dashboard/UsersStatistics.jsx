'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const UsersStatistics = () => {
  const [filterValue, setFilterValue] = useState('All');
  const [dimensions, setDimensions] = useState({
    innerRadius: 40,
    outerRadius: 65
  });
  
  // Sample data for the donut chart
  const data = [
    { name: 'Students', value: 200, color: '#62B2FD' },
    { name: 'Mentors', value: 8, color: '#9BDFC4' },
    { name: 'Programs', value: 22, color: '#F99BAB' },
    { name: 'Others', value: 10, color: '#FFB44F' },
    { name: '', value: 15, color: "#9F97F7" },
  ];
  
  // Calculate total users
  const totalUsers = data.reduce((sum, item) => sum + item.value, 0);
  
  // Use useEffect to safely access window and update chart dimensions
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDimensions({ innerRadius: 30, outerRadius: 50 });
      } else if (window.innerWidth < 1024) {
        setDimensions({ innerRadius: 40, outerRadius: 65 });
      } else {
        setDimensions({ innerRadius: 50, outerRadius: 80 });
      }
    };
    
    // Set initial dimensions
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="bg-[#E7DDFF4D] h-[280px] border rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm lg:text-lg font-medium text-[#595564]">Users</h2>
        
        <div className="relative">
          <div className="flex items-center border border-gray-200 rounded-md px-2 md:px-3 py-1 bg-white">
            <div className="bg-white text-[#595564] text-xs px-1 rounded mr-1 md:mr-2">
              {filterValue}
            </div>
            <ChevronDown size={14} className="text-[#595564]" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-[50%] md:w-[60%] relative">
          {/* Responsive container with dynamic height based on screen size */}
          <div className="h-36 sm:h-40 md:h-48 lg:h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={dimensions.innerRadius}
                  outerRadius={dimensions.outerRadius}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#222529]">{totalUsers}</div>
            <div className="text-[#595564] text-[8px] sm:text-[10px] md:text-[12px]">Users</div>
          </div>
        </div>
        
        <div className="w-full sm:w-[50%] md:w-[40%] mt-4 sm:mt-0">
          <div className="grid grid-cols-2 sm:block">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-1 md:mr-2" style={{ backgroundColor: item.color }}></div>
                  <span className="text-[#595564] text-[10px] lg:text-xs">{item.name}</span>
                </div>
                <span className="font-medium text-[#595564] text-[10px] lg:text-xs">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};