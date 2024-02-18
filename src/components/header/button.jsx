import React from 'react';
import './button.css';
import { Link } from 'react-scroll';
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Button() {
  return (
    <Link to='register' className='register-button'>
      <button className='btn'>Register</button>
    <span className='arow'><MdKeyboardArrowRight className='right-arrow'/></span>
    </Link>
  );
}