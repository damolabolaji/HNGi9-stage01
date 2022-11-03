import Profilepic from './images/Profilepic.jpg'
import Camera from './images/camera.png'



const Header = () => {
    return ( 

        <div className="header">
            <div className="profilepic">
                <img src={Profilepic} alt="profile image" id="profile__img" />
                <div className="overlay">
                    <img src={Camera} alt="camera icon" />
                </div>
               
                
            </div>

            <h3 id="twitter">bolaji_damola</h3>
            <h3 id="slack">damolabolaji</h3>
        </div>
     );
}
 
export default Header;