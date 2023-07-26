import React from "react"
import { useAuth0 } from "@auth0/auth0-react";

const Head = () => {
  const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated,user } = useAuth0();

  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>NEXT U</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
            <li>{isAuthenticated && <p>{user.name}</p>}</li>
            {isAuthenticated ? (
              <li>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out</button>
            </li> ):(
              <li>
            <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
            )}
          </div>
        </div>
        
      </section>
      
           
    </>
  )
}

export default Head
