import React from 'react';
import Navbar from './Navbar';
import './Styles/Page2.css';
import { Link } from 'react-router-dom';
const Page2 = () => {
  return (
    <>
      <Navbar />
      <div className="cont2">
        <h1 className='f'>Please Enter your Car Details</h1>
        <form>
          <div>
            <label htmlFor="carNumber">Car Number:</label>
            <input type="text" id="carNumber" name="carNumber" placeholder="Car Number" />
          </div>
          <div>
            <label htmlFor="insurance">Insurance:</label>
            <input type="text" id="insurance" name="insurance" placeholder="Insurance" />
          </div>
          <div>
            <label htmlFor="pollutionCheck">Pollution Check Date:</label>
            <input type="date" id="pollutionCheck" name="pollutionCheck" />
          </div>
          <div>
            <label htmlFor="ownerName">Name of the Owner:</label>
            <input type="text" id="ownerName" name="ownerName" placeholder="Owner's Name" />
          </div>
          <div>
            <label htmlFor="license">License:</label>
            <input type="text" id="license" name="license" placeholder="License" />
          </div>
          <div>
            <label htmlFor="rcDetails">RC Details:</label>
            <input type="text" id="rcDetails" name="rcDetails" placeholder="RC Details" />
          </div>
          <div>
            <label htmlFor="servicedBefore">Have you serviced your vehicle before?</label>
          </div>
          <Link to="/home"><button className='bttn1'>Yes</button></Link>
         <Link to="/map"><button className='bttn2'>No</button></Link> 
        </form>
      </div>
    </>
  );
};

export default Page2;
