import './css/contact.css'

export default function Contact(){
    return(
        <div className='blue-bg'>

            <h2 className='contact-title'>Contact</h2>
            <div className='contact-container'>
                <div className='entity'>
                    <div className='circle'>
                        <div className='circle-inner'>
                            <img src='https://th.bing.com/th/id/OIP.iOJ3d7QnoKo7X0GrBQf97gHaHa?rs=1&pid=ImgDetMain' alt="organizer-image" className='organizer-image'/>
                        </div>
                    </div>


                    <p className='contact-name'>Professor name</p>
                    <p className='contact-position'>Position</p>
                    <p className='contact-department'>Department</p>
                    <p className='contact-college'>College</p>
                    <p className='contact-email'>email@gmail.com</p>
                    <p className='contact-phone1'>+91 XXXXX XXXXX</p>
                    <p className='contact-phone2'>+91 XXXXX XXXXX</p>

                </div>
            </div>

        </div>
        
    )
}