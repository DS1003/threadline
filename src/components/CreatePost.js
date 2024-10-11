import React, { useState } from 'react';
import { Edit3, Video, Image, Smile, MoreHorizontal, X } from 'lucide-react';

export default function CreatePostCard() {
  const [postContent, setPostContent] = useState('');
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');

  const handleAddTag = (e) => {
    e.preventDefault();
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post Content:', postContent);
    console.log('Tags:', tags);
    // Here you would typically send the post data to your backend
    setPostContent('');
    setTags([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-2xl">
      <div className="flex items-center mb-4">
        <Edit3 className="w-5 h-5 text-blue-500 mr-2" />
        <span className="text-gray-600 font-medium">Create Post</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-start mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/100100154?v=4"
            alt="User avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <textarea
            className="flex-grow p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's on your mind?"
            rows={3}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm flex items-center">
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Add a tag"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="bg-[#CC8C87] text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Tag
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button type="button" className="flex items-center text-gray-600 hover:text-gray-800">
              <Video className="w-5 h-5 text-red-500 mr-1" />
              <span className="text-sm">Live Video</span>
            </button>
            <button type="button" className="flex items-center text-gray-600 hover:text-gray-800">
              <Image className="w-5 h-5 text-green-500 mr-1" />
              <span className="text-sm">Photo/Video</span>
            </button>
            <button type="button" className="flex items-center text-gray-600 hover:text-gray-800">
              <Smile className="w-5 h-5 text-orange-500 mr-1" />
              <span className="text-sm">Feeling/Activity</span>
            </button>
          </div>
          <button type="button" className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-[#CC8C87] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Post
        </button>
      </form>
    </div>
  );
}