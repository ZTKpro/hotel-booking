import React, { Component } from 'react';
import './App.css';

import Navi from './nav/nav.js'
import Footer from './footer/footer.js'
import Data from './data/data.js'
import Item from './item/item.js'
import Booking from './booking/booking.js'
import Confirmbox from './confirmbox/confirmbox.js'





class App extends Component {
  state = {
    dataIn:'11/12/2020',
    dataOut:'17/12/2020'
  }
  
  render() {
    return ( 
      <div className="App">
        <Navi />
            <div>
              <h2 className="app-resTittle">Rezewacje</h2>
              <h3 className="app-MakeRes">Zrób Rezewacje</h3>
              <Data monthIn='' monthOut='' />
              <h3 className="app-roomsTittle">Pokoje dostepne dla ciebie</h3>
            <div className="app-box">
            <Item />
            <h3 className="app-roomsTittle">Twoj Hotele</h3>
              <Booking dataIn={this.state.dataIn} dataOut={this.state.dataOut} />   
            <p className="app-roomsTittle">Potwierdz Rezewacje</p>
            <Confirmbox/>
          </div>
        </div>
      <Footer/>
    </div>
    );
  }
}

export default App;
