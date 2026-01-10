import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutDashboard, Folder, Plus } from 'lucide-react'



const Sidebar = () => {
  


   return (
    <div className="w-64 border border-r-2xl border-gray-300 shadow-xl shadow-gray-700 h-screen fixed left-0 top-0 p-6">
      <h2 className="text-2xl font-bold mb-8">Owner Panel</h2>
      <nav className="space-y-4">
        <Link className="flex items-center gap-2 text-gray-700 hover:text-black" to="/">
          <LayoutDashboard size={18} /> Dashboard
        </Link>
        <Link className="flex items-center gap-2 text-gray-700 hover:text-black" to="/projects">
          <Folder size={18} /> Projects
        </Link>
        <Link className="flex items-center gap-2 text-gray-700 hover:text-black" to="/add-project">
          <Plus size={18} /> Add Project
        </Link>
      
      </nav>
    </div>
  );
}

export default Sidebar