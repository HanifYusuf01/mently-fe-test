'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home, Folder, Activity, Users, MessageSquare, DollarSign, Award, 
  BarChart2, Settings, LogOut, HelpCircle, Menu, X
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect screen size and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      
      // Auto-collapse sidebar on larger screens if coming from mobile
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial state on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle sidebar function
  const toggleSidebar = () => {
    if (isMobileView) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Programs', href: '/programs', icon: Folder },
    { name: 'Activities', href: '/activities', icon: Activity },
    { name: 'Users', href: '/users', icon: Users },
    { name: 'Forums', href: '/forums', icon: MessageSquare },
    { name: 'Finances', href: '/finances', icon: DollarSign },
    { name: 'Rewards', href: '/rewards', icon: Award, comingSoon: true },
    { name: 'Analytics', href: '/analytics', icon: BarChart2 },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  // Mobile menu overlay
  const MobileMenu = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
         onClick={() => setIsMobileMenuOpen(false)}>
      <div 
        className="bg-[#340260] text-white h-full w-64 transition-all duration-300 transform"
        onClick={(e) => e.stopPropagation()}>
        <div className="p-4 flex justify-between items-center">
          <Link href="/dashboard" className="flex gap-2 items-center">
            <img
              src="/images/ClipPath.svg"
              alt="clip path"
              className="h-6 w-6 bg-white"
            />
            <span className="font-bold text-xl ml-2">techrity</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 rounded-md hover:bg-purple-800"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="px-2 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`py-3 rounded-md transition-colors flex items-center px-2 ${
                  isActive ? 'bg-white text-purple-900' : 'hover:bg-purple-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon size={20} />
                <span className="ml-3">{item.name}</span>
                {item.comingSoon && (
                  <span className="ml-auto text-xs bg-purple-700 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-purple-800">
          <div className="space-y-4">
            <div className="text-sm text-purple-300">
              Got some questions, enquiries or need help?
            </div>
            <Link 
              href="#" 
              className="text-sm text-purple-300 hover:text-white flex items-center"
            >
              <HelpCircle size={16} className="mr-2" />
              Visit Mentor Help Desk Here
            </Link>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm">Switch to Classic Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-purple-800">
          <Link
            href="#"
            className="flex items-center text-purple-300 hover:text-white"
          >
            <LogOut size={20} />
            <span className="ml-3">Log Out</span>
          </Link>
        </div>
      </div>
    </div>
  );

  // Mobile button that always shows on small screens
  const MobileMenuButton = () => (
    <button
      onClick={toggleSidebar}
      className="fixed top-4 left-4 z-30 p-2 rounded-md bg-[#340260] text-white shadow-lg"
    >
      <Menu size={20} />
    </button>
  );

  // Desktop sidebar
  const DesktopSidebar = () => (
    <div className={`bg-[#340260] text-white h-[1200px] ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <Link href="/dashboard" className="flex gap-2 items-center">
              <img
                src="/images/ClipPath.svg"
                alt="clip path"
                className="h-6 w-6 bg-white"
              />
              <span className="font-bold text-xl ml-2">techrity</span>
            </Link>
          )}
          {collapsed && (
            <Link href="/dashboard" className="flex items-center">
              <span className="font-bold text-xl">t</span>
            </Link>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-purple-800"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <nav className="px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`py-3 rounded-md transition-colors flex ${
                isActive ? 'bg-white text-purple-900' : 'hover:bg-purple-800'
              }`}
            >
              <item.icon size={20} />
              {!collapsed && <span className="ml-3">{item.name}</span>}
              {!collapsed && item.comingSoon && (
                <span className="ml-auto text-xs bg-purple-700 px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-purple-800">
        {!collapsed ? (
          <div className="space-y-4">
            <div className="text-sm text-purple-300">
              Got some questions, enquiries or need help?
            </div>
            <Link 
              href="#" 
              className="text-sm text-purple-300 hover:text-white flex items-center"
            >
              <HelpCircle size={16} className="mr-2" />
              Visit Mentor Help Desk Here
            </Link>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm">Switch to Classic Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <HelpCircle size={20} />
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-purple-800">
        <Link
          href="#"
          className={`flex items-center ${collapsed ? 'justify-center' : ''} text-purple-300 hover:text-white`}
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Log Out</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Show mobile menu button on small screens */}
      {isMobileView && <MobileMenuButton />}
      
      {/* Show mobile menu overlay when open */}
      {isMobileView && <MobileMenu />}
      
      {/* Show desktop sidebar on larger screens */}
      {!isMobileView && <DesktopSidebar />}
    </>
  );
}