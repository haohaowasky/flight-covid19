import React, { useContext } from 'react';
import CreateFilmModal from './RegionStatus'
import { RegionContext } from '../contexts/RegionContext';

const RegionDetails = ( { region }) => {
    const { regionDispatch } = useContext(RegionContext);
    return ( 
        <li>
            <div className="name">{ region.name }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <button className="remove-button" onClick= {() => regionDispatch( {type: 'REMOVE_REGION', id: region.id })}>
            Remove
            </button> */}
            <CreateFilmModal/>
            </div>
            <div className="status">{ region.status }
            </div>
        </li>
     );
}

export default RegionDetails;