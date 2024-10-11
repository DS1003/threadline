import React from 'react';
import Header from './components/Header';  // Assurez-vous que le chemin est correct
import MainFeed from './components/MAinFeed';
import './index.css'; // ou './tailwind.css' selon le nom de ton fichier

function App() {
  return (
    
    <div>
      <script src="https://cdn.tailwindcss.com"></script>
      <Header />
      <MainFeed />
      {/* Le reste de ton application */}
    </div>
  );
}

export default App;
