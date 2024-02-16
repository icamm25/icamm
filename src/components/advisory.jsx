import './css/advisory.css'
import advisory from '../json/advisory.json'

export default function Advisory(){
        <div className='white-bg'>
            <h2 className='advisory-title'> The Advisory Commitee</h2>

        <div className='advisory-container'>

        {advisory.map((entity, index) => (

          <div key={index} className='advisory-entity'>

            <div className='advisory-box-1'>
            </div>

            <div className='advisory-details'>

            <p className='advisory-name'>{entity.name}</p>
            <p className='advisory-position'>{entity.position}</p>
            <p className='advisory-department'>{entity.department}</p>
            <p className='advisory-college'>{entity.college}</p>

            </div>

          </div>

        ))}
      </div>

      </div>
}