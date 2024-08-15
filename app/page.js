"use client";

import Header from "./header";
import Image from "next/image";
// import AImg1 from "../public/about-img1.png";
// import AImg2 from "../public/about-img2.png";
// import Img1 from "../public/adventure1.jpg";
// import Timage1 from "../public/team-img1.jpg";
// import Timage2 from "/public/team-img2.jpg";
// import Timage3 from "/public/team-Img3.jpg";
// import Timage4 from "../public/team-img4.jpg";
// import Pimg1 from "../public/patner1.png";
// import Pimg2 from "../public/patner2.png";
// import Pimg3 from "../public/patner3.png";
// import Img2 from "../public/adventure2.jpg";
// import Img3 from "../public/adventure3.jpg";
// import Img4 from "../public/adventure4.jpg";
// import Img5 from "../public/adventure5.jpg";
// import Img6 from "../public/adventure6.jpg";
// import SerImg1 from "../public/car.png";
// import SerImg2 from "../public/house.png";
// import SerImg3 from "../public/food.png";
import { Footer } from "flowbite-react";
import { Button } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsWhatsapp,
  BsMailbox,
} from "react-icons/bs";
const Home = () => {
  const AdventureCards = [
    {
      img: "/adventure2.jpg",
      title: "Khunjarab National Park",
      desc: "Located in Gojal Hunza, Gilgit-Baltistan, Pakistan.",
    },
    {
      img: "/adventure2.jpg",
      title: "Attabad Lake",
      desc: "Located in Gojal Hunza, Gilgit-Baltistan, Pakistan.",
    },
    {
      img: "/adventure3.jpg",
      title: "Naltar Valley",
      desc: "Located near Nomal Gilgit, Gilgit-Baltistan, Pakistan.",
    },
    {
      img: "/adventure4.jpg",
      title: "Deosai National Park",
      desc: "Located in Astore, Gilgit-Baltistan, Pakistan.",
    },
    {
      img: "/adventure5.jpg",
      title: "Phandar Valley",
      desc: "Located in Ghizer, Gilgit-Baltistan, Pakistan.",
    },
    {
      img: "/adventure6.jpg",
      title: "Skardu",
      desc: "Located in Baltistan, Gilgit-Baltistan, Pakistan.",
    },
  ];

  const teamMembers = [
    {
      img: "/team-img1.jpg",
      name: "Shoaib Baig",
      design: "CEO/Co-founder",
    },
    {
      img: "/team-img2.jpg",
      name: "Irfan Karim",
      design: "Tour Guide",
    },
    {
      img: "/team-img3.jpg",
      name: "Najeeb Ullah Baig",
      design: "Translator",
    },
    {
      img: "/team-img4.jpg",
      name: "Kainat imtiaz",
      design: "Translator",
    },
  ];

  const Patners = [
    {
      img: "/patner1.png",
      link: "https://www.serenahotels.com/",
    },
    {
      img: "/patner2.png",
      link: "https://www.marriott.com/",
    },
    {
      img: "/patner3.png",
      link: "https://avari.com/",
    },
  ];

  const Services = [
    {
      icon: "/car.png",
      name: "Transportation",
      description: "We will facilitie you with our best transport system",
    },
    {
      icon: "/house.png",
      name: "Residence",
      description:
        "We will provide you comfortable and and enjoyable experience",
    },
    {
      icon: "/food.png",
      name: "Food",
      description:
        "You will enjoy a variety of Pakistani food and cultural food of Gilgit Baltistan",
    },
  ];

  return (
    <>
      {/* header */}
      <div className="relative overflow-hidden h-[100vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        >
          {/* Add your video source here */}
          <source src="/backgroundvedio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 h-[100%] ">
          <Header />
          <div className="h-[100%] flex flex-col items-center justify-center gap-5">
            <h2 className="text-white text-2xl font-bold">GB Pakistan Tour</h2>
            <p className="text-white font-semibold text-center w-[50%]">
              We operate outdoor trips to the corners of Gilgit Baltistan across
              old Silk route, Himalaya and karakoram.
            </p>
            <Button className="text-white bg-[#0e7490] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-[#0e7490] dark:focus:ring-blue-800">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light  sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#0e7490] dark:text-white">
              About us
            </h2>
            <p className="mb-4 text-gray-500">
              GB Pakistan Travel & Tours is one of the leading Tour Operators in
              Gilgit Baltistan , Pakistan, providing comprehensive services for
              groups and individuals.
            </p>
            <p className="text-gray-500">
              GB Pakistan Travel & Tours was first established in the year 2010
              by qualified professionals with more than Ten years of experience
              in the tourism industry. Holding places, people and customs
              through professional guides, modern transportation, quality
              hotels, fine restaurants and other key vendors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-full rounded-lg"
              src="/about-img1.png"
              alt="office content 1"
            />
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/about-img2.png"
              alt="office content 2"
            />
          </div>
        </div>
      </div>

      {/* Adventure section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="gap-16 flex flex-col items-center py-8 px-4 mx-auto max-w-screen-xl">
          <div className="font-light  sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#0e7490] dark:text-white">
              Adventure Tours
            </h2>
          </div>
          <div className="flex justify-center flex-wrap gap-8">
            {AdventureCards.map((items) => (
              <>
                <div className="w-full md:w-1/4 sm:w-1/2 shadow-lg h-[100%] flex flex-col gap-3 bg-white dark:bg-black">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-[28vh] object-cover"
                    src={items.img}
                    alt=""
                  />
                  <div className="flex flex-col gap-1 px-3 py-3">
                    <h3 className="font-bold text-[#0e7490]">{items.title}</h3>
                    <p className="text-[#0e7490]">{items.desc}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* clutiral tours  section*/}
      <div className="bg-white dark:bg-gray-900">
        <div className="gap-16 flex flex-col items-center py-8 px-4 mx-auto max-w-screen-xl">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#0e7490] dark:text-white">
              Cultural Tours
            </h2>
          </div>
          <div className="flex justify-center flex-wrap gap-8">
            {AdventureCards.map((items) => (
              <>
                <div className="w-full md:w-1/4 sm:w-1/2 shadow-lg h-[100%] flex flex-col gap-3 bg-white dark:bg-black">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-[28vh] object-cover"
                    src={items.img}
                    alt=""
                  />
                  <div className="flex flex-col gap-1 px-3 py-3">
                    <h3 className="font-bold text-[#0e7490]">{items.title}</h3>
                    <p className="text-[#0e7490]">{items.desc}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* services */}
      <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0e7490] sm:text-4xl dark:text-white">
              Our Services
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Some things you should know about us
            </p>
          </div>

          <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {Services.map((service) => (
              <>
                <div className="space-y-4 flex flex-col items-center">
                  <Image width={52} height={52} src={service.icon} alt="" />

                  <h3 className="text-2xl font-bold leading-tight text-[#0e7490] hover:text-[#0e7490] dark:text-white">
                    {service.name}
                  </h3>
                  <p className="text-lg font-normal text-gray-500 hover:text-blue-500 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* team section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#0e7490] dark:text-white">
              Our Amazing Team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We have a perfect team to provide you the best services
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <>
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src={member.img}
                    alt="Bonnie Avatar"
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-[#0e7490] dark:text-white">
                    <a href="#">{member.name}</a>
                  </h3>
                  <p className="font-bold">{member.design}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Patners section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#0e7490] dark:text-white">
              Our Patners
            </h2>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center">
            {Patners.map((member) => (
              <>
                <a href={member.link}>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="mx-auto h-40 w-60 aspect-auto object-contain"
                    src={member.img}
                    alt=""
                  />
                </a>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* contact us */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#0e7490] dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-[#0e7490] dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-[#0e7490] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@xyz.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-[#0e7490] dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-[#0e7490] bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-[#0e7490] dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-[#0e7490] bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0e7490] sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-[#0e7490]"
            >
              Send message
            </button>
          </form>
        </div>
        <div>
          <iframe
            width="100%"
            height="650"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Gb%20Pakistan%20tours,%20Gilgit&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            marginwWidth="0"
          ></iframe>
        </div>
      </section>

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
export default Home;
