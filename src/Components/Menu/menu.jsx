import kashmiri from '../../name_and_logo/Kashmiri_pulav.jpg'
import paneer from '../../name_and_logo/Paneer_lasuni_kofta.jpg'
import dosa from '../../name_and_logo/Sukoon_sagar_special_dosa.jpg'
import dal from '../../name_and_logo/dal_khichadi.jpg'
import left from '../../name_and_logo/left.png'
import right from '../../name_and_logo/right.png'
import pdfAC from '../../name_and_logo/SukunSagar_AC_Menu.pdf'
import { useState } from 'react'
import '../../Styling/menu.scss'

const Menu = function() {
    const imgs = [kashmiri,paneer,dosa,dal];
    const dname = ["Kashmiri Pulav","Paneer Lasuni Kofta","Sukoon Sagar Special Dosa","Dal Khichadi"]
    let [showImg, setShowImg] = useState(0);

    const handleMoveLeft = () => {
        if(showImg === 0){
            setShowImg(imgs.length -1);
        }else{
            setShowImg(showImg - 1)
        }
    }

    const handleMoveRight = () => {
        if(showImg === (imgs.length -1)){
            setShowImg(0);
        }else{
            setShowImg(showImg + 1)
        }
    }

    return(
        <div className='mainm'>
            <h1 className='menuh'>Menu</h1>
            <div className='menupic'>
                <div>
                    <img src={left} className='scrollb' onClick={() => handleMoveLeft()}/>
                </div>
                <div className='imgd'>
                    <img src={imgs[showImg]} className='imag'/>
                    <p className='dname'>{dname[showImg]}</p>
                </div>
                <div>
                    <img src={right} className='scrollb' onClick={() => handleMoveRight()}/>
                </div>
            </div>
            <div>
                <h3 className='fmenu'>Download Menu From Below Links</h3>
                <a href={pdfAC} download={"Sukoon Sagar AC Menu"}>AC Menu</a>
            </div>
        </div>
    )
}

export default Menu;