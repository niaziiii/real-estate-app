import React from 'react'
import './style.css'
const LoadingAnimation = () => {
    return (
        <div className='loader-container'>
            <div className="loader">
                <span className="loader__element"></span>
                <span className="loader__element"></span>
                <span className="loader__element"></span>
            </div>
        </div>
    )
}

export default LoadingAnimation
