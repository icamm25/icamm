import './css/technical.css'
import technical from '../json/technical.json'
import {Fade} from 'react-reveal'

export default function Technical(){
    return(
        <div className='white-bg' id='#technical-committee'>

        <h2 className='technical-title'> Technical Commitee</h2>

    <div className='technical-container'>

    {technical.map((entity, index) => (
      <Fade bottom duration={1000} delay={100}>

      <div key={index} className='technical-entity'>

        <div className='technical-details'>

        <p className='technical-name'>{entity.name}</p>
        <p className='technical-college'>{entity.college}</p>

        </div>

      </div>
    </Fade>
    ))}
  </div>

  </div>
    )

}