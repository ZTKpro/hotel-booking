import React,{Component} from 'react';
import './nav.css';

import account from './img/account.png'
import logo from './img/logo.png'
import apiUser from '../api/user.json'


let checkLogin = false;
let name = null;

const collapse = () => {
    if(checkLogin === false){
        if(document.getElementById('signIn').style.display !== 'flex'){
            document.getElementById('signIn').style.display = "flex"
        }else if(document.getElementById('signIn').style.display === 'flex'){
            document.getElementById('signIn').style.display = "none"
        }
    }else if(checkLogin === true){
        if (document.getElementById('account').style.display !== 'flex') {
            document.getElementById('account').style.display = "flex"
        } else if (document.getElementById('account').style.display === 'flex') {
            document.getElementById('account').style.display = "none"
        }
    }
}

const signIn = () => {
    for (let i = 0; i < apiUser.length; i++) {
        if (apiUser[i].email.trim() == document.getElementById('email').value.trim() && apiUser[i].password.trim() == document.getElementById('password').value.trim()) {
            checkLogin = true;
            collapse()
            document.getElementById('signIn').style.display = "none"
            document.getElementById('nick').textContent = apiUser[i].name
        }else{
            document.getElementById('email').style.borderBottom = "1px solid red"
            document.getElementById('email').style.color = "red"
            document.getElementById('password').style.borderBottom = "1px solid red"
            document.getElementById('password').style.color = "red"
        } 
    }
    
}

const log = () =>{
    checkLogin = false;
    name = null;
    document.getElementById('account').style.display = "none"
}


class Nav extends Component {
    
    render (){
        
    return(
        <nav>
            <div className="nav">
                <div className="nav-logo">
                   <h2> Hotels </h2>
                </div>
                <div onClick={collapse}  className="nav-signIn btn">
                    <p>ZALOGUJ SIĘ</p>
                </div>
                <div id="signIn" className="nav-signInBox">
                    <img className="nav-icon" src={account} alt="account icon"></img>
                    <input id="email" className="nav-form-item nav--input" placeholder="email" type="email" />
                    <input id="password" className="nav-form-item nav--input" type="password" placeholder="hasło" />
                    <div onClick={signIn} className="nav-form-item signIn-btn btn ">Zaloguj się</div>
                    <p>Nie masz jeszcze konta? Zarejestruj się</p>
                </div>
                <div id="account" className="nav-account">
                    <div className="account-person"> 
                        <img className="account-logo" src={logo} alt="logo"></img>
                        <div className="person-box">
                            <h3 id='nick'>{name}</h3>
                            <p>001123</p>                    
                        </div>
                    </div>
                    <div onClick={log} className="account-logout btn">Wyloguj się</div>
                </div>
            </div>
        </nav>
    )
}
}


export default Nav;
