import ship from "../mvx images/ship.png"
import stears from "../mvx images/stears.png"
import slideLeft from "../mvx images/slide-left.png"
import slideRight from "../mvx images/slide-right.png"

const News = () => {
  return (
    <div className='news'>
      <div className="news-main">
        <h6 className="news-head">News</h6>
        <h4>MVX in the News</h4>
        <div className="ship">
            <img src={ship} alt="" srcset="" className="ship-img"/>
            <div className="ship-main">
                <img src={stears} alt="" srcset="" />
                <h6>Nigeria’s “Uber for Ships” pivots, bets on international trade</h6>
                <p>Why MVX pivoted from “Uber for Ships” and embraced global trade.</p>
                <button className="read">Read More...</button>
            </div>
        </div>
      </div>
      <div className="ship-slide">
          <img src={slideLeft} alt="" srcset="" className="slide-left"/>
          <img src={slideRight} alt="" srcset="" />
      </div>
    </div>
  )
}

export default News
