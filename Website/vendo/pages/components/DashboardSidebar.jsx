import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styles from "../../styles/Home.module.css";
export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/dashboard">Home</a>
      <a className="menu-item" href="/vendor_registration">Vendor Registration</a>
      <a className="menu-item" href="/customer_complaints">Customer Complaints</a>
      <a className="menu-item" href="/vendor_complaints">Vendor Complaints</a>
      <a className='menu-item' href="/vendin_zone">Vending Zone</a>
      <a className='menu-item' href="/Weekly_bazaars">Weekly Bazaar</a>
      <a className='menu-item' href="/Government_schemes">Our schemes</a>
    </Menu>
  );
};