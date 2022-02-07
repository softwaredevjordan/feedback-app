import React from 'react';
import PropTypes from 'prop-types';


function Header ({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor, 
    color: textColor,
  }


  return (
  <header style={headerStyles}>
    <div className='container'>
      <h2>{ text }</h2>
    </div>
  </header>
  )
}


// default if no var is given
Header.defaultProps = {
  text: 'default',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}


// type checking the prop types
Header.propTypes = {
  text: PropTypes.string
}


export default Header

