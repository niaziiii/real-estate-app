import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose, IoMdCloseCircleOutline } from "react-icons/io";
import SearchProduct from '../SearchProduct/SearchProduct';
import { navObj, genLists, MobGenLists ,GenListsMain} from './nav'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { GoChecklist } from 'react-icons/go'
import ContactUs from '../ContactUs/ContactUs';

function Navbar() {
    const [showNav, setShowNav] = React.useState(false)
    const [showSearch, setShowSearch] = React.useState(false)
    const [showContact, setShowContact] = React.useState(false)


    const setCloseForm = ()=> setShowContact;
    return (
        <div className='Navigation__container'>
            <div className="Navigation__logo">
                <Link to='/'><h1 style={{ color: 'white' }}>Sky Liner</h1></Link>
            </div>
            <div className="Navigation__content">

                <ul className='main-nav-row'>
                    {navObj.main.map((el, i) => genLists(el))}
                    <li onClick={() =>  setShowContact(true) }>
                        <span className='searchmain'>
                            <GoChecklist />
                            <p>Book Viewing</p>
                        </span>
                    </li>
                    <li onClick={() => setShowSearch(true)}>
                        <span className='searchmain'>
                            <BiSearch />
                            <p>Search</p>
                        </span>
                    </li>


                    <button className='hamBurgerToggle' onClick={() => setShowNav(true)}>
                        <GiHamburgerMenu fontSize={35} />
                    </button>
                </ul>

                <ul className='Special-navbar'>
                    {navObj.ordainay.map((el, i) => <GenListsMain obj={el} key={i}/>)}
                </ul>

                {
                    showNav ?
                        <div className="mobile-nav slide-left">
                            <button onClick={() => setShowNav(false)}><IoMdClose /></button>
                            <ul>
                                <h1>Sky Liner</h1>
                                {navObj.ordainay.map((el, i) => <MobGenLists obj={el} i={i} key={i} />)}
                            </ul>
                        </div>
                        : ''
                }

                {showSearch ?
                    <div className='fixedSearchContainer '>
                        <button onClick={() => setShowSearch(false)}><IoMdCloseCircleOutline /></button>
                        <SearchProduct />
                    </div>
                    : ''}

                {showContact ?
                    <div className='fixedSearchContainer '>
                        <button onClick={() => setShowContact(false)}><IoMdCloseCircleOutline /></button>
                        <ContactUs submited={setCloseForm}/>
                    </div>
                    : ''}
            </div>
        </div>
    )
}

export default Navbar
