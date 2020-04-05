import React, { useContext } from 'react';
import { RegionContext } from '../contexts/RegionContext';
import RegionDetails from './ReginoDetails'

const RegionList = () => {
    const { regions } = useContext(RegionContext);
    return regions.length ? ( 
        <div className= "region-list">
            <ul>
                { regions.map(region => {
                    return ( <RegionDetails region={region} key ={region.id} /> );
                })}
            </ul>
        </div>
     ) : (
         <div className= "empty"> Yay we beat Covid-19 </div>
     )
}
 
export default RegionList;