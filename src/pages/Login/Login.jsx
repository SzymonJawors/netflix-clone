import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'
import {login, signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState("Zaloguj się")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event)=> {
    event.preventDefault();
    setLoading(true);
    if(signState==="Zaloguj się") {
      await login(email, password)
    } else {
      await signup(name, email, password)
    }
    setLoading(false);
  }

  return (
    loading ? <div className="login-spinner"><img src={netflix_spinner} alt="spinner" /></div> :
    <div className='login'>
      <img src={logo} className='login-logo' alt="logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Zarejestruj się" ? <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Imię'/> : <></>}
          <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password" placeholder='Hasło' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="">Zapamiętaj mnie</label>
            </div>
            <p>Potrzebujesz pomocy?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Zaloguj się" ? <p>Nowy na Netflixie? <span onClick={()=>{setSignState("Zarejestruj się")}}>Zarejestruj się</span></p> : <p>Masz juz konto? <span onClick={()=>{setSignState("Zaloguj się")}}>Zaloguj się</span></p> }
        </div>
      </div>
    </div>
  )
}

export default Login