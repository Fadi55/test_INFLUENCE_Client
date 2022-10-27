import React from 'react'
import { Link } from 'react-router-dom'
import bg1 from "../../assets/images/logos/shop.png"
import '../../login.css'
import { useNavigate } from "react-router-dom";
 

export default function SignInPage() {

    
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/starter`; 
    navigate(path);
  }
  
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <img style={{display:"block",marginLeft:"auto",marginRight:"auto"}}
                        src={bg1}
                   
                        width="20%"
                   
                      />
            <form  id="fomr2" action="/home">
            {/* <SaveLocalStorage lsKey="emailBackup" value={this.state.email} /> */}
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text"  name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn"  onClick={routeChange}  type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                {/* <p><Link to="/">Back to Homepage</Link>.</p> */}
            </footer>
        </div>
    )
}