import './css/organizing.css'
import organizing from '../json/organizing.json'
import {Fade} from 'react-reveal'

export default function Organizing(){
    return(
        <div className='black-bg' id='#organizing-committee'>
            <h2 className='organizing-title'> The Organizing Commitee</h2>

        <div className='organizing-container'>

        {organizing.map((entity, index) => (
          <Fade bottom duration={1000} delay={50}>
          <div key={index} className='entity'>

            <div className='circle'>
                <div className='circle-inner'>
                    <img src={entity.image} alt="organizer-image" className='organizer-image'/>
                </div>
            </div>

            <p className='name'>{entity.name}</p>
            <p className='position'>{entity.position}</p>
            <p className='department'>{entity.department}</p>
            <p className='college'>{entity.college}</p>
            <p className='college'>{entity.other}</p>

          </div>
          </Fade>

        ))}
      </div>

      </div>
    )
}