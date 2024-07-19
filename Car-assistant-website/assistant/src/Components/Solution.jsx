import React from 'react';

const styles = {
  Text: {
    position:'relative',
    top:'266px',
    left:'46px',
    color: '#252525',
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 300,
    lineHeight: '24px',
  },
};

const defaultProps = {
  text: 'Click below the message icon to chat with bot',
};

const Solution = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Solution;