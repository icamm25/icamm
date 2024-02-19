
import React from 'react'
import "./css/registration.css"
function Registration() {
    const items = Array.from({ length: 20 });
    const items2 = Array.from({ length: 12 })
    return (
        <div className='registration_page'>
            <div className="reg_container">
                <h1 className='pay_title'>Registration</h1>
                <div className="registration_fees">
                    <h2 className='pay_fees'>Registration fees</h2>
                    <div className="r_head">
                        <div className="r_box">
                            <p className='reg_title'>S.No</p>
                        </div>
                        <div className="r_box ">
                            <p className='reg_title'>Option</p>
                            <div className="r_symbol_box"></div>
                        </div>
                        <div className="r_box ">
                            <p className='reg_title'>Nationals</p>
                            <div className="r_symbol_box"></div>
                        </div>
                        <div className="r_box">
                            <p className='reg_title'>Foreign authors</p>
                            <div className="r_symbol_box"></div>
                        </div>
                    </div>
                    <div className="r_grid-container">
                        {items.map((item, index) => (
                            <div key={index} className="r_grid-item">{item}</div>
                        ))}
                    </div>

                </div>
                <div className="payment_details">
                    <h2 className='pay_detail'>Payment Details</h2>
                    <div className="r_payment_head">
                        <div className="r_box r">
                            <p className='reg_title'></p>
                            <div className="r_head_symbol_box"></div>
                        </div>
                        <div className="r_box r_national">
                            <p className='reg_title'></p>
                            <div className="r_head_symbol_box"></div>
                        </div>
                    </div>
                    <div className="r_payment_grid_container">
                            {items2.map((item, index) => (
                                <div key={index} className="r_payment_grid_item">{item}
                                </div>
                            ))}
                        </div>

                </div>
            </div>

        </div>
    )
}

export default Registration