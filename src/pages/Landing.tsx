import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../assets/css/landing.css';

function Landing() {
  return (
    <>
        <div className="landing-container">
            {/* Navbar */}
            <Navbar />
            <h1 className="landing-title">The Coffee Nook</h1>
            <h2 className="landing-hook">
                Grab your favorite cup, <br />
                and start your morning right!
            </h2>
                <div className="landing-btn-container">
                    <button className="landing-btn-directory">
                        <Link to='/directory' className="landing-directory">
                            Drink Directory
                        </Link>
                    </button>
                </div>
        </div>
    </>
  )
}

export default Landing