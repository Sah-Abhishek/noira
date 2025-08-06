
import React from 'react';
import {
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaStar,
  FaSignOutAlt,
  FaUserFriends,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-black text-white flex flex-col justify-between p-4">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-yellow-400 rounded-full p-2">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-yellow-400">NOIRA</h1>
            <p className="text-sm text-gray-400">Therapist Portal</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2">
          <SidebarItem icon={<FaUserFriends />} label="Therapists" active />
          <SidebarItem icon={<FaCalendarAlt />} label="Schedule" />
          <SidebarItem icon={<FaClock />} label="Bookings" />
          <SidebarItem icon={<FaStar />} label="Feedback" />
          <SidebarItem icon={<FaUser />} label="Profile" />
        </nav>
      </div>

      {/* User profile and logout */}
      <div className="bg-[#1a1a1a] rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="/user.jpg"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-yellow-400"
          />
          <div>
            <h3 className="text-sm font-semibold">Sarah Johnson</h3>
            <p className="text-xs text-gray-400">Massage Therapist</p>
          </div>
        </div>
        <button className="text-red-500 text-sm flex items-center gap-2 hover:text-red-600">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer ${active ? 'bg-[#2a2a2a]' : 'hover:bg-[#1a1a1a]'
      }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
