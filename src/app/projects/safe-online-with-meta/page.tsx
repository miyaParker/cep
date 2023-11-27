import Button from "@/components/Generic/Button";

import type { Metadata } from "next";
import SafeOnlinePrograms from "@/components/Projects/SafeOnlinePrograms";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Safe Online with Meta",
  description: "Safe Online with Meta Project is a digital literacy and online safety campaign targeted at equipping Nigerian citizens with the skills required to use the internet responsibly and safely."
};

const SafeOnline = () => {
  return (
    <div className="w-full pt-[160px] lg:pt-[248px] lg:pt-0">
      <div
        className="mx-auto w-full px-[20px] lg:px-0">
        <main className="max-w-[698px] mx-auto">
          <h1 className="text-[#0E0E10] font-neue text-[38px] md:text-[48px] lg:text-[57px] font-bold">Safe Online with
            Meta</h1>
          <div className="items-center mt-[28px] py-[14px] pl-[28px] pr-[38px] rounded-[8px] flex gap-[16px] bg-[#F1F2F3]">
            <Image src="/safe-online/icon.svg" alt="Safe Online with
            Meta" width={40} height={40} />
            <p
              className="text-[#0E0E10] font-neue font-medium leading-[140%] tracking-[0.35px] text-[21px] md:text-[23px] lg:text-[25px]">
              We can be the catalyst for a better digital world
            </p>
          </div>
          <p
            className="mt-[36px] text-[#313235] leading-[140%] tracking-[0.33px] font-matter text-[20px] lg:text-[22px]">
            Safe Online with Meta Project is a <span
            className="font-semibold">digital literacy and online safety </span>
            campaign targeted at equipping Nigerian citizens with the skills
            required to use the internet responsibly and safely.
          </p>
          <p
            className="mt-[36px] text-[#313235] leading-[140%] tracking-[0.33px] font-matter text-[20px] lg:text-[22px]">
            In the past 5 years, CcHUB has worked with Meta on the Safe Online
            Campaign and trained <span className="font-semibold">75,107</span> participants, including learners,
            teachers, school leaders, parents, youths, and stakeholders from
            various organisations.
          </p>
          <div className="mt-[68px] flex flex flex-col items-center md:flex-row gap-[16px]">
            <a href="http://bit.ly/safeonlinewithmeta" target="_blank"><Button
              btnText="Join the Community"
              animate={true}
              styles="outline-none text-[#FFF] font-[500] bg-[#E23F27] tracking-[0.17px] px-[38px] py-[20px]" /></a>
            <a href="https://bit.ly/trainingformrequest" target="_blank"><Button
              btnText="Request a Training"
              animate={true}
              styles="outline-none cursor-pointer border border-[#0E0E10] bg-white text-[#0E0E10] font-[500] bg-white tracking-[0.17px] px-[38px] py-[20px]" />
            </a>
          </div>
          <div
            className='my-[48px] rounded-[4px] w-full h-[380px] max-w-[784px] md:h-[420px] bg-[url("/safe-online-lg.png")] bg-cover bg-no-repeat bg-center bg-[length:784px_420px]'>

          </div>
        </main>
        <p
          className="max-w-[698px] mx-auto text-[#313235] leading-[140%] tracking-[0.33px] font-matter text-[20px] lg:text-[22px]">
          The Safe Online programme's design will move from the usual
          approach of training students, school leaders, teachers and
          parents to a more community-of-practice approach. This year the
          focus will be on how to leverage the power of groups, networks and
          communities to amplify the campaign on safe and responsible use
          of the internet.
        </p>
        <p
          className="max-w-[698px] mx-auto mt-[36px] text-[#313235] leading-[140%] tracking-[0.33px] font-matter text-[20px] lg:text-[22px]">
          Establishing a Community of Practice is essential in deepening our
          capacity and intensifying our effort to sustain the safe and
          responsible use of the internet platforms in Nigeria. This Community
          of Practice [CoP] will provide a platform for engaging stakeholders
          with an interest in Digital Literacy to explore their various domains
          of interest and co-create strategies capable of supporting Digital
          Literacy in Nigeria.
        </p>

        <div className="max-w-[698px] mx-auto">
          <p
            className="text-[#0E0E10] mt-[120px] opacity-[84%] py-[8px] px-[18px] font-medium bg-[#F1F2F3] rounded-[20px] border border-[#E4E5E7] w-max">Our
            Impact</p>
          <h2
            className="font-neue mt-[20px] font-bold text-[25px] leading-[120%] tracking-[0.125px] text-[#0E0E10]">Since
            2018, we have:</h2>
        </div>
        <div
          className="bg-[#F4F4F5] border border-[#E7E7E9] rounded-[6px] w-full max-w-[780px] mx-auto mt-[32px]">
          <div className="flex px-[12px] border-b border-[#D5D5D8]">
            <div className="flex-1 flex flex-col items-center justify-center py-[48px] border-r border-[#D5D5D8]">
              <p
                className="font-neue font-bold text-center text-[#0E0E10] text-[38px] md:text-[48px] lg:text-[52px] leading-[100%] tracking-[0.416px]">75,107</p>
              <p
                className="font-matter text-center mt-[8px] text-[#313235] text-[18px] leading-[134%] tracking-[0.416px]">Participants
                trained</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-[48px]">
              <p
                className="font-neue font-bold text-center text-[#0E0E10] text-[38px] md:text-[48px] lg:text-[52px] leading-[100%] tracking-[0.416px]">6,300</p>
              <p
                className="font-matter mt-[8px] text-center text-[#313235] max-w-[162px] text-[16px] lg:text-[18px] leading-[134%] tracking-[0.416px]">Learning
                hours spent</p>
            </div>
          </div>
          <div className="flex">
            <div
              className="block md:hidden flex-1 flex flex-col items-center justify-center py-[24px] md:py-[36px] border-b border-[#D5D5D8]">
              <p
                className="font-neue font-bold text-center text-[#0E0E10] text-[38px] md:text-[48px] lg:text-[52px] leading-[100%] tracking-[0.416px]">422</p>
              <p
                className="font-matter mt-[8px] text-center text-[#313235] max-w-[162px] text-[16px] lg:text-[18px] leading-[134%] tracking-[0.27px]">Primary
                and
                Secondary Schools</p>
            </div>
          </div>
          <div className="flex px-[12px] ">
            <div
              className="hidden md:block flex-1 flex flex-col items-center justify-center py-[24px] md:py-[36px] border-r border-[#D5D5D8]">
              <p
                className="font-neue font-bold text-center text-[#0E0E10] text-[38px] md:text-[48px] lg:text-[52px] leading-[100%] tracking-[0.416px]">422</p>
              <p
                className="font-matter mt-[8px] text-center text-[#313235] max-w-[162px] mx-auto text-[16px] lg:text-[18px] leading-[134%] tracking-[0.27px]">Primary
                and
                Secondary Schools</p>
            </div>
            <div
              className="flex-1 flex flex-col items-center justify-center py-[24px] md:py-[36px] border-r border-[#D5D5D8]">
              <p
                className="font-neue font-bold text-center text-[#0E0E10] text-[38px] md:text-[48px] lg:text-[52px] leading-[100%] tracking-[0.416px]">9</p>
              <p
                className="font-matter mt-[8px] text-center text-[#313235] max-w-[162px] text-[16px] lg:text-[18px] leading-[134%] tracking-[0.27px]">Digital
                Literacy
                Forums</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-[24px] md:py-[36px]">
              <p
                className="font-neue font-bold text-center text-[#0E0E10] text-[38px] md:text-[48px] lg:text-[52px] leading-[100%] tracking-[0.416px]">2</p>
              <p
                className="font-matter mt-[8px] text-center text-[#313235] max-w-[162px] mx-auto text-[18px] leading-[134%] tracking-[0.27px]">Safe
                Online Fests</p>
            </div>
          </div>
        </div>
        <SafeOnlinePrograms />


        <div className="max-w-[698px] mx-auto">
          <p
            className="text-[#0E0E10] mt-[120px] opacity-[84%] py-[8px] px-[18px] font-medium bg-[#F1F2F3] rounded-[20px] border border-[#E4E5E7] w-max">Gallery</p>
          <h2
            className="font-neue mt-[20px] font-bold text-[25px] leading-[120%] tracking-[0.125px] text-[#0E0E10]">Images
            from some of our events</h2>
        </div>
        <div className="flex gap-[8px] mt-[32px] w-full max-w-[784px] mx-auto">
          <div className="flex shrink flex-col min-w-0 min-h-0 basis-auto gap-[8px]  ">
            <div
              className='shrink w-[220px] max-w-full min-w-0 h-[196px] rounded-[6px] bg-cover bg-no-repeat bg-center bg-[url("/safe-online/pic1.png")]'></div>
            <div
              className='shrink w-[220px] max-w-full min-w-0 h-[196px] rounded-[6px] bg-cover bg-center bg-no-repeat  bg-[url("/safe-online/pic2.png")]'></div>
          </div>

          <div className="flex shrink min-w-0 min-h-0 min-w-0 min-h-0 basis-auto flex-col gap-[8px]">
            <div
              className='min-w-0 max-w-full w-[310px] shrink h-[128px] rounded-[6px] bg-cover bg-no-repeat bg-center  bg-[url("/safe-online/pic3.png")]'></div>
            <div className="min-w-0 max-w-full w-[310px] shrink flex gap-[8px]">
              <div
                className='min-w-0 max-w-full w-[166px] shrink h-[128px] rounded-[6px]  bg-cover bg-no-repeat bg-center bg-[url("/safe-online/pic4.png")]'></div>
              <div
                className='min-w-0 max-w-full w-[136px] shrink h-[128px] rounded-[6px]  bg-cover bg-no-repeat bg-center bg-[url("/safe-online/pic5.png")]'></div>
            </div>
            <div
              className='shrink w-[310px] min-w-0 max-w-full h-[128px] rounded-[6px]  bg-cover bg-no-repeat bg-center bg-[url("/safe-online/pic6.png")]'></div>
          </div>
          <div className="flex min-w-0 max-w-full shrink flex-col gap-[8px]">
            <div
              className='min-w-0 max-w-full w-[234px] shrink h-[172px] rounded-[6px]  bg-cover bg-no-repeat bg-center bg-[length:234px_172px] bg-[url("/safe-online/pic7.png")]'></div>
            <div
              className='min-w-0 max-w-full w-[234px] shrink h-[220px] rounded-[6px]  bg-cover bg-no-repeat bg-center bg-[length:234px_220px] bg-[url("/safe-online/pic8.png")]'></div>
          </div>
        </div>

        {/*  Get Involved*/}
        <div
          className="px-[20px] before:z-10 relative overflow-hidden before:top-0 before:right-0 before:content-[url('/safe-online/ellipse-dark.svg')] before:absolute after:rotate(-170deg)  after:content-[url('/safe-online/ellipse-dark-sm.svg')] after:bottom-0 after:left-0 after:absolute md:px-0 mb-[160px] py-[60px] mt-[120px] text-white w-full max-w-[784px] mx-auto bg-[#0E0E10] rounded-[12px] after:z-10">
          <h2 className="font-neue text-[24px] text-center md:text-[28px] lg:text-[32px] tracking-[0.45px]">Ready to get
            involved?</h2>
          <p
            className=" w-full max-w-[435px] mx-auto mt-[12px] font-matter text-[16px] text-center md:text-[17px] lg:text-[18px] tracking-[0.27px]">Join
            our
            thriving community of digital learners and
            gain the knowledge you need to navigate the online
            world with confidence</p>
          <div
            className="relative z-50 mt-[68px] w-max mx-auto mt-[48px] flex flex flex-col items-center md:flex-row gap-[16px]">
            <a href="https://bit.ly/trainingformrequest" target="_blank"><Button
              btnText="Request a Training"
              animate={true}
              styles="outline-none cursor-pointer border border-white text-white font-[500] bg-[#1B1B1D] tracking-[0.17px] px-[38px] py-[20px]" />
            </a>
            <a href="http://bit.ly/safeonlinewithmeta" target="_blank"><Button
              btnText="Join the Community"
              animate={true}
              styles="outline-none text-[#FFF] font-[500] bg-[#E23F27] tracking-[0.17px] px-[38px] py-[20px]" /></a>

          </div>
        </div>
      </div>
    </div>
  );
};
export default SafeOnline;
