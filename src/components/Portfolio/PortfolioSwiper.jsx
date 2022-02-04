import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import Images from './Images';

import "swiper/css";
import "swiper/css/pagination"

function PortfolioSwiper () {
  SwiperCore.use([Pagination]);
  
  const project1 = Images.project1.map((image, key) => {return (<SwiperSlide><img src={String(image)} key={key} alt='' /></SwiperSlide>)})
  const project2 = Images.project2.map((image, key) => {return (<SwiperSlide><img src={String(image)} key={key} alt='' /></SwiperSlide>)})
  const project3 = Images.project3.map((image, key) => {return (<SwiperSlide><img src={String(image)} key={key} alt='' /></SwiperSlide>)})
  const nonProject = Images.nonProject.map((image, key) => {return (<SwiperSlide><img src={String(image)} key={key} alt='' /></SwiperSlide>)})
  
  return (
    <Swiper className="mySwiper swiper-h" spaceBetween={50} pagination={{"clickable": true}}>
      <SwiperSlide>
        <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{"clickable": true}}>
          {project1}
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>
        <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{"clickable": true}}>
          {project2}
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>
        <Swiper className="mySwiper2 swiper-v" direction={'vertical'} spaceBetween={50} pagination={{"clickable": true}}>
          {project3}
        </Swiper>
      </SwiperSlide>
      {nonProject}
    </Swiper>
  );
}

export default PortfolioSwiper