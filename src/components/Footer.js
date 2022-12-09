import footerLogo from "../mvx images/footer-logo.png"
import facebook from "../mvx images/facebook.png"
import instagram from "../mvx images/instagram.png"
import linkedin from "../mvx images/linkedin.png"
import mail from "../mvx images/mail.png"
import twitter from "../mvx images/twitter.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-topmain">
                <h4>Ready to Unlock Supply Chain Opportunities?</h4>
                <p>Join 300+ top brands that have trusted us with their freight forwarding</p>
            </div>
            <button className="start">Get started</button>
        </div>
        <div className="footer-mid">
            <div className="footer-midleft">
                <div className="footer-about">
                    <div className="footerlogo-img">
                        <img src={footerLogo} alt="" />
                    </div>
                    <div className="footer-contact">
                        <span className="contact left">T: +2347040119703</span>
                        <span className="contact">E: hello@mvx.trade</span>
                    </div>
                </div>
                <div className="footer-add austin">
                    <h6>Austin:</h6>
                    <div className="footer-address">
                        <span>7000 North Mopac Expressway,</span>
                        <span>Austin, TX, 78731</span>
                        <span>T: +1 512 514 622</span>
                    </div>
                </div>
                <div className="footer-add lagos">
                    <h6>Lagos:</h6>
                    <div className="footer-address">
                        <span>19 Dr. S Ezekuse Close,</span>
                        <span>Lekki Phase 1, Lagos</span>
                    </div>
                </div>
            </div>
            <div className="footer-midright">
                <div className="footer-info">
                    <div className="footer-infoitem">
                        <p>Home</p>
                        <ul className="info-item">
                            <li>Home</li>
                            <li>About</li>
                            <li>Partners</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="footer-infoitem infoitem-end">
                        <p>Services</p>
                        <ul className="info-item">
                            <li>Freight Forwarding</li>
                            <li>Customs</li>
                            <li>Freight Finance</li>
                            <li>Land Haulage</li>
                            <li>Track Shipment</li>
                        </ul>
                    </div>
                    <div className="footer-infoitem">
                        <p>Resources</p>
                        <ul className="info-item">
                            <li>Help & Support</li>
                            <li>Feedback</li>
                            <li>Referral</li>
                        </ul>
                    </div>
                    <div className="footer-infoitem infoitem-end">
                        <p>Legal</p>
                        <ul className="info-item">
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Terms & Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <span>© MVX Incorporated</span>
            <div className="footer-icons">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={mail} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer
