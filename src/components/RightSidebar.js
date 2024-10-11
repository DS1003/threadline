import React from 'react';
import { Search, MoreHorizontal, Calendar } from 'lucide-react';

const MessageItem = ({ name, avatar }) => (
  <div className="flex items-center mb-3">
    <img src="https://avatars.githubusercontent.com/u/100100154?v=4" alt={name} className="w-10 h-10 rounded-full mr-3" />
    <span>{name}</span>
  </div>
);

const EventItem = ({ title, date, location }) => (
  <div className="flex items-center mb-3">
    <Calendar size={20} className="mr-3 text-blue-500" />
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{date} - {location}</p>
    </div>
  </div>
);

const RightSidebar = () => {
  const messages = [
    { name: 'Roger Korsgaard', avatar: '/roger.jpg' },
    { name: 'Terry Torff', avatar: '/terry.jpg' },
    { name: 'Angel Bergson', avatar: '/angel.jpg' },
    // Add more messages...
  ];

  const events = [
    { title: '10 Events Invites', date: '', location: '' },
    { title: 'Design System Collaboration', date: 'Thu', location: 'Harpoori Mall, HK' },
    { title: 'Web Dev 2.0 Meetup', date: '', location: 'Yoshkar-Ola, Russia' },
    { title: "Prada's Invitation Birthday", date: '', location: '' },
  ];

  return (
    <aside className=" bg-white p-4  overflow-y-auto">
      <div className="mb-6 max-w-lg">
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <div className="flex mb-4">
          <button className="flex-1 text-center py-1 border-b-2 border-blue-500 text-blue-500">Primary</button>
          <button className="flex-1 text-center py-1 text-gray-500">General</button>
          <button className="flex-1 text-center py-1 text-blue-500">Requests(4)</button>
        </div>
        {messages.map((message, index) => (
          <MessageItem key={index} {...message} />
        ))}
        <button className="text-blue-500 font-semibold mt-2">View All</button>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Events</h2>
          <MoreHorizontal size={20} className="text-gray-500" />
        </div>
        {events.map((event, index) => (
          <EventItem key={index} {...event} />
        ))}
      </div>
    </aside>
  );
};

export default RightSidebar;