import homePic from '../../name_and_logo/2024-05-12.jpg';
import '../../Styling/home.scss'

const Home = function() {
    return(
        <div className='homeb'>
            <div>
                <img src={homePic} className='homePic'/>
            </div>
            <div className='tag'>
                <p>🌿 शुद्ध शाकाहारी स्वाद 🌿</p>
                <p>ताजे, पौष्टिक आणि रुचकर 🌱</p>
                <p>आमचं प्रेम, तुमच्या ताटात 🍽️</p>
                <button>Reserve a Table</button>
            </div>
        </div>
    )
}

export default Home;