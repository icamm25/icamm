import React ,{useState} from 'react'
import {Link} from "react-scroll"
import Button from './button'
import'./dropdown.css'

function Dropdown({handleActive,value,tab}) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const handle=(tab)=>{
      handleActive(tab)
    }
  return (
    <>
    {/* <ul
      onClick={()=>{
        handleClick()
        
      }}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      {value.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() =>{
                 setClick(false)
                 handle(tab)}}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul> */}
    <ul
      onClick={()=>{
        handleClick()
        
      }}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      {value.map((item, index) => {
        return (
          <li key={index}>
            {item.newTab ? (
            // Open in new tab for external links like Google Forms
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={item.cName}
            >
              {item.title}
            </a>
          ) : (
            // Use Link for internal navigation
            <Link
              className={item.cName}
              to={item.path}
              onClick={() =>{ 
                setClick(false)
                handle(tab)

              }}
            >
              {item.title}
            </Link>
          )}
          </li>
        );
      })}
    </ul>
    {/* <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {menuItems.map((item, index) => (
        <li key={index}>
          {item.newTab ? (
            <span
              className={item.cName}
              onClick={() => handleItemClick(item)}
            >
              {item.title}
            </span>
          ) : (
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => handleItemClick(item)}
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul> */}
  </>
  )
}

export default Dropdown