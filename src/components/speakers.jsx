import './css/speakers.css'
import speakers from '../json/speakers.json'

export default function Speakers(){
    return(
        <div className='black-bg'>
            <h2 className='speakers-title'> Speakers</h2>

        <div className='speakers-container'>

        {speakers.map((entity, index) => (

          <div key={index} className='entity'>

            <div className='circle'>
                <div className='circle-inner'>
                    <img src={entity.image} alt="speaker-image" className='speaker-image'/>
                </div>
            </div>

            <p className='name'>{entity.name}</p>
            <p className='position'>{entity.position}</p>
            <p className='department'>{entity.department}</p>
            <p className='college'>{entity.college}</p>

          </div>

        ))}
      </div>

      </div>
    )
}