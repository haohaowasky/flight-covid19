import React, { Fragment, useState, useContext } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { RegionContext } from '../contexts/RegionContext';
import img from './graph.png';
import flat from './flat.png';


function CreateAidModal({ region }) {
  const [open, setOpen] = useState(false);
  const { regionDispatch } = useContext(RegionContext);
  const [values, setValues] = useState({
    title: null,
    year: null,
    rating: null,
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function show() {
    setOpen(true);
  }

  function hide() {
    setValues({
      title: null,
      year: null,
      rating: null
    });
    setOpen(false);
  }

  return (

        <Fragment>
          <Button variant="outlined" color="primary" onClick={ show }>
            intervene
          </Button>
          <Dialog open={open} onClose={hide} maxWidth="xs" aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Region Status</DialogTitle>
            <li>
            <img src={img} style={{width:135,height:105}}/>
            <p> Prediction without intervention </p>
            </li>
            <li>
            <img src={flat} style={{width:135,height:105}}/>
            <p> Prediction with your intervention </p>
            </li>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Intervention"
                type="text"
                onChange={ handleChange('title') }
                fullWidth
              />
              <TextField
                margin="dense"
                id="year"
                label="Quantity"
                type="number"
                inputProps={{
                  min: 1900,
                  max: 2020,
                  step: 1,
                }}
                onChange={ handleChange('year') }
                fullWidth
              />
              <TextField
                margin="dense"
                id="rating"
                label="Tracking Number"            
                type="text"
                inputProps={{
                  min: 0,
                  max: 5,
                  step: 0.5,
                }}
                onChange={ handleChange('rating') }
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => {
                const title = values.title;
                const year = parseInt(values.year);
                const rating = parseFloat(values.rating);
                regionDispatch( {type: 'DERISK_REGION', id: region.id })
                hide();
                
              }} variant="contained" color="primary">
                Submit
              </Button>
              <Button onClick={ hide } variant="contained">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
  );
}

export default CreateAidModal;