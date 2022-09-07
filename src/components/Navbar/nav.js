import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import  {GoChecklist} from 'react-icons/go'
import  {BiSearch} from 'react-icons/bi'

const navObj = {
    main:[
        {
        text:'+923083909131',
        ref:'/',
        icon: <FiPhoneCall/>
    },
    {
        text:'muhabatkhan03@gmail.com',
        ref:'/',
        icon: <AiOutlineMail/>
    },
    {
        text:'List Your Property',
        ref:'/',
        icon: <GoChecklist/>
    },
    {
        text:'Search',
        ref:'/',
        icon: <BiSearch/>
    }
],
    ordainay:[
        {
            text:'Buy',
            ref:'/'
        },
        {
            text:'Rent',
            ref:'/'
        },
        {
            text:'Sell',
            ref:'/'
        },
        {
            text:'Service',
            ref:'/'
        },
        {
            text:'About us',
            ref:'/'
        },
        {
            text:'Contact us',
            ref:'/'
        }
    ]
}


const genLists = (obj) => {
    return(
        <li key={obj.text}>
        <a href={obj.ref}>
            {obj.icon? obj.icon : ''}
            <p>{obj.text}</p>
        </a>
    </li>
    )
}

export {
    navObj,
    genLists
}