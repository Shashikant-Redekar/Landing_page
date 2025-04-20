import mail from '../../name_and_logo/email.png';
import call from '../../name_and_logo/phone.png';
import insta from '../../name_and_logo/instagram.png';
import map from '../../name_and_logo/map.png';
import '../../Styling/contacts.scss';

const Contacts = function(){
    return(
        <div>
            <h1>Contact Us</h1>
            <div className='cmil'>
                <div>
                    <img src={call} className='conlog'/>
                    <p>Call us -</p>
                    <p>+91 8526371111</p>
                </div>
                <div>
                    <img src={mail} className='conlog'/>
                    <p>Write us-</p>
                    <p>akshayredekar162@gamil.com</p>
                </div>
                <div>
                    <img src={insta} className='conlog'/>
                    <p>Follow us on Instagram -</p>
                    <p>https://www.instagram.com/hotel.sukoon_sagar</p>
                </div>
                <div>
                    <img src={map} className='conlog'/>
                    <p>Location -</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Contacts