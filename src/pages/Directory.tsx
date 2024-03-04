import Drinks from "../components/Drinks"
import Navbar from "../components/Navbar"
import '../assets/css/directory.css';

function Directory() {
  return (
    <>
        <div className="directory-container">
        <Navbar />
          <div className="drink-recipes">
            <Drinks />
          </div>
        </div>
    </>
  )
}

export default Directory