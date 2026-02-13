"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="w-full mx-auto mt-8">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="customSwiperTwo rounded-[20px]"
      >
        <SwiperSlide className="bg-red-200 p-20 text-center">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="bg-blue-200 p-20 text-center">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-green-200 p-20 text-center">
          Slide 3
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
