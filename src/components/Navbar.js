import React, { useContext } from 'react';
import { RegionContext } from '../contexts/RegionContext';

const Navbar = () => {
    const { regions } = useContext(RegionContext);
    return ( 
        <div className="navbar">
            <h1> Most Covid-19 vulnerable region </h1>
            <p>Currently there are { regions.length } regions that is lack of supplies... </p>
        </div>
     );
}
 
export default Navbar;