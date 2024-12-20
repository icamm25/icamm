import "./css/dates_item.css"
export default function Dates_item() {
    return (
        <div className="date-cont">
            <div className="dateItemBox d">
                <div className="d_circle">
                </div>
                <div className="d_info">
                    <p className="d_da" >
                        {/* <strike  >23 October, 2024</strike><br /> */}
                        <span >10 December, 2024</span>
                    </p>
                    <p className="dc_info">
                        Paper Submission
                    </p>
                </div>
                <img className="d_image" src="/arrow1.png" alt="" />
            </div>


            <div className="dateItemBox d">
                <div className="d_circle">
                </div>
                <div className="d_info">
                    <p className="d_da">
                        17 December, 2024
                    </p>
                    <p className="dc_info">
                        Notification of Acceptance
                    </p>
                </div>
                <img className="d_image" src="/arrow2.png" alt="" />
            </div>
            <div className="dateItemBox d">
                <div className="d_circle">
                </div>
                <div className="d_info">
                    <p className="d_da">
                        24 December, 2024
                    </p>
                    <p className="dc_info">
                        Camera Ready Paper
                    </p>
                </div>
                <img className="d_image" src="/arrow1.png" alt="" />
            </div>
            <div className="dateItemBox d">
                <div className="d_circle">
                </div>
                <div className="d_info">
                    <p className="d_da">
                        31 December, 2024
                    </p>
                    <p className="dc_info">
                        Author Registration
                    </p>
                </div>
            </div>
        </div>
    )
}
