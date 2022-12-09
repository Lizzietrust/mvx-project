import freightFinance from '../mvx images/freight-finance.png'
import prevIcon from '../mvx images/tools-prev.png'
import nextIcon from '../mvx images/tools-next.png'

const Tools = () => {
  return (
    <div className="tools">
        <h6>Our Products</h6>
        <h4>
            Tools so powerful, you don't have to stress anymore
        </h4>
        <div className="tools-flex">
            <div className="tools-main">
                <ul className="tools-list">
                    <li className="tools-listitem intuitive">Intuitive Dashboard</li>
                    <li className="tools-listitem next">Partner Management Application</li>
                    <li className="tools-listitem next">Tania by MVX</li>
                </ul>
                <p>
                    Our simple, powerful & intuitive dashboard helps businesses digitize, track and automate 
                    their freight management and trade finance processes.
                </p>
            </div>
            <img src={freightFinance} alt="" srcset="" />
        </div>
        <div className="tools-slide">
            <img src={prevIcon} alt="" srcset="" className='prevIcon'/>
            <img src={nextIcon} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Tools
