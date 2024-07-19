import React from 'react'
import './Styles/Home.css';
import { Link } from "react-router-dom";
import Button from './Components/button1';
import Home1 from './Components/Home1';
import Solution from './Components/Solution';
import Card1 from './Components/Card1';
import BotpressChat from './BotpressChat';
import myimg from './Assets/image4.jpg';
const styles = {
    Text: {
      color: '#030303',
      fontSize: '24px',
      fontFamily: 'Poppins',
      fontWeight: 600,
      lineHeight: '26px',
    },
  };
  const defaultProps = {
    text: 'AutoChatAdvisor',
  };  
const Home = (props) => {
  return (
    <>
    <div style={styles.Text} className='cont'>
      {props.text ?? defaultProps.text}
    <Home1/>
    <Solution/>
    <Card1/>
   <div className='btn1'>
    </div>
    </div>
   <BotpressChat/>
  </>
  )
}

export default Home;
