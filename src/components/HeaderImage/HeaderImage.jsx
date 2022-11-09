import React ,{useEffect} from 'react'
import img5 from './../../assests/IMGS/vila5.jpg'

function HeaderImage() {
    const doc = document.getElementsByClassName('Navigation__wraperr')
    const navEl = React.useRef(doc)
    const targetRef = React.useRef(null)

    const callBackFUnction = entires => {
        const [entry] = entires
        if (entry.isIntersecting) {
            navEl.current[0].classList.remove('active-header')
        }
        else {
            navEl.current[0].classList.add('active-header')
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
    <div>
       <div className="app__productOverview__header" ref={targetRef}>
                <div className="app__productOverview__header__image">
                    <img src={img5} alt="overview img" />
                </div>
            </div>
    </div>
  )
}

export default HeaderImage
