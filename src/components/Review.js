import dutch from "../mvx images/big-dutchman.png"
import leftIcon from "../mvx images/icon-left.png"
import rightIcon from "../mvx images/icon-right.png"

const Review = () => {
  return (
    <div className='review'>
        <h4>600+ Companies Served</h4>
        <p className="review-text">
            We do our job so well that over 80% of our customers have shipped with us 
            multiple times. Here's what some of our customers say about us.
        </p>
        <div className="review-card">
            <div className="review-img">
                <img src={dutch} alt="" srcset="" />
            </div>
            <p className="review-cardtext">
                 We are highly impressed with MVX services, their relationship managers are extremely 
                 reliable and always available to assist with our shipment. We would recommend MVX anytime.
            </p>
            <div className="info-slide">
                <div className="info">
                    <div className="name-abbr">BD</div>
                    <div className="desc">
                        <p>Big Dutchman</p>
                        <span>Ikeja, Lagos, Nigeria</span>
                    </div>
                </div>
                <div className="slide-icons">
                    <img src={leftIcon} alt="" srcset="" className="left-icon"/>
                    <img src={rightIcon} alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review
