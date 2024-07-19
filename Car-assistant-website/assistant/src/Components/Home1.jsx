import React from 'react';

const styles = {
  Text: {
    position:'relative',
    top:'231px',
    left:'30px',
    color: '#030303',
    fontSize: '64px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    lineHeight: '70px',
  },
};

const defaultProps = {
  text: 'Hi Iam here to help',
};

const Home1 = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Home1;