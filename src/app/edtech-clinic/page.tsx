"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Pill from "@/components/EdtechClinic/Pill";
import BookSession from "@/components/EdtechClinic/BookSession";


const EdtechClinic = () => {
  const [isPaused, setPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const beneficiaries = ["School owners", "School administrators", "School organizations", "School groups", "Principals/vice-principals", "Education NGOs", "Head of ICTs", "Chancellors/deputy-chancellors", "Government education\n" +
  "              stakeholder"];
  const playVideo = () => {
    setPaused(false);
    videoRef?.current?.play().catch(() => {
    });
  };
  const handlePause = () => {
    setPaused(true);

  };
  const handlePlay = () => {
    setPaused(false);
  };
  return (
    <section className="">
      <div
        className="mx-auto gap-x-[40px] w-full flex flex-col lg:flex-row lg:justify-between mx-auto pt-[136px] lg:pt-0  lg:mt-[312px] max-w-[1440px] px-[20px] lg:px-[80px] xl:px-[140px]">
        <div className="mx-auto lg:mx-0 lg:flex-1">
          <h1
            className="max-w-[205px] lg:max-w-[337px]  font-bold mx-auto lg:mx-0 leading-[120%] text-center lg:text-left font-neue text-[#0E0E10] text-[37px] lg:text-[60px]">
            Empowering <span className="text-[#ED7636]">schools </span>
            with
            EdTech Solutions{" "}
          </h1>
          <p
            className="mt-[20px] mb-[48px] leading-[140%] max-w-[421px] mx-auto tracking-[0.1px] lg:tracking-[0.11px] font-matter lg:text-[22px] text-center lg:text-left text-[#333438] text-[20px] lg:mx-0">
            The Schools EdTech Clinic is designed to
            increase your school’s adoption of Edtech
            solutions by assessing your needs, finding
            gaps and linking you to right EdTech
            solution providers.
          </p>

          <BookSession />
        </div>
        <div
          className="bg-[url('/frame.svg')] bg-center bg-cover bg-no-repeat lg:flex-1 relative w-full h-[476px] max-w-[584px] rounded-t-[6px] px-[18px] lg:px-[24px] pt-[38px] lg:pt-[44px] flex justify-center items-center mx-auto lg:mx-0 ">
          <video ref={videoRef}
                 poster="/ec-video-th.svg"
                 onPause={handlePause}
                 onPlay={handlePlay}
                 width={536}
                 height={472}
                 controls={!isPaused}
                 className="w-full max-w-[536px] h-[476px] bg-black-100  rounded-t-[6px] z-20"
                 src="/ec-video.mp4"
          ></video>
          {isPaused ? <div className="flex gap-x-[5px] lg:gap-x-[10px] items-center absolute bottom-0 left-[34px] lg:left-[44px] z-30">
            <Image
              onClick={playVideo}
              alt="video frame"
              src="/play.svg"
              width={60}
              height={60}
              className="w-[40px] md:w-[60px] h-[40px] md:w-[60px]  cursor-pointer hover:scale-[1.1] transition-all"
            />
            <p className="max-w-[171px] text-white font-matter text-[14px] lg:text-[15px]">See what we offer at the
              Schools Edtech Clinic</p>
          </div> : null}
        </div>

      </div>
      <div className="bg-[#0E0E10] text-white py-[80px] mt-[80px]">
        <div
          className="max-w-[1440px] gap-x-[20px] mx-auto font-neue font-bold flex flex-col items-center xl:justify-between px-[20px] xl:flex-row lg:px-[80px] xl:px-[140px]">
          <div className="mx-auto lg:mx-0 lg:flex-1">
            <h2
              className="max-w-[583px] mx-auto xl:mx-0 xl:px-0 text-[30px] lg:text-[3rem] text-center xl:text-left leading-[120%] mt-[28px] mb-[40px]">
              We provide support for
              schools in these key areas:
            </h2>
            <div className="flex flex-col items-center xl:items-start">
              <Image
                src="/key-area-1.svg"
                alt="re:learn is driven by partnerships"
                width={48}
                height={48}
                className=""
              />
              <h3
                className="max-w-[485px] mx-auto xl:mx-0 lg:px-0 text-[20px] xl:text-[24px] text-center xl:text-left leading-[120%] mt-[20px] mb-[20px]">
                Identifying gaps
              </h3>
              <p
                className="font-matter text-[16px] lg:text-[18px] lg:px-0 mb-[3rem] max-w-[450px] font-normal mx-auto lg:mx-0  text-center xl:text-left text-white/90 tracking-[0.085px] leading-[150%]">
                Identify areas in the school system where there&apos;s a need
                for Edtech solutions tailored to specific learning needs.
              </p>
            </div>
            <div className="flex flex-col items-center xl:items-start lg:flex-1">
              <Image
                src="/key-area-2.svg"
                alt="re:learn is driven by partnerships"
                width={48}
                height={48}
                className=""
              />
              <h3
                className="max-w-[485px] mx-auto xl:mx-0 xl:px-0 text-[20px] xl:text-[24px] text-center xl:text-left leading-[120%] mt-[20px] mb-[20px]">
                Tailored solutions
              </h3>
              <p
                className="font-matter text-[16px] lg:text-[18px] lg:px-0 mb-[3rem] max-w-[450px] font-normal mx-auto lg:mx-0  text-center xl:text-left text-white/90 tracking-[0.085px] leading-[150%]">
                Suggest appropriate tech-based teaching & learning
                solutions to schools based on diagnoses made.
              </p>
            </div>
            <div className="flex flex-col items-center xl:items-start">
              <Image
                src="/key-area-3.svg"
                alt="re:learn is driven by partnerships"
                width={48}
                height={48}
                className=""
              />
              <h3
                className="max-w-[485px] mx-auto xl:mx-0 xl:px-0 text-[20px] xl:text-[24px] text-center xl:text-left leading-[120%] mt-[20px] mb-[20px]">
                Providing support
              </h3>
              <p
                className="font-matter text-[16px] lg:text-[18px] lg:px-0 mb-[3rem] max-w-[450px] font-normal mx-auto lg:mx-0  text-center xl:text-left text-white/90 tracking-[0.085px] leading-[150%]">
                Provide a holistic support for Edtech solutions and
                supporting services such as devices, internet
                connectivity and financing opportunities.
              </p>
            </div>


          </div>
          <div className="lg:flex-1 relative">
            <div className="relative w-max mx-auto lg:mx-0">
              <Image
                src="/ec-section2.png"
                alt="The Ed-Tech Centre of Excellence, TASUED"
                width={545}
                height={553}
                className="z-20 relative w-full max-w-[440px] lg:max-w-[545px] md:w-[440px] xl:w-[510px] 2xl:w-[545px] mx-auto mx-[20px] lg:mx-0"
              />
              <Image
                src="/about-ellipse.svg"
                alt="The Ed-Tech Centre of Excellence, TASUED"
                width={268}
                height={138}
                className="w-[128px] h-[66px] md:w-[268px] md:h-[138px] max-w-[268px] max-h-[138px] absolute bottom-[-40px] md:bottom-[-75px] right-[-20px] md:right-[-70px]"
              />
            </div>

          </div>
        </div>
      </div>
      <div className="py-[10rem] ">
        <h2 className="text-center text-[3rem] font-bold mb-[3rem] w-[100%] max-w-[395px] mx-auto font-neue">
          The program is for
          you if you are a:
        </h2>
        <div
          className="mx-[140px] mx-auto flex flex-wrap max-w-[1112px] justify-center items-center gap-[28px]">
          {beneficiaries.map((pill) =>
            <Pill key={pill} text={pill} />
          )}
        </div>
        <div className="mt-[44px] md:mt-[64px] mx-auto w-max">
          <BookSession/>
        </div>
      </div>

    </section>
  );
};
export default EdtechClinic;
