import { MoreVertical, User, MessageSquare } from "lucide-react";
import Link from "next/link";
import { mentors } from "@/lib/data/mentorsData";

export default function MentorsList() {
  return (
    <div className="bg-white h-[250px] mb-4 rounded-lg shadow-sm mt-2 overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex gap-2 items-center">
          <img
            src={"/images/Vector.png"}
            alt={"hamburger"}
            className="object-cover"
          />
          <h2 className="text-sm lg:text-lg text-[#B0B0B0] font-medium">Mentors</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/users?filter=mentors"
            className="text-[10px] lg:text-sm text-purple-600 hover:text-purple-800"
          >
            See all
          </Link>
          <button className="text-[#B0B0B0] hover:text-gray-600">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      <div className="divide-y">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="p-4 flex justify-between gap-6 items-center"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-6 h-6 lg:w-full lg:h-full rounded-lg object-cover"
                />
              </div>

              <div>
                <div className="font-medium text-[10px] lg:text-[14.4px] text-[#4F4F4F]">
                  {mentor.name}
                </div>
                <div className="text-[6px] lg:text-[10px] text-[#B0B0B0]">{mentor.role}</div>
              </div>
            </div>

            <button className="flex text-[6px] items-center rounded-full space-x-1 text-xs px-3 py-1 bg-purple-700 text-white rounded-md hover:bg-purple-800">
              <span>Message</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
