import './css/footer.css'

export default function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer1'>
                <h1>ICAMM'25</h1>
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
                    <li><a href='#'>&gt; Home</a></li>
                    <li><a href='#'>&gt; About</a></li>
                    <li><a href='#'>&gt; Domain</a></li>
                    <li><a href='#'>&gt; Theme</a></li>
                    <li><a href='#'>&gt; Speakers</a></li>
                    <li><a href='#'>&gt; Authors</a></li>
                    <li><a href='#'>&gt; Important dates</a></li>
                </ul>
            </div>
        </div>
    )
}