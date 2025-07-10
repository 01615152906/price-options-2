import React, { useState } from 'react';
import Link from '../Link/Link';
// import PropTypes from 'prop-types';
import { IoMdMenu, IoMdClose   } from "react-icons/io";
const NavBar = () => {


    const [open, setOpen] = useState(false)
    const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/products', name: 'Products' },
  { id: 4, path: '/products/:id', name: 'Product Details' },
  { id: 5, path: '/contact', name: 'Contact' },
];
    return (


<nav className='text-black bg-yellow-200 p-6'>
<div className='md:hidden text-2xl '
 onClick={() => setOpen(!open)}>
    {
        open === true ?
         <IoMdClose />
         : <IoMdMenu />
    }
    
</div>
<ul className={`
    md:flex duration-1000
    absolute md:static
    ${open ? 'top-16' : '-top-50'}
    bg-yellow-200 px-6 `}>
    {
    routes.map(route => <Link key={route.id} route={route} ></Link> )
}

</ul>
</nav>
    );
};

export default NavBar;