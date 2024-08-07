import './css/contact.css'
import {Fade, fade} from 'react-reveal'

export default function Contact(){
    return(
        
        <div className='blue-bg' id='#contact'>
            
            <h2 className='contact-title'>Contact</h2>
            <div className='contact-container'>
            <Fade bottom duration={1000} delay={50}>
                <div className='entity' id='contact-entity'>
                    {/* <div className='circle'>
                        <div className='circle-inner'>
                            <img src='/muthu.jpg' alt="organizer-image" className='organizer-image'/>
                        </div>
                    </div> */}
                    <p className='contact-name'>Dr.P. Muthukumar</p>
                    <p className='contact-position'>Organizing Secretary – ICAMM 2025</p>
                    <p className='contact-department'>Department of Mathematics</p>
                    <p className='contact-college'>PSG College of Technology</p>
                    <p className='contact-college'>Coimbatore- 641004</p>
                    <p className='contact-email'><a href="mailto:icamm2025@psgtech.ac.in">Email: icamm2025@psgtech.ac.in</a></p>
                    <p className='contact-phone1'><a href="tel:+919443963302">Mobile: +91 94439 63302</a></p>
                    <p className='contact-phone2'>Phone: +91 422 2572177 - extn:4443</p>

                </div>
                </Fade>
            </div>

        </div>
        
        
    )
}