import './css/register.css'
import { useState } from 'react';
import Rmodal from './rmodal';
export default function Register(){
    const [modal0,setModal0]=useState(false);
    return(
        <div className='register-container'>
            <div className='register-inner'>
                <div className='register-text'>
                    GET REGISTERED
                </div>

                {/* <a href=''> */}
                    <div className='register-btn'>
                
                        <a href="https://forms.gle/RrUb9qtFo1zrtkfy5" target='_blank'><div className='text-inner'>
                            Register
                        </div></a>

                        <div className='symbol'>
                            &gt;
                        </div>
                        {modal0 && ( 
                                <Rmodal title={<span>Registration</span>}
                                content={<h3>Will be updated soon... </h3>}
                                close={setModal0}
                                />
                             )}    

                    </div>
                {/* </a> */}

            </div>
        </div>
    )
}