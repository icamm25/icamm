import React,{useState,useRef} from 'react'
import {Link} from "react-scroll"
import Button from './button'
import Dropdown from './dropdown'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import {about,teams,authors} from "./menuitems.js"
import "./navbar.css"
import "./homepage.css"
const scrollToSection=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth',
    })
  }
function Navbar() {
    const home=useRef(null);
    const [click,setClick]=useState(false);
    const [active,setActive]=useState('home')
    const [dropdown, setDropdown] = useState(false);
    const[dropdown2,setDropdown2]=useState(false)
    const[dropdown3,setDropdown3]=useState(false)
    const closeMobileMenu = () => setClick(false);
    const handleActive=(tab)=>{
      setActive(tab);
    }
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
    <div className='h_header'>
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
        <li  className={`nav-item ${active==='home'?'active':''}`}>
            <Link to='#home' className='nav-links' onClick={()=>{
              closeMobileMenu()
              handleActive('home')}}>
              Home
            </Link>
          </li>
          <li className={click ? 'items' : (active === 'about' ? 'nav-item active' : 'nav-item')}
          onMouseLeave={onMouseLeave}
           onMouseEnter={onMouseEnter}   
           >
            <Link to='#about' className='nav-links' onClick={closeMobileMenu}>
              <span className='span-drop'>About <MdKeyboardArrowDown className='drop-icon'/></span>
            </Link>
            {dropdown && <Dropdown  handleActive={handleActive} value={about} tab={'about'} />}
          </li>
          {/* --about- */}
          <li className={click?'nav-expand-item':'items'}>
            <Link to='#college' className='nav-links' onClick={()=>closeMobileMenu()}>
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
          <li className={`nav-item ${active==='domain'?'active':''}`}>
            <Link to='#domain' className='nav-links' onClick={()=>{
              closeMobileMenu()
              handleActive('domain')}}>
              Domain
            </Link>
          </li>
          <li className={click ? 'items' : (active === 'teams' ? 'nav-item active' : 'nav-item')}
          onMouseLeave={onMouseLeave2}
          onMouseEnter={onMouseEnter2}
          >
            <Link to='#team' className='nav-links' onClick={closeMobileMenu}>
             <span className="span-drop"> Team<MdKeyboardArrowDown className='drop-icon'/></span>
            </Link>
            {dropdown2 && <Dropdown handleActive={handleActive}  value={teams} tab={'teams'}/>}
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
          <li className={`nav-item ${active==='speakers'?'active':''}`}>
            <Link to='#speakers' className='nav-links' onClick={()=>{
              closeMobileMenu()
              handleActive('speakers')}}>
              Speakers
            </Link>
          </li>
          <li className={click ? 'items' : (active === 'authors' ? 'nav-item active' : 'nav-item')}
             onMouseLeave={onMouseLeave3}
             onMouseEnter={onMouseEnter3}
          >
            <Link to='#for-authors' className='nav-links' onClick={closeMobileMenu}>
              <span className="span-drop">For-authors<MdKeyboardArrowDown className='drop-icon'/></span>
            </Link>
            {dropdown3 && <Dropdown handleActive={handleActive} value={authors} tab={'authors'}/>}
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
          <li className={`nav-item ${active==='important-date'?'active':''}`}>
            <Link to='#important-date' className='nav-links' onClick={()=>{
              closeMobileMenu()
              handleActive('important-date')}}>
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
        <div className="overlay"></div>
        <video  className='psg-video'  src="src\assets\video\PSGVideo.mp4" autoPlay loop muted></video>
        <div className="content">
            <div className="section_top">
                <h2 className='h_conference'>Fourth International Conference</h2>
                <h1 className='h_topic'>APPLIED MATHEMATICAL MODEL</h1>
                <h1 className='h_name'>(ICAMM 2025)</h1>
                <h3 className='h_month'>Month 00-00-2025</h3>
            </div>
            <div className="section_bottom">
                <div className="h-left">
                    <img src="src\assets\images\psg-logo.jpg" alt="" style={{width:"130px",height:"150px"}}/>
                </div>
                <div className="h-right">
                    <p className='h_organizer'>Organized by</p>
                    <p className='h_department'>Department of Mathematics</p>
                    <h2 className='h_college'>PSG COLLEGE OF TECHNOLOGY</h2>
                    <p className='h_place'>Coimbatore-641004,Tamilnadu,India</p>
                </div>
                .
            </div>
        </div>

    </div>
  )
}

export default Navbar