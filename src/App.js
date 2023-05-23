import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <div className="flex">
      {/* <Navbar /> */}
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;