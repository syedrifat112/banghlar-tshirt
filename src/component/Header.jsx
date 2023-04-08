import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <div className="navbar bg-base-100">
<div className="flex-1">
<Link to = '/' className="btn btn-ghost normal-case text-xl">T-Shirt</Link>
<div><input type="text" placeholder="Type here" className="input w-full max-w-xs ml-8" /></div>
</div>
<div className="flex-none">
<ul className="menu menu-horizontal px-1">
  <li><NavLink to ='/'>Home</NavLink></li>
 {/* <li><NavLink to ='phone'>I Phone</NavLink></li> */}
 <li><NavLink to ='product'>Product</NavLink></li>
  <li><NavLink to = 'about'>About</NavLink></li>
</ul>
</div>
</div>
    </div>
    );
};

export default Header;