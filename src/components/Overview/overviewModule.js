import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaBed, FaBath, FaLocationArrow } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Slider from "react-slick";



import img1 from './../../assests/IMGS/vila1.jpg'
import img2 from './../../assests/IMGS/vila2.jpg'
import img3 from './../../assests/IMGS/vila3.jpg'
import img4 from './../../assests/IMGS/vila4.jpg'
import img5 from './../../assests/IMGS/vila5.jpg'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [img1,img2,img3,img4,img5];


const OverviewSlider = () =>{
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


const headIcons = () =>{
    return( <div className="app__productOverview__content__left__heading__icons">
    <span>
        <AiOutlineAreaChart />
        <h3>
            <p>Area</p>
            <b>799.00 SQ.FT.</b>
        </h3>
    </span>
    <span>
        <FaBed />
        <h3>
            <p>BEDS</p>
            <b>7</b>
        </h3>
    </span>
    <span>
        <FaBath />
        <h3>
            <p>Baths</p>
            <b>79</b>
        </h3>
    </span>
</div>)
}

const OverViewLeftHeading = () => {
    return (
        <div className="app__productOverview__content__left__heading">
            <div className="app__productOverview__content__left__heading__types">
                <h3>Sale</h3>
                <h3>Apartment</h3>
                <h3>Total Price 12,342,434</h3>
            </div>
            <h2>Furnished|Meydan|Great Location|Gated Community</h2>
            <span> <FaLocationArrow /><b>abu, Dubai</b></span>
           {headIcons()}
           <OverviewSlider/>

            <p className='description'>MAG City Meydan an urban district with desirable homes and community living, with its abundance of green spaces, walkways and parks. While living in the tranquility of a suburban lifestyle, inner-city life is only heartbeats away, with magnificent views of an unobstructed Dubai skyline.The location of the project is one of its key advantages. This exceptional gated community is in the heart of Mohammed bin Rachid City, District 7. Only a few minutes from Downtown and Burj Khalifa, 15 minutes from the well- known beaches of Jumeirah and 20 minutes to the airport.MAG City will offer its residents the finest in sporting and wellness. The blue skies and large open green spaces support a vibrant and healthy lifestyle, with dedicated sports facilities, gyms and semi-Olympic size swimming pools, running tracks and more. Horse riding, cycling are just a few of the activities in the vicinity along with the largest health club in Dubai.</p>
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

const OverViewAmenities = () => {
    return (
        <div className="app__productOverview__content__right__amenities">
            <h3>Amenities</h3>
            <div>
                {[1, 2, 3, 4, 5, 6, 7, 6, 6, 6].map((el, i) => {
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