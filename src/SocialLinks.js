import Github from './images/Socialicon.png'
import Slack from './images/Slack.png'




const SocialLinks = () => {
    return ( 

        <div className="socialLinks">

            <div className="socialLink1">
                <img src={Slack} alt="slack link" />
            </div>

            <div className="socialLink2">
                <img src={Github} alt="github link" />
            </div>
        </div>
     );
}
 
export default SocialLinks;