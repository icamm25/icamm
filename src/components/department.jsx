import './css/department.css'
import {Fade, fade} from 'react-reveal'

export default function Department(){
    return(
        <div className='department-container' id='#department'>
            <div className='department-inner'>
                <div className='department-black'>
                    
                </div>

                <div className='department-sandal'>
                    <div className='department-head'>
                    <div className='department-header-btn'>About the Department</div>
                    <h2 className='department-title'>Department of Mathematics</h2>
                    </div>
                </div>


                <div className='department-image'>
                        <img src="/dept.jpg" alt='department'></img>
                </div>

                <div className='department-desc'>
                        <p>Since 1951, the Department of Mathematics at PSG College of Technology continues to impart
                            mathematical skill and analytical thinking to all Engineering and Science graduates of this
                            institution. Over the past 7 decades with the highest standards in both research and teaching, it
                            has seen a phenomenal growth and success. The department is equipped with 27 dedicated
                            faculty as facilitators with a strong research base. So far, the department has produced 43
                            doctorates in the field of Applied and Pure Mathematics. Several outreach events, including
                            conferences, workshops, seminars, and symposiums on a wide range of topics, are organized by
                            the department. The department also trains engineering students in strong mathematical
                            background to enhance and apply their skills to find solutions to their field specific problems. An
                            appreciable number of research articles with Scopus and SCI indexes are published annually in
                            publications that are associated with the department.</p>
                </div>

                <div className='department-desc-mobile'>
                <div className='department-head'>
                    <div className='department-header-btn'>About the Department</div>
                    <h2 className='department-title'>Department of Mathematics</h2>
                    </div>
                        <p>Since 1951, the Department of Mathematics at PSG College of Technology continues to impart
                            mathematical skill and analytical thinking to all Engineering and science graduates of this
                            institution. Over the past 7 decades with the highest standards in both research and teaching, it
                            has seen a phenomenal growth and success. The department is equipped with 27 dedicated
                            faculty as facilitators with a strong research base. So far, the department has produced 43
                            doctorates in the field of Applied and Pure mathematics. Several outreach events, including
                            conferences, workshops, seminars, and symposiums on a wide range of topics, are organized by
                            the department. The department also trains engineering students in strong mathematical
                            background to enhance and apply their skills to find solutions to their field specific problems. An
                            appreciable number of research articles with Scopus and SCI indexes are published annually in
                            publications that are associated with the department.</p>
                </div>

                
            </div>
        </div>
    )
}