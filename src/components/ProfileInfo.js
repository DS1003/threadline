import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';

export default function ProfileInfo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      {/* Image de couverture */}
      <div className="relative h-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-80"></div>
        <Image
          src="/images/photo.jpeg" // Chemin de l'image de couverture
          alt="Profile cover image"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
        />
      </div>

      <div className="p-6 pt-0">
        {/* Photo de profil */}
        <div 
          className="relative w-24 h-24 mx-auto -mt-12 mb-4 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/images/profile-image.jpg" // Chemin de l'image de profil
            alt="Profile picture of Reinhard Van Zry"
            layout="fill"
            className="rounded-full border-4 border-white object-cover transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.8 : 1 }}
          />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold">
              View Profile
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold text-center mb-1">Reinhard Van Zry</h2>
        <p className="text-gray-500 text-sm text-center mb-4">@Reinhard_</p>
        <div className="flex justify-between w-full mb-6">
          {['Post', 'Followers', 'Following'].map((label, index) => (
            <div key={label} className="text-center group">
              <p className="font-semibold transition-transform duration-300 group-hover:scale-110">
                {[250, 2022, 590][index]}
              </p>
              <p className="text-xs text-gray-500">{label}</p>
            </div>
          ))}
        </div>
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
          My Profile
        </Button>
      </div>
    </div>
  );
}
