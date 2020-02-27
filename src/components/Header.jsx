import React from 'react';
import { Link } from 'react-router-dom';


function Header() {

  var headerStyles = {
    backgroundColor: 'red',
    margin: '100px auto 100px auto',
    textAlign: 'center',
    fontSize: '40px',
    display: 'inline-block center',
    padding: '10px'
  };

  return (
    <div>
      <h1 style={headerStyles} >Tap Room</h1>
    </div>
  );
}

export default Header;  