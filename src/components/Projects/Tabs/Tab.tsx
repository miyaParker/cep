import React from 'react';

const Tab = ({label, isActive, onClick, activeTabStyle}) => {
    return (
        <a href={`/projects#${label}`}>
            <div
                onClick={onClick}
                className={`transition-all duration-300 ease-in cursor-pointer px-[20px] py-[10px] rounded-[40px] tracking-[0.5%] leading-[120%] font-light lg:text-[18px] ${isActive ? activeTabStyle : ""}`}
            >
                {label.replace("Projects", "")}
            </div>
        </a>
    );
};

export default Tab;
