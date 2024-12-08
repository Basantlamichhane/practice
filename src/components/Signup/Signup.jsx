import react from 'react';
import './Signup.css';
const Signup = () => {
    return(
            <div className='kewi'>
                <form action="">
                    <h1>Sign Up</h1>
                    <div className="input type">
                        <input type="email" placeholder="Enter your email" required></input>
                    </div>
                    <div className="imput type">
                        <input type="datetime" name="" id="" placeholder="Enter your date of birth" required/>
                    </div>
                </form>
            </div>
    )
    
}
export default Signup;