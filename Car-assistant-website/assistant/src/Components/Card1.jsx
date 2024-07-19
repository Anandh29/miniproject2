import React from 'react';
import image4 from '../Assets/image4.jpg';
const styles = {
    Card: {
      position:'relative',
      top: '57px',
      left: '933px',
      width: '555px',
      height: '348px',
      backgroundColor: 'rgba(29,29,31,0.16)',
      borderRadius: '12px',
      backgroundImage: `url(${image4})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
    },
  };

const Card1 = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default Card1;