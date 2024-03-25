import './css/speakers.css'
import speakers from '../json/speakers.json'
import {Fade} from 'react-reveal'

export default function Speakers(){
    return(
        <div className='black-bg' id='#speakers'>
            <h2 className='speakers-title'> Speakers</h2>

        <div className='speakers-container'>

        {speakers.map((entity, index) => (
          <Fade bottom duration={1000} delay={50}>
          <div key={index} className='entity'>

            <div className='circle'>
                <div className='circle-inner'>
                    <img src={entity.image} alt="speaker-image" className='speaker-image'/>
                </div>
            </div>

            <p className='name'>{entity.name}</p>
            <p className='college'>{entity.college}</p>
            <p className='position'>{entity.country}</p>
            

          </div>
        </Fade>
        ))}
      </div>

      </div>
    )
}