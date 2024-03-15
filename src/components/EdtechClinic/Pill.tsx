import Image from "next/image";

interface PillProps {
  text: string;
}

const Pill = ({ text }: PillProps) => {
  return (
    <div className="flex gap-[12px] lg:gap-[16px] items-center p-[10px] lg:p-[14px] bg-[#F4F5F5] rounded-[40px]">
      <Image
        src="/check.svg"
        alt={text}
        width={48}
        height={48}
        className="w-[32px] lg:w-[48px]"
      />
      <p className="text-[18px] lg:text-[20px] w-max font-bold font-neue leading-[24px]">{text}</p>
    </div>
  );
};
export default Pill;
