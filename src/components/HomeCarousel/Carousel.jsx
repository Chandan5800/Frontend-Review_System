import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { carouselData } from './CarouselData';
// import Base from '../Base';

const HomeCarousel = () => {

    const items = carouselData.map((item) => <img className='w-full h-[650px] cursor-pointer' role='presentation' src={item.image} alt='' />)

    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                animationDuration={3000}
                infinite
            />
        </div>
    )
}
export default HomeCarousel