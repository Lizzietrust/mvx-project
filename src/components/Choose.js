import background from '../mvx images/bgchoose.png'
import bell from '../mvx images/mvx-bell.png'
import increaseRevenue from '../mvx images/increase.png'
import increasePurchase from '../mvx images/increase-purchase.png'

const Choose = () => {
  return (
    <div className='choose'>
        <div className="choose-flex">
            <div className="left">
                <h4>Here's why 600+ Companies Choose MVX</h4>
                <div className="line"></div>
                <div className="choose-list">
                    <div className="choose-listitem">
                        <div className="number">01</div>
                        <div className="text">
                            <h6>Access to global network</h6>
                            <p>
                                Our partnership with World Cargo Alliance (WCA) eliminates the headache of 
                                global shipping for businesses.
                            </p>
                        </div>
                    </div>
                    <div className="choose-listitem end">
                        <div className="number">02</div>
                        <div className="text">
                            <h6>Affordable freight shipping cost</h6>
                            <p>
                                Businesses that ship freight using MVX save up to 20%. In fact, when you book a 
                                shipment, you get flexible freight forwarding rates in Realtime.
                            </p>
                        </div>
                    </div>
                    <div className="choose-listitem">
                        <div className="number">03</div>
                        <div className="text">
                            <h6>Technology you can use</h6>
                            <p>
                                Our solutions are tailor made for your business needs. Book, track and collaborate
                                from any device at your convenience.
                            </p>
                        </div>
                    </div>
                    <div className="choose-listitem end">
                        <div className="number">04</div>
                        <div className="text">
                            <h6>Superior customer experience</h6>
                            <p className='last-choosetext'>
                                70% of our customers say the most remarkable feature about our service is the 
                                experience. Our team is dedicated and ready to go the extra mile until your cargo 
                                has been safely delivered.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={background} alt="" className='right-img'/>
                <div className="choose-card bell">
                    <div className="choose-cardimg">
                        <img src={bell} alt="" srcset="" />
                    </div>
                    <p>Shipment <span>MVXT003</span>  Delivered</p>
                </div>
                <div className="choose-card revenue">
                    <div className="choose-cardimg">
                        <img src={increaseRevenue} alt="" srcset="" />
                    </div>
                    <p>20% Revenue increase after shipment <span>MXVT003's</span>  delivery</p>
                </div>
                <div className="choose-card purchase">
                    <div className="choose-cardimg">
                        <img src={increasePurchase} alt="" srcset="" />
                    </div>
                    <p>20% increase in procurement purchase Month-on-Month</p>
                </div>
            </div>
        </div>
        <div className="btn-cargo">
            <button className="choose-cargo">Move your Cargo</button>
        </div>
    </div>
  )
}

export default Choose
