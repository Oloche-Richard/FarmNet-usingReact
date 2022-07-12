import Button from "../components/Main/Button"
import {useState} from 'react'
import "./LoginTest.css"
const LoginTest = () => {

  const [enteredName, setEnteredName] = useState('')
   const [enteredKey, setEnteredKey] = useState('')
  
  const usernameHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const passwordHandler = (event) => {
    setEnteredKey(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredName,
      password: enteredKey
    };
    console.log(userData)
    setEnteredName('')
    setEnteredKey('')

  }

  return(
    <div className='login'>
    <form 
    className='login-data'
    onSubmit={submitHandler}>
    <div>
    <label>Username</label>
    <input 
    value={enteredName}
    type='text'
    onChange={usernameHandler}
    />
    </div>
    <div>
    <label>Password</label>
    <input 
    value={enteredKey}
    type='password'
    onChange={passwordHandler}
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
   onClick={window.alert('welcome')}
   />
   </div>
   <span>Welcome</span>
    </form>
    </div>

  )
}
export default LoginTest