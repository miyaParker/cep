import Tab from "./Tab"
import {PROJECTS_GROUPS} from "@/constants";

const Index = ({ activeTab, onClickTab, activeTabStyle }) => {
    return (
        <div className="flex gap-[40px] flex-wrap mb-[80px] text-[#0E0E10]">
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
