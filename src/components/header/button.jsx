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
    <Link to='register' className='register-button'>
      <button onClick={()=>setModal5(true)} className='btn'>Register</button>
      <span className='arow'><MdKeyboardArrowRight className='right-arrow' /></span>
    </Link>
     {
      modal5 && (<Modal title={<span>Registration</span>}
      content={<h3>Coming soon... </h3>}
      close={setModal5}
    />
    )}
    </>
  );
}