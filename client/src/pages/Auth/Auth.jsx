import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import {useDispatch} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const dispatch = useDispatch()

    const [data, setData]=useState({
    firstname: "", 
    lastname: "", 
    gender: "", 
    age: "", 
    username: "", 
    password: "", 
    confirmPassword: ""})
    
    
    const [confirmPass, setConfirmPass] = useState(true)
    const handleChange = (e)=> {
        setData({...data, [e.target.name]: e.target.value})
    }
 
    const handleSubmit = (e)=> {
        e.preventDefault();

        if(isSignUp)
        {
            if(data.password === data.confirmPassword) {
                dispatch(signUp(data));
                resetForm();
            } else {
                setConfirmPass(false);
            }
        }else
        {
            dispatch(logIn(data));
            resetForm();
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({
            firstname: "", 
            lastname: "", 
            gender: "", 
            age: "", 
            username: "", 
            password: "", 
            confirmPassword: ""
        });
    };

    return (
        <div className="Auth">
            {/* Left Side */}
            <div className="a-left">
                { /*<img src={Logo} alt="" />*/ }
                <div className="Webname">
                    <h1>YINGLE</h1>
                    <h6>The world's most sought-after singles</h6>
                </div>
            </div>

            {/* Right Side */}
            <div className="a-right">
            <form action="" className="infoForm authForm" onSubmit={handleSubmit}>

                <h3>{isSignUp ? "Sign Up":"Log In"}</h3>

                {isSignUp ? (
                    <div>
                        <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange = {handleChange}/>
                        <input type="text" placeholder='Last Name' className='infoInput' name='lastname'  onChange = {handleChange}/>
                        <div>
                            <span>I am a</span>
                            <input type="radio" id="male" name="gender" className="infoInput" value="male"  onChange = {handleChange}/>
                            <label htmlFor="male">Male</label>
                            <input type="radio" id="female" name="gender" className="infoInput" value="female"  onChange = {handleChange}/>
                            <label htmlFor="female">Female</label>
                        </div>
                        <div>
                            <span>I am</span>
                            <select name="age" className="infoInput" onChange = {handleChange}>
                                {[...Array(82)].map((_, i) => 
                                    <option value={i + 18}>{i + 18}</option>
                                )}
                                 
                            </select>
                            <span>years old</span>
                        </div>
                        <div>
                            <input type="email" placeholder='Email' className='infoInput' name='username'  onChange = {handleChange}/>
                        </div>
                        <div>
                            <input type="password" placeholder='Password' className='infoInput' name='password'  onChange = {handleChange}/>
                            <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmPassword'  onChange = {handleChange} value={data.confirmPassword}/>
                        </div>

                        
                        <span style={{display: confirmPass? "none": "block", 
                        color: 'red', 
                        fontSize: '12px', 
                        alignSelf: "flex-end", 
                        marginRight: "5px"}}>
                            Passwords do not match</span>
                    
                    </div>
                ) : (
                    <div>
                        <input type="email" placeholder='Email' className='infoInput' name='username'  onChange = {handleChange}/>
                        <input type="password" placeholder='Password' className='infoInput' name='password'  onChange = {handleChange}/>
                    </div>
                )}

                <div onClick={() => setIsSignUp(prev => !prev)} style={{cursor: "pointer"}}>
                    <span style={{ fontSize: '12px'}}>
                        {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                    </span>
                </div>

                <button className="button infoButton" type="submit">{ isSignUp ? "Signup" : "Log In" }</button>
            </form>
        </div>
            
        </div>

    )
}

export default Auth
