import './css/organizing.css'
import organizing from '../json/organizing.json'

export default function Organizing(){
    return(
        <div className='black-bg'>
            <h2 className='organizing-title'> The Organizing Commitee</h2>

        <div className='organizing-container'>

        {organizing.map((entity, index) => (

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

          </div>

        ))}
      </div>

      </div>
    )
}