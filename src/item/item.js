/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import './item.css';

import api from '../api/room.json'

function checkOption(e){

  if (e.target.parentElement.style.opacity == ''){
    e.target.parentElement.style.opacity = '1'
  }else{
    e.target.parentElement.style.opacity = ''
  }

}

let commId = 0;

const open = (e) =>{

  const urlRoom = document.getElementById('imgRoom')
  const nameRoom = document.getElementById('tittleRoom')
  const descRoom = document.getElementById('descRoom')
  const commRoom = document.getElementById('comRoom')

  for(let i = 0; i < api.length;i++){

    if(e.target.textContent == api[i].name){
      commId = i;
      urlRoom.src = api[i].url;
      nameRoom.textContent = api[i].name;
      descRoom.textContent = api[i].description;
      const genComm = api[commId].reviews.map((rev) =>{ 
              return `<div class="opinion-comment"><div class="opinion-autor"> <h3>${rev.autor}</h3> <div class="item-ranking">
              <span class="item-star fa fa-star checked"></span>
              <span class="item-star fa fa-star checked"></span>
              <span class="item-star fa fa-star checked"></span>
              <span class="item-star fa fa-star checked"></span>
              <span class="item-star fa fa-star checked"></span>
              </div></div><p>${rev.content}</p></div></div>`
            }
            )
            commRoom.innerHTML = genComm.join('')
          }

        }
        let openItem = document.getElementsByClassName(e.target.id)
        openItem[0].style.display = 'block'
}

const close = (e) =>{
  const closeItem  = document.getElementsByClassName(e.target.id)
  closeItem[0].style.display = 'none'
}

const selectItem = (e) =>{
  
  const selectedId = []
  const selBox = document.getElementById('selectedBox')
  const selBtn = document.querySelectorAll('.selectBox-active')
  const couPrice = document.getElementsByClassName('coupon-price')

  for(let i = 0;i < selBtn.length;i++){
    selBtn[i].classList.remove('selectBox-active')
  }

  if (e.target.classList == 'btn-text') {
    e.target.parentElement.classList.add('selectBox-active')
  }else{
    e.target.classList.add('selectBox-active')
  }

  selectedId.push(e.target.id)

   const genSelected = selectedId.map((itemId) => {
    return `<div class="booking-item">
    <img class="item-img" src=${api[itemId].url} alt="room"></img>
    <div class="item-box">
    
    <div class="item-boxText">
    <div class="item-inboxText--booking">
    <h3 class="item-name item-name--booking">${api[itemId].name} </h3>
    <div class="item-ranking item-ranking--booking">
    <span class="item-star fa fa-star checked"></span>
    <span class="item-star fa fa-star checked"></span>
    <span class="item-star fa fa-star checked"></span>
    <span class="item-star fa fa-star checked"></span>
    <span class="item-star fa fa-star checked"></span>
    <p class="ranking-text"> 3 Recenzje </p>
    </div>
    </div>
    
    <div class="booking-grid">  
    <p class="item-p">Status:<span class="available">${api[itemId].status}</span></p>
    <p class="item-p">Zaliczka:<span>${api[itemId].deposit}</span></p>
    <p class="item-p">Łózka:<span>${api[itemId].beds}</span></p>
    <p class="item-p">Miejsca:<span>${api[itemId].passanger}</span></p>
    </div>
    </div>
    <div class="booking-price"><p>Cena:</p><p class="price">$${api[itemId].price}</p></div>
    
    </div>
    </div>`
  })

  selBox.innerHTML = genSelected
  couPrice[0].innerHTML = '$' + api[selectedId[0]].price
}



const genRoom =  api.map((room) =>

  <div key={room.url} id={room.id} className="box-item g-container">
    <img className="item-img" src={room.url} alt="room"></img>
      <div className="item-box">
              <div className="item-boxText">  
                  <h3 id="opinion-box" onClick={open} className="item-name">{room.name}</h3>
                  <div className="item-ranking">
                    <span className="item-star fa fa-star checked"></span>
                    <span className="item-star fa fa-star checked"></span>
                    <span className="item-star fa fa-star checked"></span>
                    <span className="item-star fa fa-star checked"></span>
                    <span className="item-star fa fa-star checked"></span>
                    <p className="ranking-text"> {room.reviews.length} Opinie </p>
                  </div>
                <p className="item-p">Status:<span className="available">{room.status}</span></p>
                <p className="item-p">Zaliczka:<span>{room.deposit}</span></p>
                <p className="item-p">Łózka:<span>{room.beds}</span></p>
                <p className="item-p">Miejsca:<span>{room.passanger}</span></p>
              </div>
              <div className="item-option">
                <div className="option-box">
                  <div className="item-checkbox">
                    <input onClick={checkOption} type="checkbox"></input> <p >Sniadanie od  </p><p><span className="item-checkbox--red"> {room.breakfastPrice}</span> / Noc</p>
                  </div>
                </div>
              <div className="item-selectBox">
                <p>Pokoje</p><input className="selectBox-input" type="number" min="1" max="6" placeholder="1"></input>
                <div id={room.id}  onClick={selectItem} className="selectBox-btn btn"> <p id={room.id} className="btn-text">WYBIERZ</p> </div>
              </div> 
            </div>
          </div>
  </div>
  
  )
  



class select extends Component{

  render(){
    return(
      <div>
        {genRoom}
      <div  className="opinion-box">
          <div className="opinion-content">
            <button onClick={close} id="opinion-box" className="opinion-close"></button>
            <div className="content-flex">
              <img id='imgRoom' className="opinion-img" src='' alt="luksusowy pokój"></img>
              <div>
                <h2 id='tittleRoom'>tittle</h2>
                <p  id="descRoom">desc</p>
              </div>
            </div>
            <div id="comRoom">

            </div>
            <input type="text" />
          </div>
      </div>
      </div>
     )   
    }
  }

export default select;