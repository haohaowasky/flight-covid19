import React, { Component, useContext } from 'react';
import USAMap from "react-usa-map";

function stateChange() {
    setTimeout(function () {
    }, 5000);
}


class mapApp extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
        color:'red',

      }    
    }

    componentDidMount(){
        this.timer = window.setInterval(() => {
            this.setState({
                color:'navy'
            })
            this.statesCustomConfig( 'navy' )
          },500)
      }

  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name + " needs 2500 more masks");
    this.setState({color:'navy'})
  };


  statesCustomConfig = ( color ) => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "purple"
      },
      "CA": {
        fill: "grey"
      },
      "TN": {
        fill: "#CC0000"
      },
      "ND": {
        fill: "grey"
      },
      "SD": {
        fill: "grey"
      },
      "TX": {
        fill: "grey"
      },
      "CO": {
        fill: "yellow"
      },
      "WA": {
        fill: "yellow"
      },
      "FL": {
        fill: "yellow",
      },
      "MI": {
        fill: "#CC0000",
      },
      "AL": {
        fill: "#45B05F",
      }
    };
  };
//   #45B05F

  render() {
    return (
      <div className="App">
        <h1> Vulnerable regions in the US </h1>
        <USAMap customize={this.statesCustomConfig( 'color' )} onClick={this.mapHandler} width="650" height="650" />
        <button onClick={() => this.statesCustomConfig( 'navy' )}> Update </button>
      </div>
    );
  }
}

export default mapApp;