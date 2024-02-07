import React from 'react';



const Header = ({ setIsAdding }) => {
  return (
    <header>
      <h1 className="text-4xl font-bold text-center mt-8">Admin Dashboard</h1>

        <div className="flex justify-center mt-8 text-2xl">
        <button onClick={() => setIsAdding(true)}>Add Users</button>
        
      </div>
    </header>
  );
};

export default Header;