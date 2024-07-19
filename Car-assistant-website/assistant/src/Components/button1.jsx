import React from 'react';
const styles = {
  Button: {
    cursor: 'pointer',
    position: 'relative',
    top: '3px',
    left: '1050px',
    width: '140px',
    height: '46px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: '#030303',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Poppins',
    lineHeight: '18px',
    outline: 'none',
    transition: 'background-color 0.3s ease',
  },
};

const defaultProps = {
  label: 'Get started',
};

const Button = (props) => {
  const handleMouseEnter = (event) => {
    event.target.style.background = 'linear-gradient(to right, #FF416C, #FF4B2B)';
  };

  const handleMouseLeave = (event) => {
    event.target.style.background = '#030303';
  };

  return (
    <button
      style={styles.Button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;
