import './css/contact.css'
import {Fade, fade} from 'react-reveal'

export default function Contact(){
    return(
        
        <div className='blue-bg' id='#contact'>
            
            <h2 className='contact-title'>Contact</h2>
            <div className='contact-container'>
            <Fade bottom duration={1000} delay={50}>
                <div className='entity'>
                    <div className='circle'>
                        <div className='circle-inner'>
                            <img src='./public/muthu.jpeg' alt="organizer-image" className='organizer-image'/>
                        </div>
                    </div>


                    <p className='contact-name'>Dr.P. Muthukumar</p>
                    <p className='contact-position'>Organizing Secretary – ICAMM 2025</p>
                    <p className='contact-department'>Department of Mathematics,</p>
                    <p className='contact-college'>PSG College of Technology,</p>
                    <p className='contact-college'>Coimbatore- 641004.</p>
                    <p className='contact-email'>icamm2025@psgtech.ac.in,</p>
                    <p className='contact-phone1'>+91 94439 63302,</p>
                    <p className='contact-phone2'>+91 422 2572177.</p>

                </div>
                </Fade>
            </div>

        </div>
        
        
    )
}