"use client";

import { useState } from "react";
import { Bell, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (

    <header className="bg-white shadow-sm z-10">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button can be added here */}
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
              <img
                src="/images/notifications.svg"
                alt="notification"
                className="h-6 w-6"
              />
            </button>

            <div className="ml-3 relative">
              <div className="flex items-center">
                {/* Profile button */}
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center max-w-xs rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                    <img
                      src="/images/ClipPath.svg"
                      alt="clip path"
                      className="w-4 h-4 lg:h-6 lg:w-6"
                    />
                  </div>
                </button>
                ß{/* Profile info - moved outside the button */}
                <div className="ml-2 flex flex-col text-left">
                  <p className="text-[#B0B0B0] font-medium text-[10px] lg:text-sm">
                    Techrity Foun
                  </p>
                  <span className=" text-[8px] lg:text-xs  font-medium text-[#B0B0B0]">Member</span>
                </div>
              </div>

              {showProfileMenu && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
