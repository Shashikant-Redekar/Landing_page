import homePic from '../../name_and_logo/2024-05-12.jpg';
import '../../Styling/home.scss'

const Home = function() {
    return(
        <div className='homeb'>
            <div>
                <img src={homePic} className='homePic'/>
            </div>
            <div className='tag'>
                <p className='tagi'>🌿 शुद्ध शाकाहारी स्वाद 🌿</p>
                <p className='tagi'>ताजे, पौष्टिक आणि रुचकर </p>
                <p className='tagi'>आमचं प्रेम, तुमच्या ताटात 🍽️</p>
                <a href='tel:+91 8526371111'><button className='bres'>Reserve a Table</button></a>
            </div>
        </div>
    )
} 

export default Home;