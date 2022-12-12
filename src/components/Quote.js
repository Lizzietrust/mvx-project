import happyMan from "../mvx images/happy-joyous-man.png"

const Quote = () => {
  return (
    <div className='quote'>
        <div className="quote-main">
            <h6>For Businesses</h6>
            <h4>
                Check out how MVX can help you boost your business. Request an instant quote
            </h4>
            <form action="">
                <h5>Quote Details</h5>
                <div className="form-wrap">
                    <div className="left-form">
                        <div className="email-input">
                            <label>Email</label>
                            <input type="text" name="" id="" placeholder="Enter email address" className="input"/>
                        </div>
                        <div className="select">
                            <label>Mode of Shipment</label>
                            <select name="" id="" className="sel">
                                <option value="">Select mode</option>
                            </select>
                        </div>
                        <div className="shipment-input">
                            <label>Shipment Origin</label>
                            <input type="text" name="" id="" placeholder="Search location" className="input"/>
                        </div>
                        <div className="date-input">
                            <label>Pickup Date</label>
                            <input type="text" name="" id="" placeholder="Select date" className="input"/>
                        </div>
                    </div>
                    <div className="right-form">
                        <div className="mobile-input">
                            <label>Mobile</label>
                            <div className="mob-form">
                                <select name="" id="">
                                    <option value="">+234</option>
                                </select>
                                <input type="text" name="" id="" placeholder="Mobile"/>
                            </div>
                        </div>
                        <div className="select">
                            <label>How do  you want to Ship?</label>
                            <select name="" id="" className="sel">
                                <option value="">Select service type</option>
                            </select>
                        </div>
                        <div className="shipment-input">
                            <label>Shipment Destination</label>
                            <input type="text" name="" id="" placeholder="Search location" className="input"/>
                        </div>
                        <div className="select">
                            <label>What are you Shipping?</label>
                            <select name="" id="" className="sel">
                                <option value="">Select type of goods</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="btn-quote">
                    <button className="generate">Generate Quote</button>
                </div>
            </form>
        </div>
        <img src={happyMan} alt="" srcset=""  className="happyman"/>
    </div>
  )
}

export default Quote
