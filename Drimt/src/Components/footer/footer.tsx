import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon'
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
                    <Input type="email" placeholder="Email" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default footer
