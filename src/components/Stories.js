import React, { useState } from 'react';
import { Plus, X, Heart, Share2, MessageCircle, Send } from 'lucide-react';

const StoryCircle = ({ name, imageUrl, isYourStory, onAddStory, onViewStory }) => (
  <div className="flex flex-col items-center space-y-1">
    <button
      onClick={isYourStory ? onAddStory : onViewStory}
      className={`relative w-16 h-16 ${isYourStory ? 'bg-gray-200' : 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600'} rounded-full p-0.5`}
    >
      <img
        src="https://avatars.githubusercontent.com/u/100100154?v=4"
        alt={`${name}'s story`}
        className="w-full h-full object-cover rounded-full border-2 border-white"
      />
      {isYourStory && (
        <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
          <Plus size={12} color="white" />
        </div>
      )}
    </button>
    <span className="text-xs text-center">{name}</span>
  </div>
);

const AddStoryModal = ({ isOpen, onClose, onAddStory }) => {
  // (Restez avec le code existant pour AddStoryModal)
};

const StoryViewModal = ({ isOpen, onClose, story }) => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]); 

  if (!isOpen || !story) return null;

  const handleLike = () => {
    setLiked(!liked);
    // Dans une vraie application, envoyez cela au serveur
  };

  const handleShare = () => {
    // Implémenter la fonctionnalité de partage dans une vraie app
    console.log("Sharing story:", story.name);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, { text: comment, user: "You" }]);
      setComment('');
      // Envoyer cela au serveur dans une vraie application
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center max-w-2xl  justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{story.name}'s Story</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-4">
          <div className="bg-gray-200 h-64 flex items-center justify-center mb-4">
            Contenu de la story (Image/Vidéo/Texte)
          </div>
          <div className="flex justify-between mb-4">
            <button onClick={handleLike} className={`flex items-center ${liked ? 'text-red-500' : 'text-gray-500'}`}>
              <Heart size={20} className={liked ? 'fill-current' : ''} />
              <span className="ml-1">Like</span>
            </button>
            <button onClick={handleShare} className="flex items-center text-gray-500">
              <Share2 size={20} />
              <span className="ml-1">Share</span>
            </button>
            <button onClick={() => document.getElementById('comment-input').focus()} className="flex items-center text-gray-500">
              <MessageCircle size={20} />
              <span className="ml-1">Comment</span>
            </button>
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-2">Commentaires</h3>
            {comments.map((c, index) => (
              <p key={index} className="mb-1"><strong>{c.user}:</strong> {c.text}</p>
            ))}
          </div>
          <form onSubmit={handleComment} className="flex">
            <input
              id="comment-input"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Ajouter un commentaire..."
              className="flex-grow p-2 border border-gray-300 rounded-l"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const StoryCircles = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const stories = [
    { name: "Your Story", imageUrl: "/api/placeholder/64/64", isYourStory: true },
    { name: "Justin Rosser", imageUrl: "/api/placeholder/64/64" },
    { name: "Davis Dorwart", imageUrl: "/api/placeholder/64/64" },
    { name: "Randy Saris", imageUrl: "/api/placeholder/64/64" },
    { name: "Charlie Press", imageUrl: "/api/placeholder/64/64" },
    { name: "Zaire Herwitz", imageUrl: "/api/placeholder/64/64" },
    { name: "Talan Philips", imageUrl: "/api/placeholder/64/64" },
    { name: "Corey Gouse", imageUrl: "/api/placeholder/64/64" },
  ];

  const handleAddStory = (content) => {
    console.log("New story added:", content);
  };

  const handleViewStory = (story) => {
    setSelectedStory(story);
    setIsViewModalOpen(true);
  };

  return (
    <>
      <div className="flex space-x-4 p-4 overflow-x-auto bg-white max-w-2xl rounded-lg">
        {stories.map((story, index) => (
          <StoryCircle
            key={index}
            {...story}
            onAddStory={() => setIsAddModalOpen(true)}
            onViewStory={() => handleViewStory(story)}
          />
        ))}
      </div>
      <AddStoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddStory={handleAddStory}
      />
      <StoryViewModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        story={selectedStory}
      />
    </>
  );
};

export default StoryCircles;
