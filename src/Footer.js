import ZuriLogo from './images/Zurilogo.svg'
import I4GLogo from './images/I4G.png'



const Footer = () => {
    return ( 

        <div className="footer">
            
                <img src={ZuriLogo} alt="Zuri Internship logo" className="zuri"/>
                <h6>HNG Internship 9 Frontend Task</h6>
                <img src={I4GLogo} alt="ingressive for good logo" className="ingressive"/>
           
           
        </div>

     );
}
 
export default Footer;