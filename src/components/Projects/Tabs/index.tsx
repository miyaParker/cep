import Tab from "./Tab"
import {PROJECTS_GROUPS} from "@/constants";
import {TabsProps} from "@/types";

const Index = ({ activeTab, onClickTab, activeTabStyle }:TabsProps) => {
    return (
        <div className="w-full bg-white top-[4rem] lg:top-[8rem] sticky flex gap-[40px] flex-wrap py-[20px] lg:py-[40px] text-[#0E0E10]">
            {Object.values(PROJECTS_GROUPS).map((group, index) => (
                <Tab
                    key={index}
                    label={group}
                    isActive={activeTab === group}
                    onClick={() => onClickTab(group)}
                    activeTabStyle={activeTabStyle}
                />
            ))}
        </div>
    );
};
export default Index;
