import React from 'react'
import {
    OverViewDir, OverViewLeftHeading,
    OverviewAgent, OverViewAmenities
} from './overviewModule';
import Product from '../Product/Product'


function Overview(props) {
    const data = props.property.result;
    const others = props.property.others;

    return (
        <div className='app__productOverview' >
            <OverViewDir data={data} />

            <div className="app__productOverview__content">
                <div className="app__productOverview__content__left">
                    <OverViewLeftHeading data={data} />
                </div>

                <div className="app__productOverview__content__right">
                    <OverviewAgent data={data} />
                    {data.amenities ? <OverViewAmenities data={data.amenities} /> : ''}

                    <div className="app__productOverview__content__right__button">
                        <button>Book a viewing</button>
                        <button>view brochure</button>
                    </div>

                </div>
            </div>

            <div className="app__productOverview__products">
                {others.map((el, i) => {
                    return (<div className='app__productOverview__products__items' key={i}>
                        <Product data={el} />
                    </div>)
                })}
            </div>


        </div>
    )
}

export default Overview
