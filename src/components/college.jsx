import './css/college.css'
import {Fade, fade} from 'react-reveal'

export default function College(){
    return(
        <div className='college-container' id='#college'>
            <div className='college-inner'>
                
                <div className='college-l1'></div>
                <div className='college-l2'></div>
                
                <div className='college-pic'>
                    <img src="https://www.educationworld.in/wp-content/uploads/2013/05/Untitled-design-4-1.jpg" alt="college" />
                </div>
                

            
                <div className='college-head'>
                    <div className='college-header-btn'>About the College</div>
                    <h2 className='college-title'>PSG College of Technology</h2>
                </div>
                       
                <div className='college-desc'>
                    <div className='college-text-box'>
                        <p>PSG College of Technology, an ISO 9001:2015 certified institution is one of the foremost institutions founded by the PSG & Sons & Charities Trust-1926. The College was established in the year 1951.
                        The College today has a student strength of about 8500 with 15 Engineering and Technology departments. More than 600 research scholars are pursuing research programmes leading to Ph.D. / MS / M.Tech degrees.  Several advanced centres are set up with financial support from MHRD, DST and other agencies.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}