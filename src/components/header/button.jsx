import React from 'react';
import './button.css';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import Modal from '../modal';

export default function Button() {
  const [modal5, setModal5] = useState(false)
  return (
    <>
    <a href='https://forms.gle/RrUb9qtFo1zrtkfy5' target='_blank' className='register-button'>
      <button className='btn'>Register</button>
      <span className='arow'><MdKeyboardArrowRight className='right-arrow' /></span>
    </a>
     
    </>
  );
}