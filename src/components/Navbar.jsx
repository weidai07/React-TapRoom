import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  var navContainer = {
    padding: '10px',
    marginBottom: '30px'
  };

  var listElements = {
    float: 'left',
    fontSize: '20px',
    border: '2px solid #94c9ff',
    color: '#daf3ff',
    padding: '6px',
    listStyleType: 'none',
    margin: '0px -1px'
  };

  var searchInputField = {
    float: 'right',
    padding: '10px',
    width: '20%',
    border: '2px solid DeepSkyBlue',
    borderRadius: '20px',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '20px',
    outline: 'none'
  };

  var tweetInputField = {
    float: 'right',
    padding: '10px',
    width: '8%',
    border: '2px solid DeepSkyBlue',
    borderRadius: '20px',
    fontSize: '20px',
    outline: 'none'
  };

  return (
    <div style={navContainer}>
      <ul>
        <Link to="/"><li style={listElements} >Home</li></Link>
        <Link to="/newbeer"><li style={listElements} >Create Beer</li></Link>
        <Link to="/test"><li style={listElements} >Nothing</li></Link>
        <Link to="/admin"><li style={listElements} >Admin</li></Link>
      </ul>
      <input
        type='text'
        id='tweet'
        style={tweetInputField}
        placeholder='Beer' />
      <input
        type='text'
        id='searchBar'
        style={searchInputField}
        placeholder='Search Bar' />
      <br />
    </div>
  );
}

