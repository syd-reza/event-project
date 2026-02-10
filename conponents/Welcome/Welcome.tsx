"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Loginandsingup from "../Loginandsingup/Loginandsingup";

const slides = [
  { image: "/7xm 1.png", text: "Consult only with a doctor you trust" },
  { image: "/7xm 2.png", text: "Get medical advice anytime, anywhere" },
  { image: "/7xm 5.png", text: "Get medical advice anytime, anywhere" },
];

export default function OnboardingSlider() {
  const swiperRef = useRef<any>(null);
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <Loginandsingup />;
  }

  return (
    <div className="container h-screen flex flex-col justify-center bg-white relative">
      <p
        className="text-[#a1a8b0] cursor-pointer"
        onClick={() => setShowLogin(true)}
      >
        Skip
      </p>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt="Doctor"
              width={317}
              height={467}
              className="mx-auto object-contain"
            />

            <div className="flex flex-col bg-gradient-to-b from-[#F5F7FF] to-transparent px-3 pt-10 rounded-3xl -mt-2.5 relative z-10">
              <p className="text-center text-lg font-semibold">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* controls */}
      <div className="flex justify-between items-center w-full px-3">
        <button
          onClick={() => {
            const swiper = swiperRef.current;
            if (!swiper) return;

            if (swiper.activeIndex === slides.length - 1) {
              setShowLogin(true);
            } else {
              swiper.slideNext();
            }
          }}
          className="bg-[#199A8E] text-white p-3 rounded-full"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.43 5.92993L20.5 11.9999L14.43 18.0699"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 12H20.33"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="custom-pagination flex gap-[1px] !w-14"></div>
      </div>
    </div>
  );
}
