import React from "react"
import logo from "../../name_and_logo/sukoonsagarlogo-1.png"
import name from '../../name_and_logo/SukunSagarLogo2.png'
import '../../Styling/Header.scss'
import {Link} from 'react-scroll'
import Hamburger from "hamburger-react"
import { useState } from "react"

const Header = function() {
    let[burger1, setBurger1] = useState(false);
    return(
        <div className='Header'>
            <div className="nameLogo">
                <img src={logo}className="logo"></img>
                <img src={name} className="name" />
            </div>
            <div className={!burger1 ? "nav" : "navl"}>
                <p>
                <Link activeClass="home" smooth spy to="home" className='home' offset='0' onClick={() =>(setBurger1(false))}>Home</Link> 
                </p>
                <p>
                <Link activeClass="about" smooth spy to="about" className='about' offset='0' onClick={() =>(setBurger1(false))}>About</Link>
                </p>
                <p>
                <Link activeClass="menu" smooth spy to="menu" className='menu' offset='0' onClick={() =>(setBurger1(false))}>Menu</Link>
                </p>
                <p>
                <Link activeClass="review" smooth spy to="review" className='review' offset='0' onClick={() =>(setBurger1(false))}>Reviews</Link>
                </p>
                <p>
                <Link activeClass="contact" smooth spy to="contact" className='contact ' offset='0' onClick={() =>(setBurger1(false))}>Contacts</Link>
                </p>
            </div>
            <div className="ham">
                    <Hamburger toggled={burger1} toggle={setBurger1}/> 
            </div>
        </div>
    )
}

export default Header;