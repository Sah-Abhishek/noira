import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 text-white bg-gray-900">
        {/* Your routed components go here */}
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </div>
  );
}

export default App;
