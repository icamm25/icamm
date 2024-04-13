
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
                <p className="p_det">It is mandatory that at least one of the authors of each accepted paper shall register and present the paper in the technical session. All accepted papers will be considered for presentation and publication only after the payment of registration fee.</p>
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
                        {/* <div className="r_box">
                            <p className='reg_title'>Foreign Delegate</p>
                            <div className="r_symbol_box"><img src="./dollar.svg" alt="" height={60} width={60}/></div>
                        </div> */}
                    </div>
                    <div className="r_grid-container">
                        {/* {items.map((item, index) => (
                            <div key={index} className="r_grid-item">1</div>
                        ))} */}
                        <div className="r_grid-item">1</div>
                        <div className="r_grid-item">Academicians</div>
                        <div className="r_grid-item">3000</div>
                        
                        <div className="r_grid-item">2</div>
                        <div className="r_grid-item">Industry/R&D Institution participants</div>
                        <div className="r_grid-item">4000</div>
                       
                        <div className="r_grid-item">3</div>
                        <div className="r_grid-item">Full time research scholars</div>
                        <div className="r_grid-item">2000</div>
                        
                        <div className="r_grid-item">4</div>
                        <div className="r_grid-item">Accompanying guests/Spouse</div>
                        <div className="r_grid-item">2000</div>
                        
                    </div>
                    <p className='post_det'>Registration fee includes conference kit, a copy of proceedings (Soft Copy) and food. However, accompanying guests/spouse cannot avail the conference kit and the copy of the proceedings. For full time research scholars, a bonafide certificate duly signed by the research supervisor / head of the institution/department shall be attached along with the registration form to avail the stipulated registration fee.</p>
                </div>
                <div className="payment_details">
                    <h2 className='pay_detail'>Payment Details</h2>
                    <div className="r_payment_grid_container">
                        <div className="r_payment_grid_item">
                        <div className="r_flex_item">
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">Account Number</p>
                                </div>
                                <hr className='pay_line' />
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">1481267367</p>
                                </div>
                            </div>

                        </div>
                        <div className="r_payment_grid_item">
                        <div className="r_flex_item">
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">Type of Account</p>
                                </div>
                                <hr className='pay_line' />
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">Saving A/C</p>
                                </div>
                            </div>

                        </div>
                        <div className="r_payment_grid_item">
                        <div className="r_flex_item">
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">Account Name</p>
                                </div>
                                <hr className='pay_line' />
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">PSG Centre for Nonformal and Continuing Education</p>
                                </div>
                            </div>

                        </div>
                        <div className="r_payment_grid_item">
                        <div className="r_flex_item">
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">Bank</p>
                                </div>
                                <hr className='pay_line' />
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">Central Bank of India</p>
                                </div>
                            </div>

                        </div>
                        <div className="r_payment_grid_item">
                        <div className="r_flex_item">
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">Branch</p>
                                </div>
                                <hr className='pay_line' />
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">Peelamedu</p>
                                </div>
                            </div>
                        </div>
                        <div className="r_payment_grid_item">
                        <div className="r_flex_item">
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">IFSC</p>
                                </div>
                                <hr className='pay_line' />
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">CBIN0280913</p>
                                </div>
                            </div>
                        </div>
                        <div className="r_payment_grid_item">
                            <div className="r_flex_item">
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">MICR Code</p>
                                </div>
                                <hr className='pay_line' />
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">641016006</p>
                                </div>
                            </div>
                        </div>
                        <div className="r_payment_grid_item">
                            <div className="r_flex_item">
                                <div className="r_inside_item r_one">
                                    <p className='r_p_one'>Bank Branch Address</p>
                                </div>
                                <hr className='pay_line' />
                                <div className="r_inside_item r_one">
                                    <p className="r_p_one">Peelamedu &#44; Coimbatore&#44; 641004</p>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}
export default Registration
