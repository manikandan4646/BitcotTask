import facebook from '../../assets/icons/facebook-white.svg'
import instagram from '../../assets/icons/instagram-white.svg'
import twitter from '../../assets/icons/twitter-white.svg'
import appStore from '../../assets/images/app-store.svg'
import playStore from '../../assets/images/play-store.svg'
import windowsStore from '../../assets/images/windows-store.svg'

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="quick-links">
                <div>Home <span>|</span> Terms and Conditions <span>|</span> Privacy Policy <span>|</span> Collection Statement <span>|</span> Help</div>
                <div className="copyright">Copyright @ 2016 DEMO Streaming. All Rights Reserved.</div>
                <div className="footer-bottom">
                    <div className="social-icons">
                        <img className='footer-icon' src={facebook} alt="" />
                        <img className='footer-icon' src={instagram} alt="" />
                        <img className='footer-icon' src={twitter} alt="" />
                    </div>
                    <div>
                        <img className='footer-store-img' src={appStore} alt="" />
                        <img className='footer-store-img' style={{marginRight: '5px'}} src={playStore} alt="" />
                        <img className='footer-microsoft' src={windowsStore} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;