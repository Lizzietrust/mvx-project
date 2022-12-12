import React from 'react'
import forwarding from '../mvx images/forwarding.png'
import haulage from '../mvx images/haulage.png'
import financing from '../mvx images/financing.png'
import clearance from '../mvx images/clearance.png'



const Services = () => {
  return (
    <div className='services'>
        <h6>Our Services</h6>
        <h4>We are your all-in-one platform <span> powering </span> 
            cross-border trade
        </h4>
        <div className="services-box">
            <div className="box forwarding">
                <div className="box-img">
                    <img src={forwarding} alt="" />
                </div>
                <h5>Freight Forwarding</h5>
                <p>
                    With a blend of supportive experts, quality freights forwarders and easy to use
                     technology MVX makes the shipping process easy and transparent.
                </p>
                <button className="explore">Explore More</button>
            </div>
            <div className="box">
                <div className="box-img">
                    <img src={haulage} alt="" />
                </div>
                <h5>Haulage</h5>
                <p>
                    MVX offers you a convienience haulage with the quickest response time at the most
                     affordable cost. Our network of partners is spread along the continent, ready to
                      move your goods
                </p>
                <button className="explore">Explore More</button>
            </div>
            <div className="box box-finance">
                <div className="box-img">
                    <img src={financing} alt="" />
                </div>
                <h5>Freight Financing</h5>
                <p>
                    No upfront fees and minimal paperwork, means you get funding for your business fast. 
                    MVX gives you access to purchase order financing, freight financing and import financing
                </p>
                <button className="explore">Explore More</button>
            </div>
            <div className="box">
                <div className="box-img">
                    <img src={clearance} alt="" />
                </div>
                <h5>Customs Clearance</h5>
                <p>
                    Access to a transparent clearance process and an expert team means your goods can 
                    spend the least possible time at the port. MVX makes cargo clearance a breeze for you.
                </p>
                <button className="explore">Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default Services
