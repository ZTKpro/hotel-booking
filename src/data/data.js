import React,{Component} from 'react';
import './data.css'
import api from '../api/room.json'

const sortRoom = () => {
  const room = document.getElementsByClassName('box-item')
  for(let i = 0;i < room.length;i++){
    if (api[i].dataInMonth <= 1 && 1 <= api[i].dataOutMonth) {
      room[i].style.display = ""
    }else{
      room[i].style.display = "none"
    }
  }
}

class data extends Component{
  
  
  render() {
    return(
          <div className="app-data">
          <div className="data-item">
            <p>ZAMEDLOWANIE</p>
            <select className="data-select" name="check-in">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option> 
              <option>12</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
              <span>/</span>
            <select className="data-select--month" name="check in month"> 
              <option>STY</option>
              <option>LUTY</option>
              <option>MAR</option>
              <option>KWI</option>
              <option>MAJ</option>
              <option>CZE</option>
              <option>LIP</option>
              <option>SIE</option>
              <option>WRZ</option>
              <option>PAŻ</option>
              <option>LIS</option>
              <option>GRU</option>
            </select>
          </div>
          <div className="data-item">
            <p>WYMELDOWANIE</p>
             <select className="data-select" name="check-in">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
              <span>/</span>
            <select className="data-select--month" name="check in month"> 
              <option>STY</option>
              <option>LUTY</option>
              <option>MAR</option>
              <option>KWI</option>
              <option>MAJ</option>
              <option>CZE</option>
              <option>LIP</option>
              <option>SIE</option>
              <option>WRZ</option>
              <option>PAŻ</option>
              <option>LIS</option>
              <option>GRU</option>
            </select>
          </div>
          <h2>{this.props.monthIn}</h2>
          <div className="data-item">
            <p>OSOBY</p>
            <input className="data-person" type="number" placeholder="1" min="0" max="12"></input>
          </div>
          <div className="app-check">
            <p className="check-text">Masz kupon?</p>
            <div onClick={sortRoom} className="check-btn btn"><p>SPRAWDZ POKOJE</p></div>
          </div>
        </div>
    )
    }
}
export default data;