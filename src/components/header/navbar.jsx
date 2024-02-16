import React,{useState,useRef} from 'react'
import {Link} from "react-scroll"
import Button from './button'
import Dropdown from './dropdown'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import {about,teams,authors} from "./menuitems.js"
import "./navbar.css"
const scrollToSection=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth',
    })
  }
function Navbar() {
    const home=useRef(null);
    const [click,setClick]=useState(false);
    const [dropdown, setDropdown] = useState(false);
    const[dropdown2,setDropdown2]=useState(false)
    const[dropdown3,setDropdown3]=useState(false)
    const closeMobileMenu = () => setClick(false);
    const handleClick=()=>{
        setClick(!click)
    }
    const style =  {backgroundColor: "red", fontSize: "1.5em" }
    const onMouseEnter = () => {
      if (window.innerWidth < 1150) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 1150) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
     
    };
    const onMouseEnter2 = () => {
      if (window.innerWidth < 1150) {
        setDropdown2(false);
      } else {
        setDropdown2(true);
      }
    };
  
    const onMouseLeave2 = () => {
      if (window.innerWidth < 1150) {
        setDropdown2(false);
      } else {
        setDropdown2(false);
      }
     
    };
    const onMouseEnter3 = () => {
      if (window.innerWidth < 1150) {
        setDropdown3(false);
      } else {
        setDropdown3(true);
      }
    };
  
    const onMouseLeave3 = () => {
      if (window.innerWidth < 1150) {
        setDropdown3(false);
      } else {
        setDropdown3(false);
      }
     
    };
    
  return (
    <div className='header'>
            <div className="navbar">
            <Link to='#home' className='nav-logo' onClick={()=>scrollToSection(home)}>
              <div className='span-logo'>
              <img className='logo-image' src="src\assets\images\logo.png" alt="" />
              </div>
            </Link>
        <div className="menu-icons" onClick={handleClick} >
           <li>{click?<IoMdClose className='close-icon'/>:<FaBars className='open-icon'/>}</li>
        </div>
        <ul className={click?'nav-menu active':'nav-menu'}>
        <li className='nav-item'>
            <Link to='#home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className={click?'items':'nav-item'}
          onMouseLeave={onMouseLeave}
           onMouseEnter={onMouseEnter}
           
           >
            <Link to='#about' className='nav-links' onClick={closeMobileMenu}>
              <span className='span-drop'>About <MdKeyboardArrowDown className='drop-icon'/></span>
            </Link>
            {dropdown && <Dropdown value={about} />}
          </li>
          {/* --about- */}
          <li className={click?'nav-expand-item':'items'}>
            <Link to='#college' className='nav-links' onClick={closeMobileMenu}>
              College
            </Link>
            <Link to='#department' className='nav-links' onClick={closeMobileMenu}>
              Department
            </Link>
            <Link to='#conference' className='nav-links' onClick={closeMobileMenu}>
              Conference
            </Link>
          </li>
          {/* -- */}
          <li className='nav-item'>
            <Link to='#domain' className='nav-links' onClick={closeMobileMenu}>
              Domain
            </Link>
          </li>
          <li className={click?'items':'nav-item'}
          onMouseLeave={onMouseLeave2}
          onMouseEnter={onMouseEnter2}
          >
            <Link to='#team' className='nav-links' onClick={closeMobileMenu}>
             <span className="span-drop"> Team<MdKeyboardArrowDown className='drop-icon'/></span>
            </Link>
            {dropdown2 && <Dropdown value={teams}/>}
          </li>
          {/* --team-- */}
          <li className={click?'nav-expand-item':'items'}>
            <Link to='#organizing-committee' className='nav-links' onClick={closeMobileMenu}>
            Organizing committee
            </Link>
            <Link to='#advisory-committee' className='nav-links' onClick={closeMobileMenu}>
            Advisory committee
            </Link>
            <Link to='#technical-committee' className='nav-links' onClick={closeMobileMenu}>
              Conference
            </Link>
          </li>
          {/* -- */}
          <li className='nav-item'>
            <Link to='#speakers' className='nav-links' onClick={closeMobileMenu}>
              Speakers
            </Link>
          </li>
          <li className={click?'items':'nav-item'}
             onMouseLeave={onMouseLeave3}
             onMouseEnter={onMouseEnter3}
          >
            <Link to='#for-authors' className='nav-links' onClick={closeMobileMenu}>
              <span className="span-drop">For-authors<MdKeyboardArrowDown className='drop-icon'/></span>
            </Link>
            {dropdown3 && <Dropdown value={authors}/>}
          </li>
          {/* -authors- */}
          <li className={click?'nav-expand-item':'items'}>
          <Link to='#call-for-papers' className='nav-links' onClick={closeMobileMenu}>
          Call for papers
            </Link>
            <Link to='#submission-guidelines' className='nav-links' onClick={closeMobileMenu}>
            Submission guidelines
            </Link>
            <Link to='#schedule' className='nav-links' onClick={closeMobileMenu}>
            Schedule
            </Link>
          </li>
          {/* -- */}
          <li className='nav-item'>
            <Link to='#important-date' className='nav-links' onClick={closeMobileMenu}>
              Important date
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Register
            </Link>
          </li>
        </ul>
        <Button/>
        </div>
    </div>
  )
}

export default Navbar