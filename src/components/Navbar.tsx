import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import '../assets/css/navbar.css';

function Navbar() {

  const {isAuthenticated, loginWithRedirect, logout} = useAuth0()

  const signOutOnClick = () => {
    logout();
  };

  const signInOnClick = () => {
    loginWithRedirect();
  };

  return (
    <nav>
        <div className="nav-links">
            <Link to='/' className="nav-link">
                Home
            </Link>
            <Link to='/directory' className="nav-link">
                Drink Directory
            </Link>
            {isAuthenticated && (
              <Link to='/create' className="nav-link">
                Create
              </Link>
            )}
            {
                !isAuthenticated ?
            <Link to='/' onClick={signInOnClick} className="nav-link">
                Login
            </Link>
            :
            <Link to='/' onClick={signOutOnClick} className="nav-link">
                Logout
            </Link>
            }
        </div>
    </nav>
  )
}

export default Navbar