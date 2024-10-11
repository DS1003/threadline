import React, { useState } from 'react';
import { Search, Bell, Bookmark, ChevronDown } from 'lucide-react';
import { Input } from './ui/Input'; // Vérifie ce chemin aussi
import { Button } from './ui/Button'; // Chemin mis à jour
import { Avatar, AvatarImage } from './ui/Avatar'; // Chemin mis à jour

export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="bg-white  border-b transition-shadow duration-300 ease-in-out" style={{
      boxShadow: isSearchFocused ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <svg className="h-8 w-8 text-[#cc8c87ab] transition-transform duration-300 ease-in-out transform hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="ml-2 text-[#cc8c87ab] font-bold text-xl">Threadline</span>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className={`absolute left-3 top-2.5 transition-colors duration-300 ease-in-out ${isSearchFocused ? 'text-blue-500' : 'text-gray-400'}`} size={20} />
              <Input
                type="text"
                placeholder="Search"
                className="w-full pl-10 bg-gray-100 focus:bg-white transition-all duration-300 ease-in-out"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative group">
              <Bookmark className="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition-colors duration-300 ease-in-out" />
              <span className="sr-only">Bookmarks</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">3</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative group">
              <Bell className="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition-colors duration-300 ease-in-out" />
              <span className="sr-only">Notifications</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">2</span>
            </Button>
            <Avatar className="h-8 w-8 ring-2 ring-transparent hover:ring-blue-500 transition-all duration-300 ease-in-out">
              <AvatarImage src="" alt="Jakob Botosh" />
            </Avatar>
            <Button variant="ghost" className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors duration-300 ease-in-out">
              Jakob Botosh
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
