import "./css/dates.css"
import Dates_item from "./dates_items"
export default function Dates(){
    return (
        <div  id="#important-date" className="date-section">
            <div className="important-date">
                <h1>Important date</h1>
                <Dates_item/>
            </div>
            <div className="schedule">
                <h1>Schedule</h1>
                <div className="sc_box">
                    <div className="sc_circle">
                        <div className="sc_inside">
                        </div>
                    </div>
                    <div className="sc_circle">
                        <div className="sc_inside"></div>
                    </div>
                    <div className="sc_circle">
                        <div className="sc_inside"></div>
                    </div>
                    <div className="sc_circle">
                        <div className="sc_inside"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}