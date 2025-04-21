import mail from '../../name_and_logo/email.png';
import call from '../../name_and_logo/phone.png';
import insta from '../../name_and_logo/instagram.png';
import map from '../../name_and_logo/map.png';
import '../../Styling/contacts.scss';

const Contacts = function(){
    return(
        <div className='contacts'>
            <h1 className='conh'>Contact Us</h1>
            <div className='cmi'>
                <div className='call'>
                    <img src={call} className='conlog'/>
                    <p>Call us -</p>
                    <a href="tel:918526371111" className='num'>+91 8526371111</a>
                </div>
                <div className='mail'>
                    <img src={mail} className='conlog'/>
                    <p>Write us-</p>
                    <a href='mailto:akshayredekar162@gamil.com' className='num'>akshayredekar162@gamil.com</a>
                </div>
                <div className='inst'>
                    <img src={insta} className='conlog'/>
                    <p>Follow us on Instagram -</p>
                    <a href='https://www.instagram.com/hotel.sukoon_sagar' className='num'>https://www.instagram.com/hotel.sukoon_sagar</a>
                </div>
            </div>
            <div className='map'>
                <div className='mapt'>
                    <img src={map} className='conlog'/>
                    <p>Location -</p>
                    <p>Waki, Chakan, Maharashtra 410501</p>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.773019235964!2d73.87083787479905!3d18.808266182342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cb52ca012289%3A0xcd17d022eab589fd!2sSukoon%20Sagar%20Pure%20Veg%20Restaurant!5e0!3m2!1sen!2sin!4v1745150527456!5m2!1sen!2sin" width="250" height="200"  loading="lazy" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacts