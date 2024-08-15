"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Header from "../header";
import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsWhatsapp,
  BsMailbox,
} from "react-icons/bs";
import Image from "next/image";
import Img1 from "../../public/adventure5.jpg";
import Img2 from "../../public/Image1.jpg";
import Img3 from "../../public/Image2.jpg";
import Img4 from "../../public/Image3.jpg";
import Img5 from "";
// import Img6 from "@/public/Image5.jpg";
// import Img7 from "@/public/Image6.jpg";

const VedioLinks = [
  {
    url: "/gallery1.mp4",
  },
  {
    url: "/gallery2.mp4",
  },
  {
    url: "/gallery3.mp4",
  },
  {
    url: "/gallery1.mp4",
  },
  {
    url: "/gallery2.mp4",
  },
  {
    url: "/gallery3.mp4",
  },
  {
    url: "/gallery1.mp4",
  },
  {
    url: "/gallery2.mp4",
  },
  {
    url: "/gallery3.mp4",
  },
];

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="mt-6">
        <h2 className="mb-6 text-4xl tracking-tight text-center font-extrabold text-[#0e7490] dark:text-white">
          Gallery
        </h2>
      </div>
      <div className="w-full py-3 text-white">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {VedioLinks?.map((vedio) => (
            <>
              <SwiperSlide>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  {/* Add your video source here */}
                  <source src={vedio.url} type="video/mp4" />
                </video>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>

      <div className="my-10 w-full max-w-[80%] mx-auto flex flex-col justify-between items-center">
        <h2 className="mb-6 text-4xl tracking-tight text-center font-extrabold text-[#0e7490] dark:text-white">
          Some Glimpses
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="grid gap-4">
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img1}
                alt=""
              />
            </div>
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img2}
                alt=""
              />
            </div>
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img3}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img4}
                alt=""
              />
            </div>
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img5}
                alt=""
              />
            </div>
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img1}
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img1}
                alt=""
              />
            </div>
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img1}
                alt=""
              />
            </div>
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img1}
                alt=""
              />
            </div>
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img1}
                alt=""
              />
            </div>
            <div>
              <Image
                class="h-auto max-w-full rounded-lg"
                src={Img1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* footer Section */}
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            className="flex justify-center items-center text-2xl font-semibold text-[#0e7490] dark:text-white"
          >
            GB PAK TOURS
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            We operate outdoor trips to the corners of Gilgit Baltistan across
            old Silk route, Himalaya and karakoram.
          </p>

          <ul className="flex flex-wrap justify-center items-center mb-6 text-[#0e7490] dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Team
              </a>
            </li>

            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021-2024{" "}
            <a href="#" className="hover:underline">
              CodeArena
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
      <div className="w-full bg-[#0e7490] px-4 py-6 sm:flex sm:items-center sm:justify-center">
        {/* <Footer.Copyright href="#" by="Flowbite™" year={2022} /> */}
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon
            className="text-white"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100064152220501"
            icon={BsFacebook}
          />
          <Footer.Icon
            className="text-white"
            href="https://www.instagram.com/gbpakistantours/"
            target="_blank"
            icon={BsInstagram}
          />
          <Footer.Icon
            className="text-white"
            href="https://www.youtube.com/channel/UCpfyXPaalaMpAUkEsCcg_Bw"
            target="_blank"
            icon={BsYoutube}
          />
          <Footer.Icon
            className="text-white"
            href="tel:+923319807200"
            icon={BsWhatsapp}
          />

          <Footer.Icon
            className="text-white"
            href="mailto:gbpakistantours@gmail.com"
            icon={BsMailbox}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
