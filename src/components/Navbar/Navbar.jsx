import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";
import { navObj, genLists ,MobGenLists} from './nav'

function Navbar() {
    const [showNav, setShowNav] = React.useState(false)
    return (
        <div className='Navigation__container'>
            <div className="Navigation__logo">
                <h1>Sky Liner</h1>
            </div>
            <div className="Navigation__content">

                <ul className='main-nav-row'>
                    {navObj.main.map((el, i) => genLists(el))}

                    <button className='hamBurgerToggle' onClick={() => setShowNav(true)}>
                        <GiHamburgerMenu fontSize={35} />
                    </button>
                </ul>

                <ul className='Special-navbar'>
                    {navObj.ordainay.map((el, i) => genLists(el))}
                </ul>

                {
                    showNav ?
                        <div className="mobile-nav slide-left">
                            <button onClick={() => setShowNav(false)}><IoMdClose /></button>
                            <ul>
                                <h1>Sky Liner</h1>
                                {navObj.ordainay.map((el, i) => <MobGenLists obj={el} i={i} key={i}/>)}
                            </ul>
                        </div>
                        : ''
                }
            </div>
        </div>
    )
}

export default Navbar
