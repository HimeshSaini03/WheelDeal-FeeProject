import React from "react";
import './LoginForm.css';



const LoginForm = () =>{
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Useranme" required/>
                   
                </div>
                

                <div className="input-box">
                    <input type="text" placeholder="Password" required/>
                   
                </div>
                


                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="./">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="/">Register</a></p>
                </div>
        
        
               
                
            </form>
        </div>
    );
};
export default LoginForm;