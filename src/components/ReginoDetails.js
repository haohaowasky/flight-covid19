import React, { useContext } from 'react';
import CreateAidModal from './RegionStatus'
import { RegionContext } from '../contexts/RegionContext';

const RegionDetails = ( { region }) => {
    const { regionDispatch } = useContext(RegionContext);
    if (region.status === "risk: high"){
        console.log("got region.status",region.status )
        return ( 
            <li>
                <div className="name">{ region.name }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* <button className="remove-button" onClick= {() => regionDispatch( {type: 'REMOVE_REGION', id: region.id })}>
                Remove
                </button> */}
                <CreateAidModal region={region}/>
                </div>
    
                <div className="riskstatus" >{ region.status }
                </div>
            </li>
         );
    }
    else {
    return ( 
        <li>
            <div className="name">{ region.name }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <button className="remove-button" onClick= {() => regionDispatch( {type: 'REMOVE_REGION', id: region.id })}>
            Remove
            </button> */}
            <CreateFilmModal region={region}/>
            </div>

            <div className="deriskstatus">{ region.status }
            </div>
        </li>
     );
    }
}

export default RegionDetails;