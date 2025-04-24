"use client";

import { useState } from "react";
import { MoreVertical, User, Flag } from "lucide-react";
import Link from "next/link";
import { applications } from "@/lib/data/applicationsData";
import { students } from "@/lib/data/studentData";

export default function Applications() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="bg-white h-[590px] rounded-lg shadow-lg mt-2 overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
      <div className="flex gap-2 items-center">
          <img
            src={"/images/Vector.png"}
            alt={"hamburger"}
            className="object-cover"
          />
        <h2 className="text-xs lg:text-lg text-[#B0B0B0] font-medium">Applications</h2>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/applications"
            className="text-sm text-purple-600 hover:text-purple-800"
          >
            See all
          </Link>
          <button className="text-[#B0B0B0] hover:text-gray-600">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-[10px] text-[#B0B0B0] mb-4">Mentors</div>

        <div className="space-y-4">
          {applications.map((application) => (
            <div key={application.id} className="flex flex-col gap-4">
              <div className="flex items-center space-x-3">
                <div  className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded text-[#A5A5A5] focus:ring-[#A5A5A5]"
                  />
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gray flex items-center justify-center">
                    <img
                      src={"/images/Ellipse56.svg"}
                      alt={"Group Call"}
                      className=" rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-[8px] lg:text-[14.4px] text-[#4F4F4F]">
                      {application.name}
                    </div>
                    <div className="text-[6px] lg:text-xs text-[#7D8DA6]">
                      {application.email}
                    </div>
                  </div>
                  <div></div>
                  <div className="flex space-x-2">
                    <button className="text-[6px] lg:text-xs px-3 py-2 bg-[#FFEDED] border border-[#D09696] text-[#D83535] rounded-md hover:bg-red-50">
                      Reject
                    </button>
                    <button className="text-[6px] lg:text-xs px-3 py-2 bg-[#6F01D0] text-white rounded-md hover:bg-purple-800">
                      Accept
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span className="text-[6px] md:text-[4px] lg:text-xs px-2 py-1 bg-[#DDCEEE] text-[#9985A7] rounded-full">
                    {application.role}
                  </span>
                  {application.experience && (
                    <span className="text-[6px] lg:text-xs px-2 py-1 bg-green-100 text-[#58948E] rounded-full">
                      {application.experience}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-1  px-2 py-1 bg-[#E3ECF9] rounded-full">
                  {application.country && (
                    <>
                      <span className="text-[6px] lg:text-xs">
                        {application.country.flag}
                      </span>
                      <span className="text-[6px] lg:text-xs text-[#8196B5]">
                        {application.country.name}
                      </span>
                    </>
                  )}
                </div>
                <span className="text-[6px] lg:text-xs px-2 py-1 bg-[#F4F4F4] text-[#595564] rounded-full">
                  {application.timezone}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className='border border-t border-[#D0D5DD] mt-6 border-1'></div>
        <div className="text-[10px] text-[#B0B0B0] mt-6 mb-4">Students</div>

        <div className="space-y-4">
          {students.map((student) => (
            <div key={student.id} className="flex items-center justify-between h-[68px]">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full  flex items-center justify-center">
                <img
                      src={student.image}
                      alt={"Group Call"}
                      className=" rounded-lg object-cover"
                    />
                </div>
                <div>
                  <div className="font-medium text-[8px] lg:text-[14.4px] text-[#4F4F4F]">{student.name}</div>
                  <div className="text-[6px] lg:text-xs text-[#B0B0B0]">{student.email}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {student.country && (
                    <>
                      <span className="text-[6px] lg:text-xs">{student.country.flag}</span>
                      <span className="text-[6px] lg:text-xs text-[#B0B0B0]">
                        {student.country.name}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex space-x-2">
                  <button className="text-[6px] lg:text-xs px-3 py-2 bg-[#FFEDED] border border-[#D09696] text-[#D83535] rounded-md hover:bg-red-50">
                    Reject
                  </button>
                  <button className="text-[6px] lg:text-xs px-3 py-2 bg-[#6F01D0] text-white rounded-md hover:bg-purple-800">
                    Accept
                  </button>
                </div>
              </div>
              <div className='border  border-[#D0D5DD]'></div>
            </div>
          
          ))}
        </div>
      </div>
    </div>
  );
}
