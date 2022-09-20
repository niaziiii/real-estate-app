import React from 'react'

import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom';

const navObj = {
    main: [

        {
            text: '+923083909131',
            ref: 'tel:+923083909131',
            icon: <FiPhoneCall />
        },
        {
            text: 'muhabat@niazi.com',
            ref: 'mailto:muhabatkhan03@gmail.com',
            icon: <AiOutlineMail />
        },
    ],
    ordainay: [
        {
            text: 'Buy',
            ref: '/properties',
            query: 'type=sale',
        },
        {
            text: 'Rent',
            ref: '/properties',
            query: 'type=rent'
        },
        {
            isOpen: false,
            toggle: true,
            text: 'Sell',
            ref: '/',
            links: [
                {
                    ref: '/contact',
                    text: 'List Your Property'
                }, {
                    ref: '/contact',
                    text: 'Book A Valuation'
                }
            ]
        },
        {
            text: 'About us',
            ref: '/contact'
        },
        {
            text: 'Contact us',
            ref: '/contact'
        }
    ]
}


const genLists = (obj) => {
    return (
        <li key={obj.text}>
            <a href={obj.ref}>
                {obj.icon ? obj.icon : ''}
                <p>{obj.text}</p>
            </a>
        </li>
    )
}


const GenListsMain = ({ obj }) => {
    const navigate = useNavigate()


    if (obj.query) {
        return (
            <li key={obj.text} onClick={() =>  {
              return  navigate('/properties', {state: obj.query})
            }}>

                <h3 >
                    {obj.icon ? obj.icon : ''}
                    <p>{obj.text}</p>
                </h3>
            </li>
        )
    }

    return (
        <li key={obj.text}>

            <Link to={obj.ref}>
                {obj.icon ? obj.icon : ''}
                <p>{obj.text}</p>
            </Link>
        </li>
    )
}



const MobGenLists = ({ obj, i }) => {
    const [openAccordion, setOpenAccordion] = React.useState(obj.isOpen)
    const navigate = useNavigate()
    
    if (obj.toggle) {
        return (
            <li onClick={() => setOpenAccordion(!openAccordion)}>
                <h3>
                    <p>{obj.text}</p>
                    {
                        openAccordion ? <VscChevronUp /> : <VscChevronDown />
                    }
                </h3>
                {
                    openAccordion ?
                        <div>
                            {obj.links.map(el => <Link to={el.ref} key={el.text} >{el.text} </Link>)}
                        </div>
                        : ''
                }
            </li>
        )
    } else if(obj.query) {
        return (
            <li onClick={() =>  {
               return navigate('/properties', {state: obj.query})
            }}>
                <h3>
                    <p>{obj.text}</p>
                </h3>
            </li>
        )
    }
    else {
        return (
            <li >
                <Link to='/contact'>
                    <p>{obj.text}</p>
                </Link>
            </li>
        )
    }

}

export {
    navObj,
    genLists,
    GenListsMain,
    MobGenLists
}