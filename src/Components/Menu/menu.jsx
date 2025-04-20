import kashmiri from '../../name_and_logo/Kashmiri_pulav.jpg'
import paneer from '../../name_and_logo/Paneer_lasuni_kofta.jpg'
import dosa from '../../name_and_logo/Sukoon_sagar_special_dosa.jpg'
import dal from '../../name_and_logo/dal_khichadi.jpg'
import pdfAC from '../../name_and_logo/SukunSagar_AC_Menu.pdf'
import '../../Styling/menu.scss'

const Menu = function() {
    return(
        <div>
            <h1>Menu</h1>
            <div className='menuside'>
                <div className='menud'>
                    <img src={kashmiri} className='dish'/>
                    <div>
                        <h3>Kashmiri Pulav</h3>
                    </div>
                </div>
                <div className='menud'>
                    <img src={paneer} className='dish'/>
                    <div>
                        <h3>Paneer Lasuni Kofta</h3>
                    </div> 
                </div>
            </div>
            <div className='menuside'>
                <div className='menud'>
                    <img src={dosa} className='dish'/>
                    <div>
                        <h3>Sukoon Sagar Special Dosa</h3>
                    </div>
                </div>
                <div  className='menud'>
                    <img src={dal} className='dish'/>
                    <div>
                        <h3>Dal Khichadi</h3>
                    </div>
                </div>
            </div>
            <div>
                <h3>Full Menu in the below link</h3>
                <a href={pdfAC} download={"Sukoon Sagar AC"} className='d'>Menu for Sukoon Sagar(AC)</a>
            </div>
        </div>
    )
}

export default Menu;