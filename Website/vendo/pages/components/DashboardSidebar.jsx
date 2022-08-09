import React from 'react';
import styles from "../../styles/Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FaHouseUser, FaRegIdCard, FcCustomerSupport, AiOutlineShoppingCart, GiShop, BsCalendar2WeekFill, RiGovernmentFill} from  "@fortawesome/free-solid-svg-icons";



function Side(){
  return (
    <div className='navcontainer'> 
    <div className='logocontainer'>
    <div className='logo'>
      
    </div>
    </div>
    <div className='wrapper'>
      <ul>
        <li>
        <FontAwesomeIcon icon={FaHouseUser} style={{width:"18px", cursor:"pointer"}}/>
          <a href="/dashboard">Home</a>
        </li>
        <li>
        <FontAwesomeIcon icon={FaRegIdCard} style={{width:"18px", cursor:"pointer"}}/>
          <a href="/vendor_registration">Vendor Registration</a>
        </li>
        <li>
        <FontAwesomeIcon icon={FcCustomerSupport} style={{width:"18px", cursor:"pointer"}}/>
          <a href="/customer_complaints">Customer Complaints</a>
        </li>
        <li>
        <FontAwesomeIcon icon={AiOutlineShoppingCart} style={{width:"18px", cursor:"pointer"}}/>
          <a href="/vendor_complaints">Vendor Complaints</a>
        </li>
        <li>
        <FontAwesomeIcon icon={GiShop} style={{width:"18px", cursor:"pointer"}}/>
          <a href="/vendin_zone">Vending Zones</a>
        </li>
        <li>
        <FontAwesomeIcon icon= {BsCalendar2WeekFill} style={{width:"18px", cursor:"pointer"}}/>
          <a href="/Weekly_bazaars">Weekly Bazaar</a>
        </li>
        <li>
        <FontAwesomeIcon icon={RiGovernmentFill} style={{width:"18px", cursor:"pointer"}}/>
          <a href="/Governemnt_schemes">Our Schemes</a>
        </li>
      </ul>
    </div>
    </div>
    
   
  );

};

export default Side;