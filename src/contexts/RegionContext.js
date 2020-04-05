import React, { createContext, useReducer, useEffect } from 'react';
import { regionReducer } from '../reducers/regionReducer';
import countyData from './data.js'

export const RegionContext = createContext();

const RegionContextProvider = (props) => {
    const [regions, regionDispatch] = useReducer(regionReducer, [], () => {
        console.log(countyData)
        var myObject = JSON.parse(countyData);
        const localData = localStorage.getItem('regions');
        console.log(localData)
        return myObject ? JSON.parse(myObject): []
    });

    useEffect(() => {
        localStorage.setItem('regions', JSON.stringify(regions))
    }, [regions]);

    return (
        <RegionContext.Provider value={{regions, regionDispatch}}>
            { props.children }
        </RegionContext.Provider>
    )
}

export default RegionContextProvider;