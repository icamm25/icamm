import './css/footer.css'
import {Link} from "react-scroll"

export default function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer1'>
                <h1>ICAMM'25</h1>
                <p>&copy; PSG College of Technology</p>
                <br/>

                <center><div className='team'>
                    View Team
                </div></center>
            </div>

            <div className='footer2'>
                <p>PSG College of Technology,</p>
                <p>Avinashi Road,</p>
                <p>Peelamedu,</p>
                <p>Coimbatore,</p>
                <p>Tamilnadu 641 004.</p>
            </div>

            <div className='footer3'>
                <ul>
                    <li><a href='#'><Link to='#home'>&gt; Home</Link></a></li>
                    <li><a href='#'><Link to='#college'>&gt; About</Link></a></li>
                    <li><a href='#'><Link to='#domain'>&gt; Domain</Link></a></li>
                    <li><a href='#'><Link to='#speakers'>&gt; Speakers</Link></a></li>
                    <li><a href='#'><Link to='#contact'>&gt; contact</Link></a></li>
                    <li><a href='#'><Link to='#important-date'>&gt; Important dates</Link></a></li>
                </ul>
            </div>
        </div>
    )
}