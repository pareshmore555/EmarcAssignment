import { useState } from "react";
import "../components/Login.css"
function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });
    
    const validateEmail = (email) => {
       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      const validatePassword = (password) => {
        
        const minLength = password.length >= 8;
    
        const hasUppercase = /[A-Z]/.test(password);
    
        const hasLowercase = /[a-z]/.test(password);
    
        const hasNumber = /[0-9]/.test(password);
    
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
        return minLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
      };


function handlesubmit(e){
    e.preventDefault();
    let valid = true;
    let emailError = "";
    let passwordError = "";

    if (!validateEmail(email)) {
      emailError = "Please enter a valid email address.";
      valid = false;
    }

    if (!validatePassword(password)) {
      passwordError =
        "Please enter valid password";
      valid = false;
    }
    if (valid) {
        console.log("Email:", email);
        console.log("Password:", password);
        
      } else {
        setErrors({ email: emailError, password: passwordError });
      }
}

    return(
        <>
        <div className="login-container">
            <form onSubmit={handlesubmit} className="login-form">
                <h2>Login</h2>
                <div className="input-ele">
                <label>Email</label>

                <input type="text" onChange={(e)=>setEmail(e.target.value)} />
                {errors.email && <p className="error">{errors.email}</p>}

                <label>Password</label>

                <input type="text" onChange={(e)=>setPassword(e.target.value)} />
                {errors.password && <p className="error">{errors.password}</p>}

                <label>ForgotPassword?</label>
                <button>Log in</button>
                </div>
            </form>
        </div>
        </>
        
    )
}
export default Login;