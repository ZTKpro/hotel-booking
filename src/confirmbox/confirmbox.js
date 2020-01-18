import React,{Component} from 'react';
import './comfirmbox.css'

let name = 'Adrian Kołodziej'

class comfirmbox extends Component{
    render() {
     return(
        <div>
            <div className="app-confirmBox">
                    <div className="confirmBox-grid">                 
                        <input id='name' type="text" placeholder="Imie"></input>
                        <input type="text" placeholder="Nazwisko"></input>
                        <input type="text" placeholder="Email"></input>
                        <input type="text" placeholder="Numer telefonu"></input>
                    </div>
                    <textarea className="confirmBox-notes" placeholder="Uwagi"></textarea>
                    <div className="app-confirm btn"><p>POTWIERDZ</p></div>
            </div>
            <div className="app-confirmBox hidden">
                <h4 className="confirmBox-confirmText">Rezerwacja zostało pomyślnie zrealizowana na dane:</h4> 
                <p>{name}</p> 
            </div>
        </div>
     )   
    }
}
export default comfirmbox;