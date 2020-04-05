import React from 'react';
import RegionContextProvider from './contexts/RegionContext';
import Navbar from './components/Navbar';
import RegionList from './components/RegionList';
import RegionForm from './components/RegionForm';
import FilmDetail from './components/RegionStatus'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <RegionContextProvider>
        <Navbar/>
        <RegionList/>
      <Grid item xs={3}>
        <RegionForm/>
      </Grid>
      </RegionContextProvider>
    </div>
  );
}

export default App;
