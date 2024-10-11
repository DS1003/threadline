import React from 'react';
import ProfileInfo from './ProfileInfo';
import StoryCircles from './Stories'; // Assurez-vous que le chemin est correct
import CreatePostCard from './CreatePost'; // Assurez-vous que le chemin est correct
import Post from './ui/PostCard';
import Sidebar  from './Sidebar';
import RightSidebar from './RightSidebar';

export default function MainFeed() {
    return (
        <div className="max-w-8xl mx-auto ml-20 mt-8 overflow-scroll">
            {/* Conteneur Flex pour afficher ProfileInfo à gauche et les Stories à droite */}
            <div className="flex gap-6">
                {/* Le profil sur la gauche */}
                <div className="w-1/4 pl-8">
                    <ProfileInfo /> <Sidebar/>
                </div>
                

                {/* Les Stories et le formulaire de création de post à droite */}
                <div className="flex-1 ">
                    {/* Les Stories */}
                    <div className="mb-6">
                        <StoryCircles />
                    </div>
                    {/* Le formulaire de création de post */}
                    <CreatePostCard /><Post/><Post/> 
                    
                    
                </div>
                <div className="w-1/4 ">
                     <RightSidebar/>
                </div>
                

            </div>
        </div>
    );
}
