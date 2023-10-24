import React, { useState } from 'react';
import './title.css'
import CartIcon from "../../assests/cart-icon.png";
import Dropdown from '../../assests/down-arrow.png';


const Title = (props)=>{

        const [isOpen, setIsOpen] = useState(false);
    

    return(
        <div className="title-bar">
            <div className='index-button'><a href="!#" role="button">Start Bootstrap</a></div>
            <div className='index-button'><a href="!#" role="button">Home</a></div>
            <div className='index-button'><a href="!#" role="button">About</a></div>
            <div className="dropdown-container">
                <button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn'>Shop<img src={Dropdown} className='dropdown-image' alt='dropdown-image'/></button>
                {isOpen && (<ul className='dropdown-menu'>
                    <li><a href="!#">All Products</a></li>
                    <hr></hr>
                    <li><a href="!#">Popular Items</a></li>
                    <hr className='zero-line'></hr>
                    <li><a href="!#">New Arrival</a></li>
                </ul>)}
            </div>
            <button className='cart-container'>
              <img src={CartIcon} alt="Cart" width={16} height={16} />
              <span className="cart-name">Cart </span>
              <span className="cart-count">{props.cartCount}</span>
            </button>
        </div>
    )
}

export default Title;