import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>YINGLE</h1>
                    <h6>The world's most sought-after singles</h6>
                </div>
            </div>

            <Signup/>
        </div>

    )


}

function Signup(){
    return(
        <div className="a-right">
            <form action="" className="infoForm authForm">

                <h3>Sign up</h3>

                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstName'/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastName'/>
                </div>

                <div>

                    <span>I am a</span>
                    <input type="radio" id="male" name="gender" className="infoInput" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" className="infoInput" value="female"/>
                    <label for="female">Female</label>

                </div>

                <div>

                    <span>I am</span>
                    <select name="age" className="infoInput">
                        {[...Array(82)].map((_, i) => 
                            <option value={i + 18}>{i + 18}</option>
                        )}
                    </select>
                    <span>years old</span>


                </div>

                <div>
                    <input type="email" placeholder='Email' className='infoInput' name='email'/>
                    
                </div>

                <div>
                    <input type="password" placeholder='Password' className='infoInput' name='password'/>
                    <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmPassword'/>
                </div>

                <div>
                    <span style={{ fontSize: '12px'}}>Already have an account? Login</span>
                </div>

                <button className="button infoButton" type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Auth