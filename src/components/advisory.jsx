import './css/advisory.css'
import {Fade, fade} from 'react-reveal'

export default function advisory(){
    return(
        
        <div id='#advisory-committee' className='ad-bg'>
            
            <h2 className='advisory-title'>Advisory Committee</h2>
            <div className='advisory-container'>
            <Fade bottom duration={1000} delay={50}>
                <div className='entity' id='advisory-entity'>
                    <div className='circle'>
                        <div className='circle-inner'>
                            <img src='/krishna.png' alt="organizer-image" className='organizer-image'/>
                        </div>
                    </div>
                    <p className='advisory-name'>Prof. A. Krishnamoorthy,</p>
                    <p className='advisory-position'>Cochin University, Calicut,</p>
                    <p className='advisory-college'>India</p>

                </div>

                <div className='entity' id='advisory-entity'>
                    <div className='circle'>
                        <div className='circle-inner'>
                            <img src='/arum.jpg' alt="organizer-image" className='organizer-image'/>
                        </div>
                    </div>
                    <p className='advisory-name'>Prof. R. Arumuganathan,</p>
                    <p className='advisory-position'>PSG College of Technology, Coimbatore,</p>
                    <p className='advisory-college'>India</p>

                </div>
                </Fade>
            </div>

        </div>
        
        
    )
}