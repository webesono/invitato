"use client";
import Image from "next/image";
import Landing from "./pages/Landing";
import Invitation from "./pages/Invitation";
import { useState, useEffect, useRef } from "react";
import { Button, Sidebar } from "@components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faClose,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const Home = () => {
  const [showInvitation, setInvitation] = useState(false);
  let [playMusic, setPlayMusic] = useState(false);
  let [showSidebar, setShowSidebar] = useState(false);

  const audioRef = useRef(null);

  const toggleMusic = () => {
    setPlayMusic(!playMusic);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleComponent = () => {
    setInvitation(!showInvitation);
    setPlayMusic(!playMusic);
  };

  useEffect(() => {
    const audio = audioRef.current;
    playMusic === true ? audio.play() : audio.pause();
  }, [playMusic]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full flex justify-center relative overflow-x-hidden">
      {/* <div className="overflow-x-hidden w-full relative"> */}
      <audio ref={audioRef} loop>
        <source
          src="/assets/audio/bg-sound-946cc5b0fbb9759746fce004461e52cc.mp3"
          type="audio/mpeg"
        />
      </audio>
      <input
        id="menu-open"
        type="checkbox"
        checked={showSidebar}
        onChange={toggleSidebar}
        className="hidden"
      />

      <Sidebar toggleSidebar={toggleSidebar} />
      {showInvitation === true ? (
        <div className="absolute bottom-0 z-50 p-3 flex gap-4">
          <Button
            label={
              <label htmlFor="menu-open">
                {showSidebar === true ? (
                  <FontAwesomeIcon icon={faClose} />
                ) : (
                  <FontAwesomeIcon icon={faList} />
                )}
              </label>
            }
            action={toggleSidebar}
          />
          <Button
            label={
              playMusic === true ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faPlay} />
              )
            }
            action={toggleMusic}
          />
        </div>
      ) : null}
      {/* </div> */}
      <div className="hidden md:block md:w-1/2 lg:w-3/5  h-screen overflow-hidden border-r-8 border-primary-text">
        <div className="relative w-full">
          <div className="absolute w-full text-primary-text flex flex-col gap-1 m-10 flex-1 z-10 scale-75 lg:scale-100">
            <span
              className="font-jost"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              THE WEDDING OF
            </span>
            <br />
            <span
              className="font-clicker_script text-7xl"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Nailal & Via
            </span>
            <br />
            <div
              className="font-jost bg-slate-100 bg-opacity-40 rounded-full w-fit px-3 py-5"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <span className="">
                "And I knew exactly how old Walt Disney’s Cinderella felt when
                she
              </span>
              <br />
              <span className="" data-aos="fade-up" data-aos-duration="1600">
                found her prince
              </span>
              <br />
              <span className="" data-aos="fade-up" data-aos-duration="1800">
                — Elizabeth Young"
              </span>
              <br />
            </div>
          </div>
        </div>
        <div className="h-screen overflow-hidden bg-[url('https://user-images.githubusercontent.com/10141928/147430939-8124ff5c-4df1-495f-a4f9-ee6eb839f03e.jpeg')] bg-cover bg-center">
          <div className="bg-primary-bg opacity-30 h-full"></div>
          {/* <Image
            src="https://user-images.githubusercontent.com/10141928/147430939-8124ff5c-4df1-495f-a4f9-ee6eb839f03e.jpeg"
            alt="Hero image"
            width={500}
            height={500}
            layout="cover"
            className=" object-cover h-full w-full bg-[#B4C5D4]"
          /> */}
        </div>
      </div>
      <div className="md:w-1/2 lg:w-2/5 h-screen overflow-y-auto w-full relative ">
        {showInvitation ? (
          <Invitation />
        ) : (
          <Landing changePage={toggleComponent} />
        )}
      </div>
    </section>
  );
};

export default Home;
