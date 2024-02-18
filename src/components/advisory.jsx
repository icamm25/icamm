import './css/advisory.css'
import advisory from '../json/advisory.json'
import {Fade} from 'react-reveal'

export default function Advisory(){
    return(
        <div className='white-bg' id='#advisory-committee'>

        <h2 className='advisory-title'> The Advisory Commitee</h2>

    <div className='advisory-container'>

    {advisory.map((entity, index) => (
      <Fade bottom duration={1000} delay={100}>

      
      <div key={index} className='advisory-entity'>

        <div className='advisory-box-1'>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className='advisory-details'>

        <p className='advisory-name'>{entity.name}</p>
        <p className='advisory-position'>{entity.position}</p>
        <p className='advisory-department'>{entity.department}</p>
        <p className='advisory-college'>{entity.college}</p>

        </div>

      </div>
      </Fade>

    ))}
  </div>

  </div>
    )

}