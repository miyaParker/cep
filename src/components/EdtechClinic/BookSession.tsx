import { useState } from "react";
import Button from "@/components/Generic/Button";


const BookSession = () => {
  const [isLinksVisible, setLinksVisible] = useState(false);
  const showLinks = () => {
    setLinksVisible(true);
  };
  return (
    <div>
      {!isLinksVisible ? <Button
        handleClick={showLinks}
        animate={true}
        btnText="Book a Session at the Clinic"
        styles="block mb-[64px] lg:b-0 mx-auto lg:mx-0 bg-[#E23F27] px-[36px] py-[23.5px] font-matter font-[500] text-[15px]  md:text-[17px] text-white text-center rounded-[40px]" /> : null}

      {isLinksVisible ? <><a target="_blank" href="https://bit.ly/cchubedtechclinic"><Button
        btnText="I'm in Nigeria"
        animate={true}
        disabled={false}
        rightIcon="/arrow-right-orange.svg"
        styles="sm:w-[300px] block mb-[12px] lg:b-0 mx-auto lg:mx-0 px-[36px] py-[23.5px] font-matter font-[500] text-[15px] md:text-[17px]] text-[#E23F27] text-center rounded-[40px] bg-white border border-[#E23F27]" /></a>
        <a target="_blank" href="http://bit.ly/ihubedtechclinic"><Button
          btnText="I'm in Kenya"
          animate={true}
          disabled={false}
          rightIcon="/arrow-right-orange.svg"
          styles="sm:w-[300px] block mb-[64px] lg:b-0 mx-auto lg:mx-0 px-[36px] py-[23.5px] font-matter font-[500] text-[15px] md:text-[17px] text-[#E23F27] text-center rounded-[40px] bg-white border border-[#E23F27]" /></a>
      </> : null
      }
    </div>

  );
};
export default BookSession;
