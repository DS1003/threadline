import React, { useState } from 'react'
import { Heart, MessageCircle, Share2, Bookmark, Star } from 'lucide-react'

export default function Post() {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [rated, setRated] = useState(false)
  const [likeCount, setLikeCount] = useState(30)
  const [commentCount, setCommentCount] = useState(12)
  const [shareCount, setShareCount] = useState(5)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
  }

  const handleRate = () => {
    setRated(!rated)
  }

  return (
    <div className="max-w-2xl mt-3 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://avatars.githubusercontent.com/u/100100154?v=4"
              alt="Cameron Williamson"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Cameron Williamson</p>
              <p className="text-sm text-gray-500">14 Aug at 4:21 PM</p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/100100154?v=4"
            alt="Post image"
            className="w-full h-90 object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 ${
                liked ? 'text-red-500' : 'text-gray-500'
              } transition-colors duration-200`}
            >
              <Heart
                className={`w-5 h-5 ${
                  liked ? 'fill-current' : ''
                } transform transition-transform duration-200 ${
                  liked ? 'scale-125' : ''
                }`}
              />
              <span>{likeCount}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500">
              <MessageCircle className="w-5 h-5" />
              <span>{commentCount}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500">
              <Share2 className="w-5 h-5" />
              <span>{shareCount}</span>
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleBookmark}
              className={`${
                bookmarked ? 'text-blue-500' : 'text-gray-500'
              } transition-colors duration-200`}
            >
              <Bookmark
                className={`w-5 h-5 ${
                  bookmarked ? 'fill-current' : ''
                } transform transition-transform duration-200 ${
                  bookmarked ? 'scale-125' : ''
                }`}
              />
            </button>
            <button
              onClick={handleRate}
              className={`${
                rated ? 'text-yellow-500' : 'text-gray-500'
              } transition-colors duration-200`}
            >
              <Star
                className={`w-5 h-5 ${
                  rated ? 'fill-current' : ''
                } transform transition-transform duration-200 ${
                  rated ? 'scale-125' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}