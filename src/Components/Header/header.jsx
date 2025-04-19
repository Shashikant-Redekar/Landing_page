import React from "react"
import logo from "../../name_and_logo/sukoonsagarlogo-1.png"
import name from '../../name_and_logo/SukunSagarLogo2.png'
import '../../Styling/Header.scss'
import {Link} from 'react-scroll'

const Header = function() {
    return(
        <div className='Header'>
            <div className="nameLogo">
                <img src={logo}className="logo"></img>
                <img src={name} className="name" />
            </div>
            <div className="nav">
                <p>
                <Link activeClass="active" smooth spy to="about" className='about' offset='0'>About</Link>
                </p>
                <p>
                <Link activeClass="menu" smooth spy to="menu" className='menu' offset='0'>Menu</Link>
                </p>
                <p>
                <Link activeClass="contact" smooth spy to="contact" className='contact' offset='0'>Contact</Link>
                </p>
                <p>
                <Link activeClass="res" smooth spy to="res" className='res ' offset='0'>Reservation</Link>
                </p>
            </div>
        </div>
    )
}

export default Header;