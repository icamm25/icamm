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
                <h1>Important Dates</h1>
                <Dates_item/>
            </div>
            <div  id='#schedule' className="schedule">
                <h1>Program Schedule</h1>
                <div className="sc_box">
                    <div className="sc_circle">
                        <div className="sc_inside">
                        <a href="https://drive.google.com/file/d/1jonpiPWV6vSDOcIPMO72WN2sltEMVorh/view?usp=sharing" target="_blank" className='sc_link' >Day  1
                           {/* onClick={()=>setModal(true)} */}
                             {/* {modal && ( 
                                <Modal title={<span>Day 1</span>}
                                content={<h3>Will be updated soon... </h3>}
                                close={setModal}
                                />
                             )}     */}
                        </a>
                        </div>
                    </div>
                    <div className="sc_circle">
                        <div className="sc_inside">
                        <a href="https://drive.google.com/file/d/12K978dzm5tUNuXCA3HOph90-XiPtT0is/view?usp=sharing" target="_blank" className='sc_link' >Day 2
                          {/* onClick={()=>setModal1(true)} */}
                             {/* {modal1 && ( 
                                <Modal title={<span>Day 2</span>}
                                content={<h3>Will be updated soon... </h3>}
                                close={setModal1}
                                />
                             )}    */}
                             </a>
                        </div>
                    </div>
                    <div className="sc_circle">
                        <div className="sc_inside">
                        <a href="https://drive.google.com/file/d/1Rtzt_A1XF3oJGCn0pxSYb_1U53n_sTCc/view?usp=sharing" target ="_blank" className='sc_link' >Day 3</a>
                             {/* {modal2 && ( 
                                <Modal title={<span>Day 3</span>}
                                content={<h3>Will be updated soon... </h3>}
                                close={setModal2}
                                />
                             )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}