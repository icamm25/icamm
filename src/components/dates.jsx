import "./css/dates.css"
import Modal from "./modal"
import Dates_item from "./dates_items"
import { useState } from "react"
export default function Dates(){
    const [modal,setModal]=useState(false);
    const [modal1,setModal1]=useState(false);
    const [modal2,setModal2]=useState(false);
    return (
        <div  id="#important-date" className="date-section">
            <div className="important-date">
                <h1>Important date</h1>
                <Dates_item/>
            </div>
            <div  id='#schedule' className="schedule">
                <h1>Schedule</h1>
                <div className="sc_box">
                    <div className="sc_circle">
                        <div className="sc_inside">
                        <button className='sc_link' onClick={()=>setModal(true)}>Day  1</button>
                             {modal && ( 
                                <Modal title={<span>Day 1</span>}
                                content={<h3>Will update soon... </h3>}
                                close={setModal}
                                />
                             )}    
                        </div>
                    </div>
                    <div className="sc_circle">
                        <div className="sc_inside">
                        <button className='sc_link' onClick={()=>setModal1(true)}>Day 2</button>
                             {modal1 && ( 
                                <Modal title={<span>Day 2</span>}
                                content={<h3>Will update soon... </h3>}
                                close={setModal1}
                                />
                             )}   
                        </div>
                    </div>
                    <div className="sc_circle">
                        <div className="sc_inside">
                        <button className='sc_link' onClick={()=>setModal2(true)}>Day 3</button>
                             {modal2 && ( 
                                <Modal title={<span>Day 3</span>}
                                content={<h3>Will update soon... </h3>}
                                close={setModal2}
                                />
                             )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}