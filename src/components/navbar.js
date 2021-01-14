import React from 'react';
import {Link} from "react-router-dom"
import Home from './navbar-components/home';
import siteLogo from "../sitelogo.png"

const NavBar = () =>{

return <div className="navbar">
    <div className="img-links-wrapper">
    <img src={siteLogo} alt="prepulator_logo"/>
    <div className="link-wrapper">
        <div className="other-link-wrapper">
        <p><Link to="/" className="link">Home</Link></p>
<p><Link to="/food-calc" className="link">Food Storage</Link></p>
<p><Link to="/self-defense" className="link">Self Defense</Link></p>
<p><Link to="/power" className="link">Power</Link></p>
<p><Link to="/medical" className="link">Medical</Link></p>
        </div>
    
    </div>
    </div>
    <div className="navbar-bottom-line">&nbsp;</div>

</div>
}
export default NavBar;