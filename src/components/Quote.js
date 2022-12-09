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
                            <label htmlFor="email">Email</label>
                            <input type="text" name="" id="" placeholder="Enter email address"/>
                        </div>
                        <div className="select">
                            <label htmlFor="">Mode of Shipment</label>
                            <select name="" id="">
                                <option value="">Select mode</option>
                            </select>
                        </div>
                        <div className="shipment-input">
                            <label htmlFor="email">Shipment Origin</label>
                            <input type="text" name="" id="" placeholder="Search location"/>
                        </div>
                        <div className="date-input">
                            <label htmlFor="email">Pickup Date</label>
                            <input type="text" name="" id="" placeholder="Select date"/>
                        </div>
                    </div>
                    <div className="right-form">
                        <div className="mobile-input">
                            <label htmlFor="email">Mobile</label>
                            <select name="" id="">
                                <option value="">+234</option>
                            </select>
                            <div className="margin"></div>
                            <input type="text" name="" id="" placeholder="Mobile"/>
                        </div>
                        <div className="select">
                            <label htmlFor="">How do  you want to Ship?</label>
                            <select name="" id="">
                                <option value="">Select service type</option>
                            </select>
                        </div>
                        <div className="shipment-input">
                            <label htmlFor="email">Shipment Destination</label>
                            <input type="text" name="" id="" placeholder="Search location"/>
                        </div>
                        <div className="select">
                            <label htmlFor="">What are you Shipping?</label>
                            <select name="" id="">
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
