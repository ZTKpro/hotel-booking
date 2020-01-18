/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import './item.css';

import api from '../api/room.json'

function checkOption(e){
  alert(e.target.parentElement.style.opacity)
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
  if (e.target.parentElement.classList == 'selectBox-btn btn' || e.target.classList == 'selectBox-btn btn') {
      if (e.target.classList == 'btn-text') {
        e.target.parentElement.classList.add('selectBox-active')
      }else{
        e.target.classList.add('selectBox-active')
      }
  }else{
    e.target.parentElement.classList.remove('selectBox-active')
    e.target.classList.remove('selectBox-active')
  }
}



const genRoom =  api.map((room) =>

  <div key={room.url} id={room.id} className="box-item">
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
                <div id={room.id}  onClick={selectItem} className="selectBox-btn btn"> <p className="btn-text">WYBIERZ</p> </div>
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