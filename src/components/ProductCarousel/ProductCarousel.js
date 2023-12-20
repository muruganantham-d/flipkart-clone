import React from 'react';
import "./ProductCarousel.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import CategoryBanner from '../CategoryBanner/CategoryBanner';
import {MdOutlineArrowBackIosNew, MdArrowBackIos} from "react-icons/md";

const Next = (props)=>{
      const {className, onClick} = props;
      return(
        <div className={className} onClick={onClick}>
            <MdArrowBackIos
              style={{color:"black", fontSize: 25, fontWeight: 900}}
              />
        </div>
      );
}


const Prev = (props)=>{
    const {className, onClick} = props;
    return(
        <div className={className} onClick={onClick}>
            <MdOutlineArrowBackIosNew
              style={{color:"black", fontSize: 25, fontWeight: 900}}
              />
        </div>
      );
}


const ProductCarousel = ({BgImg, Title,Data}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
      };
  return (
  <div className='CategoryCarousel'>
    <div className='CategoryCarousel-left'
    style={{background:`url(${BgImg}) no-repeat 0px bottom`}}
    >
        <p className='CategoryCarousel-title'>{Title}</p>
        <button className='CategoryCarousel-btn'>View All</button>
    </div>
    <div className="CategoryCarousel-right">
        <Slider nextArrow={<Next/>} prevArrow={<Prev/>} {...settings}>
            {
                Data.map((item, index) => (
                    <Link key={index} to={"/products"}>
                        <CategoryBanner
                        ImgSrc={item.ImgSrc}
                        Title={item.CategoryName}
                        Brand={item.Brand}
                        />
                    </Link>
                ))
            }
        </Slider>
    </div>

  </div>
)}

export default ProductCarousel;