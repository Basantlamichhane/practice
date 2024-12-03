import React from 'react';
import './Loginform.css';
const Loginform = () => {
    return(
        <div className='rapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                </div>
                <div className="input-box">
                    <input type="Password" placeholder='password' required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="/#">forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link"></div>
                        <p>don't have an account?<a href="/#">Register</a></p>


            </form>
        </div>
    )
}
export default Loginform;