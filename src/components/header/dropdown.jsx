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
    <ul
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
    </ul>
  </>
  )
}

export default Dropdown