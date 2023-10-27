import React from "react";
import logo from '../../logo.svg'
import './auth.css'

function Login(){

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                {/* Icon */}
                <div className="fadeIn first">
                    <img src={logo} id="icon" alt="User Icon" />
                </div>

                {/* Login Form */}
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>

                {/* password issues  */}
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    )
}


export default Login