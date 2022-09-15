import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaBed, FaBath, FaLocationArrow } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const OverviewSlider = ({images}) =>{
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }


    return(
        <div className='overview-slider'>
        <Slider {...settings}>
            {images.map((el,i) =>{
                return(
                    <div className='overview-slider__container' key={i}>
                        <img src={el} alt={i}/>
                    </div>
                )
            })}
        </Slider>
        </div>
    )
}
const OverViewDir = () => {
    return (<div className="app__productOverview__dir">
        <h3> <Link to="/">Home</Link></h3>
        <h3> <IoIosArrowForward /></h3>
        <h3> <Link to="/">Sale</Link></h3>
        <h3> <IoIosArrowForward /></h3>
        <h3> <Link to="/">Apartment</Link></h3>
        <h3> <IoIosArrowForward /></h3>
    </div>)
}


const headIcons = (area,beds,bathrooms) =>{
    return( <div className="app__productOverview__content__left__heading__icons">
    <span>
        <AiOutlineAreaChart />
        <h3>
            <p>Area</p>
            <b>{area}</b>
        </h3>
    </span>
    <span>
        <FaBed />
        <h3>
            <p>BEDS</p>
            <b>{beds}</b>
        </h3>
    </span>
    <span>
        <FaBath />
        <h3>
            <p>Baths</p>
            <b>{bathrooms}</b>
        </h3>
    </span>
</div>)
}

const OverViewLeftHeading = ({data}) => {
    return (
        <div className="app__productOverview__content__left__heading">
            <div className="app__productOverview__content__left__heading__types">
                <h3>{data.type}</h3>
                <h3>{data.category}</h3>
                <h3>Total Price {data.price}</h3>
            </div>
            <h2>{data.nameProperty}</h2>
            <span> <FaLocationArrow /><b>{data.location}</b></span>
           {headIcons(data.area,data.beds,data.bathrooms)}
           <OverviewSlider images={data.coverImages}/>

            <p className='description'>{data.description? data.description: ""}</p>
        </div>

    )
}

const OverviewAgent = () => {
    return (
        <div className="app__productOverview__content__right__agent">
            <b>Agent Detail</b>
            <h2>Jai Chatrani</h2>

            <div>
                <a href="/+343"><span><FiPhoneCall /><p>Call Now</p></span></a>
                <a href="/+343"><span><AiOutlineMail /><p>Mail</p></span></a>
                <a href="/+343"><span><BsWhatsapp /><p>Whatsapp</p></span></a>
            </div>
            <span><p>Reference:</p> <b>SLR-S-2273</b></span>
        </div>
    )
}

const OverViewAmenities = ({data}) => {
    return (
        <div className="app__productOverview__content__right__amenities">
            <h3>Amenities</h3>
            <div>
                {data.map((el, i) => {
                    return (
                        <span key={i}> <IoIosArrowForward /> <p>Balcony</p></span>
                    )
                })}
            </div>
        </div>
    )
}
export {
    OverViewDir,
    OverViewLeftHeading,
    OverviewAgent,
    OverViewAmenities
}