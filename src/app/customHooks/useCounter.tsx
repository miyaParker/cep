import {useEffect, useState} from "react";

interface Icounterprops {
    ref: any;
    limit: number;
    interval: number;
    step: number;
}


const useCounter = ({ref, limit, interval, step}: Icounterprops) => {
    const [value, setValue] = useState(0)
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer =
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            )
        observer.observe(ref.current as Element);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    useEffect(() => {
        while (value < limit) {
            const intervalId = setInterval(() => {
                setValue(value + step)
            }, interval)
            return () => {
                clearInterval(intervalId)
            }
        }
        if (!isIntersecting && value > 0) setValue(0)
    });
    return {value}
}
export default useCounter
