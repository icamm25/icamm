import './css/technical.css'
import technical from '../json/technical.json'

export default function Technical(){
    return(
        <div className='white-bg'>

        <h2 className='technical-title'> Technical Commitee</h2>

    <div className='technical-container'>

    {technical.map((entity, index) => (

      <div key={index} className='technical-entity'>

        <div className='technical-details'>

        <p className='technical-name'>{entity.name}</p>
        <p className='technical-college'>{entity.college}</p>

        </div>

      </div>

    ))}
  </div>

  </div>
    )

}