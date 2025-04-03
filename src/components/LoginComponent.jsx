import React from "react";

function Login (){
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />   
                <button type="submit">Login</button>    
                
            </form>
        </div>
    )
}
export default Login;