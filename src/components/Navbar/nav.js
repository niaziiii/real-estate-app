import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { GoChecklist } from 'react-icons/go'
import { VscChevronDown ,VscChevronUp} from "react-icons/vsc";
import React from 'react'

const navObj = {
    main: [

        {
            text: '+923083909131',
            ref: '/',
            icon: <FiPhoneCall />
        },
        {
            text: 'muhabatkhan03@gmail.com',
            ref: '/',
            icon: <AiOutlineMail />
        },
        {
            text: 'List Your Property',
            ref: '/',
            icon: <GoChecklist />
        },

    ],
    ordainay: [
        {
            isOpen: false,
            toggle: true,
            text: 'Buy',
            ref: '/',
            links : [
                {
                    ref : '/#dd',
                    text : 'Ready Properties'
                },{
                    ref : '/#ff',
                    text : 'Off-Plan'
                }
            ]
        },
        {
            text: 'Rent',
            ref: '/'
        },
        {
            isOpen: false,
            toggle: true,
            text: 'Sell',
            ref: '/',
            links : [
                {
                    ref : '/#dd',
                    text : 'List Your Property'
                },{
                    ref : '/#dd',
                    text : 'Book A Valuation'
                }
            ]
        },
        {
            text: 'Service',
            ref: '/'
        },
        {
            text: 'About us',
            ref: '/'
        },
        {
            text: 'Contact us',
            ref: '/'
        }
    ]
}


const genLists = (obj) => {
    return (
        <li key={obj.text}>
            <a href='#go'>
                {obj.icon ? obj.icon : ''}
                <p>{obj.text}</p>
            </a>
        </li>
    )
}
const MobGenLists = ({ obj, i }) => {
    const [openAccordion, setOpenAccordion] = React.useState(obj.isOpen)
    if (obj.toggle) {
        return (
            <li onClick={()=>setOpenAccordion(!openAccordion)}>
                <a href='#go'>
                    <p>{obj.text}</p>
                    {
                        openAccordion ?  <VscChevronUp/>:<VscChevronDown/> 
                    }
                </a>
                {
                    openAccordion? 
                    <div>
                        {obj.links.map(el => <a href={el.ref} key={el.text} >{el.text} </a>)}
                    </div>
                    : ''
                }
            </li>
        )
    } else {
        return (
            <li >
                <a href='#go'>
                    <p>{obj.text}</p>
                </a>
            </li>
        )
    }

}

export {
    navObj,
    genLists,
    MobGenLists
}