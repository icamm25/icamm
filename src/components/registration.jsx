
import React from 'react'
import "./css/registration.css"
// import reg from "../json/reg.json"
function Registration() {
    const items = Array.from({ length: 8 });
    const items2 = Array.from({ length: 2 })
    return (
        <div id='#payment-details' className='registration_page'>
            <div className="reg_container">
                <h1 className='pay_title'>Registration</h1>
                <p className="p_det">It is mandatory that at least one author of each accepted paper register and present the paper in the technical sessions. All accepted papers will be considered for presentation and publication only after the payment of registration fee.</p>
                <div className="registration_fees">
                    <h2 className='pay_fees'>Registration fees</h2>
                    <div className="r_head">
                        <div className="r_box">
                            <p className='reg_title'>S.No</p>
                        </div>
                        <div className="r_box ">
                            <p className='reg_title'>Option</p>
                            <div className="r_symbol_box"><img src="./option.svg" alt="" height={50} width={50}/></div>
                        </div>
                        <div className="r_box ">
                            <p className='reg_title'>Indian Delegate</p>
                            <div className="r_symbol_box"><img src="./rupee.png" alt="" height={40} width={40}/></div>
                        </div>
                        <div className="r_box">
                            <p className='reg_title'>Foreign Delegate</p>
                            <div className="r_symbol_box"><img src="./dollar.svg" alt="" height={60} width={60}/></div>
                        </div>
                    </div>
                    <div className="r_grid-container">
                        {/* {items.map((item, index) => (
                            <div key={index} className="r_grid-item">1</div>
                        ))} */}
                        <div className="r_grid-item">1</div>
                        <div className="r_grid-item">Academicians</div>
                        <div className="r_grid-item">2500</div>
                        <div className="r_grid-item">250 USD</div>
                        <div className="r_grid-item">2</div>
                        <div className="r_grid-item">Industry participants</div>
                        <div className="r_grid-item">3000</div>
                        <div className="r_grid-item">250 USD</div>
                        <div className="r_grid-item">3</div>
                        <div className="r_grid-item">Full time research scholars</div>
                        <div className="r_grid-item">2000</div>
                        <div className="r_grid-item">250 USD</div>
                        <div className="r_grid-item">4</div>
                        <div className="r_grid-item">Accompanying guests/Spouse</div>
                        <div className="r_grid-item">2000</div>
                        <div className="r_grid-item">75 USD</div>
                    </div>
                    <p className='post_det'>Registration fee includes conference kit, a copy of proceedings (Soft Copy), food and banquet. However, accompanying guests/spouse cannot avail the conference kit and the copy of the proceedings. For full time research scholars, a bonafide certificate duly signed by the research supervisor /head of the institution/department shall be attached along with the registration form to avail of the stipulated registration fee.</p>
                </div>
                <div className="payment_details">
                    <h2 className='pay_detail'>Payment Details</h2>
                    <div className="r_payment_head">
                        <div className="r_box r">
                            <p className='reg_title'>Indian Delegate</p>
                            <div className="r_head_symbol_box"><img src="./rupee.png" alt="" height={40} width={40}/></div>
                        </div>
                        <div className="r_box r_national">
                            <p className='reg_title'>Foreign Delegate</p>
                            <div className="r_head_symbol_box"><img src="./dollar.svg" alt="" height={60} width={60}/></div>
                        </div>
                    </div>
                    <div className="r_payment_grid_container">
                        {/* {items2.map((item, index) => (
                            <div key={index} className="r_payment_grid_item">{item}
                            </div>
                        ))} */}
                        <div className="r_payment_grid_item">
                            <p>The registration fee is to be paid by Demand Draft drawn in favor of “PSG CNCE” payable at Coimbatore and Draft to be sent to the organizing secretary</p>
                        </div>
                        <div className="r_payment_grid_item_2">
                            <div className="r_pay_box">
                            <p>SWIFT TRANSFER (US DOLLAR) <br />
                                Remit to: CITI BANK, NEW YORK <br />
                                SWIFT Code: CITIUS33 <br />
                            </p>
                            <p>For Further credit to <br />
                                CENTRAL BANK OF INDIA <br />
                                International Business Branch, Mumbai <br />
                                USD 36072305 <br />
                            </p>
                            <p>SWIFT code: CBININBBOSB <br />
                                Ultimate Beneficiary <br />
                                PSG CNCE, PSGCT <br />
                                Bank A/c No 1481267367, <br /> IFSC Code: CBIN0280913 with <br />
                                Central Bank of India, Peelamedu, <br />
                                Coimbatore-641 004,Tamilnadu, INDIA <br />
                            </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Registration