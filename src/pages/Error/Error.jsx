import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, HeaderImage } from '../../components'
import Navigation from '../Navigation/Navigation'

const Error = () => {
    return (
        <>
            <Navigation />
            <HeaderImage />
            <div className='Error'>
                <div className='Error__container'>
                    <h1>The page is not available</h1>
                    <Link to='/'>Home Page</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Error
