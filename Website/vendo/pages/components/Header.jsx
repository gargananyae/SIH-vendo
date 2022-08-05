import React from 'react';
import styles from "../../styles/Home.module.css";
import Imag1 from "../../Images/Photo_transparent.png";
import Image from 'next/image';



function Header() {
  return (
    <nav className='main-nav'>
        <div className='logo'>
            <h2>
            <span>D</span>iy
            <span>C</span>am
            </h2>
        </div>
        <div className='menu-link'>
           <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            </ul> 
        </div>
        <div>
            <div className='social-media'>
                <ul className='socialmedia-desktop'>
                    <li>
                        <a 
                        href='https://www.facebook.com/diycamindia/'>
                           
                        </a>
                    </li>
                    <li>
                        <a 
                        href='https://www.linkedin.com/company/diycam/mycompany/'>
                            
                        </a>
                    </li>
                    <li>
                        <a 
                        href='https://www.youtube.com/c/Diycamindia'>
                            
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    
    
  );
}

export default Header