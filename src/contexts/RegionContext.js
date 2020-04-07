import React, { createContext, useReducer, useEffect } from 'react';
import { regionReducer } from '../reducers/regionReducer';
import countyData from './data.js'
import request from 'request'

export const RegionContext = createContext();

const getRequest = async (url) => {
    return new Promise((resolve, reject) => {
      request.get(url, (err, res, body) => {
          resolve(body)        
      })
    })
}

const getData = async () => {
    const data = await getRequest('http://localhost:5000/states')
    console.log("got data", data)
}

const RegionContextProvider = (props) => {
    const [regions, regionDispatch] = useReducer(regionReducer, [], () => {
        // console.log(countyData)
        const localData = localStorage.getItem('regions');
        console.log(localData)
        return localData ? JSON.parse(localData): []
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