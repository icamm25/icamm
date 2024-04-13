import './css/college.css'
import {Fade, fade} from 'react-reveal'

export default function College(){
    return(
        <div className='college-container' id='#college'>
            <div className='college-inner'>
                
                <div className='college-l1'></div>
                <div className='college-l2'></div>
                
                <div className='college-pic'>
                    <img src="/clg.jpg" alt="college" />
                </div>
                
                <div className='college-head'>
                    <div className='college-header-btn'>About the College</div>
                    <h2 className='college-title'>PSG College of Technology</h2>
                </div>
                       
                <div className='college-desc'>
                    <div className='college-text-box'>
                        <p>PSG College of Technology, established in the year 1951 by PSG &amp; Sons’ Charities, is an ISO
                            9001 - 2015 certified autonomous college affiliated to Anna University, Chennai. The college
                            offers 21 undergraduate programmes and 24 postgraduate programmes which includes Engineering
                            and Technology, Computer Applications, Management Sciences, Basic and Applied Sciences.
                            Several advanced centres are set up with financial support from MoE, DST and
                            other agencies. PSG College of Technology was ranked second under Colleges/Institutes (Govt.
                            &amp; Govt. Aided) (Technical) by ATAL Ranking of Institutions on Innovation Achievements
                            (ARIIA), Ministry of Education, Government of India in the year 2021 and the best industry
                            linked institution by AICTE-CII in the year 2012. During the occasion of India assuming the G20 Presidency on December 1, 2022, PSG College of Technology was identified as pioneer among the 75 educational institutions across India, with special responsibilities towards organizing special lectures, student exchange programmes, academic and cultural activities to spread awareness among the youth and the academic community on the G20 agenda. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}