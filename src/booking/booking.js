import React,{Component} from 'react';
import './booking.css';


class booking extends Component{
    render() {
     return(
    <div className="booking-box g-container ">
    <div className="app-booking">
     <div className="booking-date"><p>Data przyjazdu:</p><span id='dataIn'></span><p>Data odjazdu:</p><span id="dataOut"></span></div>
            </div>
          <div id="selectedBox">

          </div>

            <div className="app-coupon">
              <div className="coupon-textBox">
                <h3>KUPON:</h3>
                <input type="text" placeholder="Wprowadz kod"></input>
              <div className="coupon-btn btn">WPROWADZ</div>
              </div>
              <div className="coupon-cost">
                <p>Cena:  </p>
                <p  className="coupon-price">$0</p>
              </div>
            </div>
          </div>
     )   
    }
}
export default booking;