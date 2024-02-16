import './css/conference.css'
import {Fade, fade} from 'react-reveal'

export default function Conference(){
    return(
        <div className='conference-container'>
            <div className='conference-inner'>
                <div className='conference-l1'></div>
                <div className='conference-l2'></div>
                <div className='conference-head'>
                    <div className='conference-header-btn'>About the conference</div>
                    <h2 className='conference-title'>ICAMM'25</h2>
                </div>       
                <div className='conference-desc'>
                    <div className='conference-text-box'>
                        <p>PSG conference of Technology, an ISO 9001:2015 certified institution is one of the foremost institutions founded by the PSG & Sons & Charities Trust-1926. The conference was established in the year 1951.
                        The conference today has a student strength of about 8500 with 15 Engineering and Technology departments. More than 600 research scholars are pursuing research programmes leading to Ph.D. / MS / M.Tech degrees.</p>
                    </div>
                </div>


                <div className='conference-pic'>
                    <img src="https://www.educationworld.in/wp-content/uploads/2013/05/Untitled-design-4-1.jpg" alt="conference" />
                </div>

            </div>
        </div>
    )
}