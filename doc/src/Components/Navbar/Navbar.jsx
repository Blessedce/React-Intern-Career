import React, { useContext, useRef, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    const menuref = useRef();

    const dropdown_toggle = (e) => {
        menuref.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open'); 
    }
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Botany & Beauty</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuref} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("homedecor")}}><Link style={{ textDecoration: 'none'}} to='/homedecor'>Home Decor</Link>{menu==="homedecor"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("gardendecor")}}><Link style={{ textDecoration: 'none'}} to='/gardendecor'>Garden Decor</Link>{menu==="gardendecor"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
                
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar