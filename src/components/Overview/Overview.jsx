import React from 'react'
import { useEffect } from 'react';
import {
    OverViewDir, OverViewLeftHeading,
    OverviewAgent, OverViewAmenities
} from './overviewModule';
import img5 from './../../assests/IMGS/vila5.jpg'


function Overview() {
    const doc = document.getElementsByClassName('Navigation__wraperr')
    const navEl = React.useRef(doc)
    const targetRef = React.useRef(null)

    const callBackFUnction = entires => {
        const [entry] = entires
        if (entry.isIntersecting) {
            navEl.current[0].style.background = 'transparent'
        }
        else {
            navEl.current[0].style.background = '#1480bd'
        }
    }

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '10px',
            threshold: .5
        }
        const observer = new IntersectionObserver(callBackFUnction, option);
        const currentTarget = targetRef.current
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        }
        // eslint-disable-next-line 
    }, [targetRef])

    return (
        <div className='app__productOverview' >

            <div className="app__productOverview__header" ref={targetRef}>
                <div className="app__productOverview__header__image">
                    <img src={img5} alt="overview img" />
                </div>
            </div>
            <OverViewDir />

            <div className="app__productOverview__content">

                <div className="app__productOverview__content__left">
                    <OverViewLeftHeading />
                </div>

                <div className="app__productOverview__content__right">
                    <OverviewAgent />
                    <OverViewAmenities />
                    <div className="app__productOverview__content__right__button">
                        <button>Book a viewing</button>
                        <button>view brochure</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Overview
