import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0E0E10] w-screen text-white">
        <footer
          className="font-matter lg:flex-row lg:gap-x-[150px] xl:gap-x-[270px] lg:items-start lg:justify-start lg:text-[17px] text-white py-[72px] lg:py-[64px] max-w-[1500px] mx-auto flex flex-col px-[20px] lg:px-[80px] xl:px-[130px]">
          <div className="self-start">
            <div className="flex flex-col gap-[24px]">
              <Image
                src="/logo-footer.svg"
                alt="relearn"
                width={92}
                height={24}
                className="block mb-[4px]"
              />
              <a
                className="block tracking-[1.5%]"
                href="mailto:info@relearn.ng" target="_blank"
              >
                info@relearn.ng
              </a>
              <p className="text-white tracking-[1.5%]">
                +2347031650809
              </p>
              <p className="tracking-[1.5%]">
                8, Montgomery road, Yaba, Lagos
              </p>
              <p className="tracking-[1.5%] max-w-[308px]">
                6th Floor Senteu Plaza, Galana/Lenana
                Road, Nairobi, Kenya.
              </p>
            </div>
            <div className="mt-[48px] flex gap-x-[1rem]">
              <a href="https://instagram.com/relearnafrica?igshid=Y2IzZGU1MTFhOQ==" target="_blank">
                <Image
                  src="/instagram.svg"
                  alt="relearn instagram"
                  width={32}
                  height={32} />
              </a>
              <a href="https://facebook.com/CcHUBnigeria" target="_blank">
                <Image
                  src="/facebook.svg"
                  alt="relearn facebook"
                  width={32}
                  height={32}
                />
              </a>
              <a href="https://twitter.com/relearnNG?t=Hxou-GmPMa967uZRZEC6tA&s=09" target="_blank">
                <Image
                  src="/twitter.svg"
                  alt="relearn twitter"
                  width={32}
                  height={32}
                />
              </a>
              <a href="https://www.youtube.com/CcHubNigeria" target="_blank">
                <Image
                  src="/youtube.svg"
                  alt="relearn youtube"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
          <div className="mb-[4rem] self-start">
            <p
              className="text-[22px] lg:text-[20px] tracking-[0.8%] font-neue font-bold mb-[32px] lg:mb-[24px]">
              Learn
            </p>
            <Link href="/about"><p className="tracking-[1.5%] mb-[32px] lg:mb-[24px]">
              About re:learn
            </p></Link>
            <Link href="/projects"><p className="tracking-[1.5%] mb-[32px] lg:mb-[24px]">
              Projects
            </p></Link>
            <Link href="news-and-updates"><p className="tracking-[1.5%] mb-[32px] lg:mb-[24px]">
              News & Update
            </p>
            </Link>
            <Link href="/certificate-portal"><p className="tracking-[1.5%]">Certificate Portal</p></Link>
          </div>
          <div className="text-[16px] lg:text-[17px] self-start">
            <p className="text-[22px] lg:text-[20px] tracking-[0.8%] font-neue font-bold mb-[32px] lg:mb-[24px]">
              Get Involved
            </p>
            <Link href="/get-involved/become-a-partner-at-relearn"><p
              className="tracking-[1.5%] mb-[32px] lg:mb-[24px]">
              Become a Partner
            </p>
            </Link>
            <Link href="/get-involved/educators-network"><p
              className="tracking-[1.5%] mb-[32px] lg:mb-[24px]">
              Educator Network
            </p>
            </Link>
            <Link href="/about?id=COE">
              <p className="tracking-[1.5%]">EdTech CoE</p>
            </Link>
          </div>
        </footer>
      </div>
    </div>

  )
    ;
};
export default Footer;
