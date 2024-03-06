import Drinks from "../components/Drinks"
import Navbar from "../components/Navbar"
import '../assets/css/directory.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Directory() {

  const {isAuthenticated, loginWithRedirect} = useAuth0()

  const signInOnClick = () => {
    loginWithRedirect();
  }

  return (
    <>
        <div className="directory-container">
        <Navbar />
          <div className="drink-recipes">
            {
              !isAuthenticated ?
            <h1 className="heading">
              <Link to='/' onClick={signInOnClick} className="link">Register an account </Link>
               or  
              <Link to='/' onClick={signInOnClick} className="link"> log in </Link>
              to contribute your own recipes.
            </h1>
            :
              <></>
            }
            <Drinks />
          </div>
        </div>
    </>
  )
}

export default Directory