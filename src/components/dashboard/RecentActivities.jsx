import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { activities } from "@/lib/data/activitiesData";

export default function RecentActivities() {
  return (
    <div className="bg-white h-[300px] mt-10 rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className="p-4">
      <div className="flex justify-between items-center p-4 border-b">
      <div className="flex gap-2 items-center">
          <img
            src={"/images/Vector.png"}
            alt={"hamburger"}
            className="object-cover"
          />
        <h2 className="text-xs md:text-[10px] lg:text-lg text-[#B0B0B0] font-medium">
          Recent Activities
        </h2>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/activities"
            className="text-[8px] lg:text-sm text-purple-600 hover:text-purple-800"
          >
            See all
          </Link>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
      {activities.map((activity, index) => (
        <div
          key={activity.id}
          className={`flex items-center gap-2 pb-3 h-[65px] ${
            index !== activities.length - 1
              ? "border-b border-[#D0D5DD] mb-3 "
              : ""
          }`}
        >
          <div>
            <img
              src={activity.image}
              alt={activity.name}
              className="w-[32px] h-[32px] rounded-lg object-cover"
            />
          </div>
          <div>
            <p className="text-[#011627] text-[10px] lg:text-[14px]">{activity.activity}</p>
            <p className="text-[#707991] text-[8px] lg:text-[12px]">
              {activity.notification}
            </p>
          </div>
        </div>
      ))}
      </div>
     
    </div>
  );
}
