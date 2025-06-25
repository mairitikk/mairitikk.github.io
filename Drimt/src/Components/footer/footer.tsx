import footer_logo from '../../assets/logo2.png'
import user_icon from '../../assets/user_icon.svg'
import { Input } from "@/components/ui/input"

const footer = () => {
  return (
    <div className="">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="footer logo" />
                <p>I am an aspiring Full-Stack Developer</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="user icon" />
                    <Input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-bottom"></div>
      <p className="footer-bottom-left">&copy; 2025 Mairi Tikk. All rights reserved.</p>
    </div>
  )
}

export default footer
