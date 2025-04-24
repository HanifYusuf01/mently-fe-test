"use client";

import { activities } from "@/lib/data/activitiesData";

export const AvatarOverlap = () => {
  return (
    <div className="flex -space-x-3">
      {activities.slice(0, 3).map((activity, index) => (
        <div 
          key={activity.id} 
          className="w-5 h-5 rounded-full border-2 border-white overflow-hidden"
          style={{ zIndex: 10 - index }} 
        >
          <img 
            src={activity.image} 
            alt={activity.activity} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}