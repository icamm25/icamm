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
      <a href='https://forms.gle/bVUAMwKCqaM5h8Ge9' target='_blank' className='register-button'>
        <button className='btn'>Register</button>
        <span className='arow'><MdKeyboardArrowRight className='right-arrow' /></span>

      </a>
      {modal5 && (
        <Modal title={<span>Registration</span>}
          content={<h3>Will be updated soon... </h3>}
          close={setModal5}
        />
      )}

    </>
  );
}
// https://forms.gle/RrUb9qtFo1zrtkfy5