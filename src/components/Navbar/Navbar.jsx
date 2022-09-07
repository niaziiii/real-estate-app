import React from 'react'
import  {GiHamburgerMenu} from 'react-icons/gi'
import { navObj ,genLists} from './nav'

function Navbar() {
    return (
        <div className='Navigation__container'>
            <div className="Navigation__logo">
                <h1>Sky Liner</h1>
            </div>
            <div className="Navigation__content">

                <ul className='main-nav-row'>
                    {navObj.main.map((el,i) => genLists(el))}
                    
                    <button className='hamBurgerToggle'>
                      <GiHamburgerMenu fontSize={35}/>
                      </button>
                </ul>
                
                <ul className='Special-navbar'>
                  {navObj.ordainay.map((el,i) => genLists(el))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
