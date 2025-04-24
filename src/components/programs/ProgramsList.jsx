"use client";

import { useState } from "react";
import { MoreVertical, Settings } from "lucide-react";
import Link from "next/link";
import { programs } from "@/lib/data/programsData";
import { AvatarOverlap } from "../utils/OverlappingAvatars";

export default function ProgramsList({ showAll = false }) {
  const [filter, setFilter] = useState("Active");

  // Filter programs based on the selected filter
  const filteredPrograms = showAll
    ? filter === "All"
      ? programs
      : programs.filter((program) => program.status === filter)
    : programs.slice(0, 3); // Show only first 3 if not showing all

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full md:w-[250px] lg:w-[329px] lg:h-[710px]">
      <div className="flex justify-between items-center p-4 border-b">
      <div className="flex gap-2 items-center">
          <img
            src={"/images/Vector.png"}
            alt={"hamburger"}
            className="object-cover"
          />
        <h2 className="text-[10px] md:text-xs lg:text-lg text-[#B0B0B0] font-medium">Programs</h2>
        </div>
        <div className="flex items-center space-x-4">
          {!showAll && (
            <Link
              href="/programs"
              className="text-[8px] lg:text-sm text-[#6F01D0] hover:text-purple-800"
            >
              See all
            </Link>
          )}
          {showAll && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#B0B0B0]">Filter:</span>
              <select
                className="text-sm border rounded p-1"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>Active</option>
                <option>Completed</option>
                <option>All</option>
              </select>
            </div>
          )}
          <button className="text-[#B0B0B0] hover:text-gray-600">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      <div className="divide-y">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="p-4 md:h-[12] lg:h-[20]">
            <div className="flex flex-col items-start space-x-4 p-2">
              <div className="bg-gray rounded-lg w-full h-24 flex items-center justify-center overflow-hidden">
                {program.image ? (
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Content Positioned on top of the image */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {/* Top section with title and settings icon */}
                      <div className="flex justify-between items-start">
                        <h2 className="text-white text-base md:text-sm lg:text-xl font-bold leading-tight">
                          {program.title}
                        </h2>

                        <button className="text-white bg-transparent p-1 rounded-full hover:bg-white hover:bg-opacity-20">
                          <Settings size={18} />
                        </button>
                      </div>

                      {/* Bottom section with button */}
                      <div className="mb-2 ml-1">
                        <span className="text-[10px] lg:text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        <span className={`w-2 h-2 rounded-full  ${program.status === 'ongoing' ? 'bg-[#1F8B01]' : 'bg-[#1C0AE1]'}`}></span>
                          {program.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <span className="text-2xl text-[#B0B0B0]">
                    {program.title.charAt(0)}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <p className="text-[8px]  text-[#B0B0B0] mt-1">
                  {program.description}
                </p>

                <div className="flex items-center mt-3 space-x-2">
                  <div className="flex -space-x-2">
                  <AvatarOverlap/>
                  </div>
                  <span className="text-[8px] md:text-[6px] lg:text-xs text-[#B0B0B0] self-center">
                     Mentors
                  </span>
                  <div className="flex space-x-2">
                <Link
                  href={`/programs/${program.id}/details`}
                  className="text-[8px] md:text-[6px] lg:text-xs px-1 py-1 border text-[#B0B0B0] border-gray-500 rounded-md hover:bg-gray-50"
                >
                  View Details
                </Link>
                <Link
                  href={`/programs/${program.id}/analyze`}
                  className="text-[8px] lg:text-xs px-3 py-1 bg-purple-700 text-white rounded-md hover:bg-purple-800"
                >
                  Analyze
                </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
