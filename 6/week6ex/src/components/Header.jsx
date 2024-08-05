

//Header component that takes a title as a prop and renders it inside a div

import React from 'react';

// Define the Header component
function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
