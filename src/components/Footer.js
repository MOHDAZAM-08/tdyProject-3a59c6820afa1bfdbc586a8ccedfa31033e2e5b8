import React from 'react'

import img1 from '../img/logo.png';

import { SiGmail } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
    return (
        <div>
            <div className='footer-section'>

                <div className='foot'>

                    <div className='logo-img'>
                        <img className='logo' src={img1} style={{width:"100%"}}/>
                    </div>

                    <div className='feat-sec'>
                        <div className='features'>FEATURES</div>
                        <div className='underline'></div>
                        <div className='links'>

                            <div className='linkF'>HOME</div>

                            <div className='linkF'>ABOUT</div>

                            <div className='linkF'>SERVICES</div>

                            <div className='linkF'>PROJECTS</div>

                            <div className='linkF'>CONTACT US</div>

                        </div>
                    </div>

                    <div className='office-sec'>

                        <div className="ud">
                        <div className='office'>OFFICE</div>
                        <div className='underline-of'></div>
                        </div>
                        <div className='of-para'>
                            A-54, Basement W.H.S. Timber Market,<br></br>
                            Kirti Nagar, New Delhi-110015<br></br>
                            thedesign.yard@outlook.com
                        <div className='underline-sec'></div>
                        <div className='number'>+919213441244</div>
                        </div>
                    </div>


                    <div className='cont-sec'>

                        <div className='mail-id'>
                            
                            <div style={{fontSize:"20px"}}><SiGmail/></div>
                            <div className='head-mail'> Enter Your Mail id</div>

                        </div>
                        <div className='underline-third'>
                        </div>

                        <div className='icon'>
                            <BsFacebook/>
                            <BsWhatsapp/>
                            <FaTwitter/>
                        </div>
                        
                    </div>


                </div>

                <div className='foot-bot'>
                    <div className='line'></div>
                    <div className='copyright'>Copyright ©2023 All rights reserved | This Website is made with love by ABC TEAM
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
