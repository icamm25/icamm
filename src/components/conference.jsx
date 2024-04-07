import './css/conference.css'
import {Fade, fade} from 'react-reveal'

export default function Conference(){
    return(
        <div className='conference-container' id='#conference'>
            <div className='conference-inner'>
                <div className='conference-l1'></div>
                <div className='conference-l2'></div>
                <div className='conference-head'>
                    <div className='conference-header-btn'>About the conference</div>
                    <h2 className='conference-title'>ICAMM'25</h2>
                </div>       
                <div className='conference-desc'>
                    <div className='conference-text-box'>
                        <p>The Sixth International Conference on Applied Mathematical Models (ICAMM 2025) will be
                            held in the Department of Mathematics at PSG College of Technology in Coimbatore from
                            January 8–10, 2025. The conference aims to stimulate research and make a substantial
                            contribution to the advancement of computational and mathematical models. This is achieved by
                            offering a forum for the exchange of novel concepts and discussions of recent advancements in
                            the subject between scholars, researchers, students, and business professionals. Further, it would
                            provide a platform for outstanding research articles on mathematics&#39; theoretical foundations and
                            technological and engineering applications.</p>
                    </div>
                </div>


                <div className='conference-pic'>
                    <img src="/math.jpg" alt="conference" />
                </div>

            </div>
        </div>
    )
}