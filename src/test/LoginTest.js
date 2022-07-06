import Button from "../components/Main/Button"
import {useState} from 'react'
import "./LoginTest.css"
const LoginTest = () => {

  const [username, setUsername] = useState('')
 
  const usernameHandler = (event) => {
    console.log(event.target.value)
  }
  return(
    <div className='login'>
    <div className='login-data'>
    <div>
    <label>Username</label>
    <input 
    type='text'
    onChange={usernameHandler}
    />
    </div>
    <div>
    <label>Password</label>
    <input 
    type='text'
    // onChange={passwordHandler}
    />
    </div>
   <div>
   <Button 
   text= 'login'
   newStyle= {{
     position: 'relative',
     top: '0',
     left: '40%',
     padding:'15px 30px',
     marginTop: '10px',
     backgroundColor: 'pink',
     color: '#000',
   }}
   />
   </div>
   <span>what the fuck</span>
    </div>
    </div>

  )
}
export default LoginTest