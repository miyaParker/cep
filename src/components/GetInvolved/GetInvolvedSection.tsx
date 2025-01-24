import {GetInvolvedLinkSectionProps} from "@/types";

const GetInvolvedLinkSection = ({section}: GetInvolvedLinkSectionProps) => {
    if (Array.isArray(section)) {
        return (
            <div className="flex flex-col gap-9">
                {section.map((item, index) => (
                    <GetInvolvedLinkSection section={item} key={index}/>
                ))}
            </div>
        );
    }

    return (
        <div>
            <div className="text-[#313235]">
                <div className="w-max">
                    <p className="font-matter text-[18px] leading-[120%] text-left uppercase">
                        {section.title}
                    </p>
                    <div className="w-full bg-[#313235D6] bg-opacity-80 h-[1px]"></div>
                </div>
            </div>

            <div>
                {section.links && section.links.length > 0 ? (
                    section.links.map((link, index) => (
                        <a
                            href={link.text === "EdTech Festival" ? link.link : `/get-involved/${link.link}`}
                            key={index}
                            target={link.text === "EdTech Festival" ? "_blank" : "_parent"}
                            aria-label={`Navigate to ${link.text}`}
                            rel={link.text === "EdTech Festival" ? "noopener noreferrer" : undefined}
                        >
                            <p className="font-matter text-[17px] leading-[120%] text-left mt-[16px]">
                                {link.text}
                            </p>
                        </a>
                    ))
                ) : (
                    <p className="text-gray-500 mt-4">No links available</p>
                )}
            </div>
        </div>
    );
};


export default GetInvolvedLinkSection;
