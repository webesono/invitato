import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Landing = ({ changePage }) => {
  return (
    <div>
      <div className=" w-full text-white flex flex-col items-center gap-3 absolute p-16">
        <Image
          src="/assets/icons/pigeon.png"
          alt="Hero image"
          width={50}
          height={50}
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div className="flex flex-col items-center">
          <span
            className="font-jost"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            THE WEDDING OF
          </span>
          <span
            className="font-clicker_script font-bold text-5xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Nailal & Via
          </span>
        </div>
      </div>

      <div className="h-screen overflow-hidden  bg-[url('https://user-images.githubusercontent.com/10141928/147430939-8124ff5c-4df1-495f-a4f9-ee6eb839f03e.jpeg')] bg-cover bg-center">
        <div className="bg-primary-bg opacity-30 h-full"></div>
      </div>
      <section className=" w-full flex flex-col items-center absolute bottom-0 text-white text-center font-jost font-semibold">
        <button
          className=" bg-primary-bg mb-9 px-2 py-2 rounded-full bg-opacity-80 animate-zoom font-bold"
          onClick={changePage}
        >
          <FontAwesomeIcon icon={faEnvelopeOpen} /> Open Invitation
        </button>
        <footer className=" flex flex-col  w-full ">
          <div
            className=" flex flex-col  w-full  "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              src="/assets/icons/gelombang.svg"
              alt="Hero image"
              width={500}
              height={50}
              layout="responsive"
              className="w-full"
            />
            <h1 className="bg-primary-bg py-6">
              <span>
                Created with ♡{" "}
                <a href="#" className="hover:underline">
                  by Invitato
                </a>
              </span>
              <br />
              <span>© 2023 Nailal & Via. All Rights Reserved</span>
            </h1>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Landing;
