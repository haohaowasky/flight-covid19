import React, { useContext, useState } from 'react';
import { RegionContext } from '../contexts/RegionContext'

const NewRegionForm = () => {
    const { regionDispatch } = useContext(RegionContext);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        regionDispatch({type: 'ADD_REGION', region:{
            name, status
        }});
        setName('');
        setStatus('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className= "Admin"> Admin Portal </div>
            <input type="text" placeholder="region name" value={name}
                onChange={(e) => setName(e.target.value)} requried="true" />
            <input type="text" placeholder="region status" value={status}
                onChange={(e) => setStatus(e.target.value)} requried="true" />
            <input type="submit"  value="add region" />
        </form>
    )
}

export default NewRegionForm;
