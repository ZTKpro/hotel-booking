import React from 'react';
import './App.css';
import Navi from './nav/nav.js'
import Footer from './footer/footer.js'

function App() {
  return (
    <div className="App">

      <Navi />

      <div>

        <h2 className="app-resTittle">Rezewacje</h2>
        
        <h3 className="app-MakeRes">Zrób Rezewacje</h3>


        <div className="app-data">
          <div className="data-item">
            <p>ZAMEDLOWANIE</p>
          </div>
          <div className="data-item">
            <p>WYMELDOWANIE</p>
          </div>
          <div className="data-item">
            <p>OSOBY</p>
          </div>
          <div className="app-check">
            <p className="check-text">Masz kupon?</p>
            <div className="check-btn btn"><p>SPRAWDZ POKOJE</p></div>
          </div>
        </div>

        <h3 className="app-roomsTittle">Pokoje dostepne dla ciebie</h3>

        <div className="app-box">
          <div className="box-item">
            <img className="item-img" src="https://q-cf.bstatic.com/images/hotel/max1024x768/731/73118462.jpg" alt="room photo"></img>
            <div className="item-box">
              <div className="item-boxText">
                  <h3 className="item-name">Klasyczny pokój</h3>
                  <div className="item-ranking">
                    <span class="item-star fa fa-star checked"></span>
                    <span class="item-star fa fa-star checked"></span>
                    <span class="item-star fa fa-star checked"></span>
                    <span class="item-star fa fa-star checked"></span>
                    <span class="item-star fa fa-star checked"></span>
                    <p className="ranking-text"> 3 Recenzje </p>
                  </div>
                <p className="item-p">Status:<span className="available">Dostępny</span></p>
                <p className="item-p">Zaliczka:<span>Nie wymagana</span></p>
                <p className="item-p">Łózka:<span>2</span></p>
                <p className="item-p">Miejsca:<span>3</span></p>
              </div>
              <div className="item-option">
                <div className="item-checkbox">
                <input className="unactive" type="checkbox"></input> <p className="unactive">Sniadanie od  </p><p><span className="item-checkbox--red"> $25</span> / Noc</p>
                </div>
                <div className="item-checkbox">
                <input className="unactive" type="checkbox"></input> <p className="unactive">Sniadanie od  </p><p><span className="item-checkbox--red"> $25</span> / Noc</p>
                </div>
              <div className="item-selectBox">
                <p>Pokoje</p><input className="selectBox-input" type="number" min="0" placeholder="1"></input>
                <div className="selectBox-btn btn"> <p>WYBIERZ</p> </div>
              </div> 
            </div>
          </div>
        
        </div>
          <div className="box-item">
           
            <img className="item-img" src="https://q-cf.bstatic.com/images/hotel/max1024x768/731/73118462.jpg" alt="room photo"></img>
            <div className="item-box">
              <div className="item-boxText">
                  <h3 className="item-name">Klasyczny pokój</h3>
                  <div className="item-ranking">
                    <span class="item-star fa fa-star checked"></span>
                    <span class="item-star fa fa-star checked"></span>
                    <span class="item-star fa fa-star checked"></span>
                    <span class="item-star fa fa-star checked"></span>
                    <span class="item-star fa fa-star checked"></span>
                    <p className="ranking-text"> 3 Recenzje </p>
                  </div>
                
                <p className="item-p">Status:<span className="available">Dostępny</span></p>
                <p className="item-p">Zaliczka:<span>Nie wymagana</span></p>
                <p className="item-p">Łózka:<span>2</span></p>
                <p className="item-p">Miejsca:<span>3</span></p>
              </div>
              <div className="item-option">
                <div className="item-checkbox">
                <input className="unactive" type="checkbox"></input> <p className="unactive">Sniadanie od  </p><p><span className="item-checkbox--red"> $25</span> / Noc</p>
                </div>
                <div className="item-checkbox">
                <input className="unactive" type="checkbox"></input> <p className="unactive">Sniadanie od  </p><p><span className="item-checkbox--red"> $25</span> / Noc</p>
                </div>
              <div className="item-selectBox">
                <p>Pokoje</p><input className="selectBox-input" type="number" min="0" placeholder="1"></input>
                <div className="selectBox-btn btn"> <p>WYBIERZ</p> </div>
              </div> 
            </div>
          </div>
          </div>
        
      

          <h3 className="app-roomsTittle">Twoj Hotele</h3>



          <div>

        <div className="booking-box">
            <div className="app-booking">
              <div className="booking-date"><p>Data przyjazdu:</p><span>11/12/2019</span><p>Data odjazdu:</p><span>01/02/2020</span></div>
            </div>

          <div className="booking-item">
            <img className="item-img" src="https://q-cf.bstatic.com/images/hotel/max1024x768/731/73118462.jpg" alt="room photo"></img>
              <div className="item-box">
                
                <div className="item-boxText">
                    <div className="item-inboxText--booking">
                      <h3 className="item-name item-name--booking">Klasyczny pokój</h3>
                      <div className="item-ranking item-ranking--booking">
                        <span class="item-star fa fa-star checked"></span>
                        <span class="item-star fa fa-star checked"></span>
                        <span class="item-star fa fa-star checked"></span>
                        <span class="item-star fa fa-star checked"></span>
                        <span class="item-star fa fa-star checked"></span>
                        <p className="ranking-text"> 3 Recenzje </p>
                      </div>
                    </div>

                  <div className="booking-grid">  
                    <p className="item-p">Status:<span className="available">Dostępny</span></p>
                    <p className="item-p">Zaliczka:<span>Nie wymagana</span></p>
                    <p className="item-p">Łózka:<span>2</span></p>
                    <p className="item-p">Miejsca:<span>3</span></p>
                  </div>
                  
                </div>

            </div>
          </div>
          <div className="booking-item">
            <img className="item-img" src="https://q-cf.bstatic.com/images/hotel/max1024x768/731/73118462.jpg" alt="room photo"></img>
              <div className="item-box">
                
                <div className="item-boxText">
                    <div className="item-inboxText--booking">
                      <h3 className="item-name item-name--booking">Klasyczny pokój</h3>
                      <div className="item-ranking item-ranking--booking">
                        <span class="item-star fa fa-star checked"></span>
                        <span class="item-star fa fa-star checked"></span>
                        <span class="item-star fa fa-star checked"></span>
                        <span class="item-star fa fa-star checked"></span>
                        <span class="item-star fa fa-star checked"></span>
                        <p className="ranking-text"> 3 Recenzje </p>
                      </div>
                    </div>

                  <div className="booking-grid">  
                    <p className="item-p">Status:<span className="available">Dostępny</span></p>
                    <p className="item-p">Zaliczka:<span>Nie wymagana</span></p>
                    <p className="item-p">Łózka:<span>2</span></p>
                    <p className="item-p">Miejsca:<span>3</span></p>
                  </div>
                  
                </div>

            </div>
          </div>

            <div className="app-coupon">
              <div className="coupon-textBox">
                <h3>KUPON:</h3>
                <input type="text" placeholder="Wprowadz kod"></input>
              <div className="coupon-btn btn">WPROWADZ</div>
              </div>
              <div className="coupon-cost">
                <p>Cena:  </p>
                <p  className="coupon-price">$800</p>
              </div>
            </div>

            </div>


              <p className="app-roomsTittle">Potwierdz Rezewacje</p>


              <div className="app-confirmBox">
                <div className="confirmBox-grid">                 
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                  <input type="text"></input>
                </div>
                <textarea className="confirmBox-notes"></textarea>


              <div className="confirmBox-option"><input type="checkbox"/><p>Zapłać w hotelu</p></div>
              <div className="confirmBox-option"><input type="checkbox"/><p>Zapłać online</p></div>
              <div className="app-confirm btn"><p>POTWIERDZ</p></div>

              </div>


          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
