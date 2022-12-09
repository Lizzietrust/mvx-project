import logo from '../mvx images/logo.png'
import portrait from '../mvx images/portrait.png'
import hamburger from '../mvx images/hamburger.png'
import times from '../mvx images/times.png'
import { useRef } from 'react'

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <div className='header'>
      <nav>
        <img src={logo} alt="" srcset="" />
        <div className="nav-menu" ref={navRef}>
          <div className="menu-times">
            <p className="menu-text">Menu</p>
            <div className="times nav-icon" onClick={showNavbar}>
              <img src={times} alt="" />
            </div>
          </div>
          <ul className="nav-list">
              <li className="nav-listitem"><a href="#" className='home'>Home</a></li>
              <li className="nav-listitem"><a href="#">About</a></li>
              <li className="nav-listitem"><a href="#">Services</a></li>
              <li className="nav-listitem"><a href="#">Resources</a></li>
              <li className="nav-listitem"><a href="#">Partners</a></li>
              <li className="nav-listitem"><a href="#">Contact Us</a></li>
          </ul>
          <div className="nav-btns">
            <button className="signin">Sign In</button>
            <button className="signup">Sign Up</button>
          </div> 
        </div>
        <div className="hamburger nav-icon" onClick={showNavbar}>
            <img src={hamburger} alt="" srcset="" />
        </div>
      </nav>
      <main>
        <div className="header-content">
            <h1>Access <span className='orange'>Fast Finance</span> and  
                <span className='blue'> Easy Shipping </span>Around The World
            </h1>
            <p>MVX offers you freight financing, freight tracking, door to door shipping and more, 
                all at the tip of your fingers. We eliminate the headache of global shipping for you.
            </p>
            <div className="main-btns">
                <button className="cargo">Move Cargo</button>
                <button className="finance">Get Financed</button>
            </div>
        </div>
        <img src={portrait} alt="" srcset="" className='portrait'/>
      </main>
    </div>
  )
}

export default Header
