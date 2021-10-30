import {useEffect, useState} from "react";
import useWindowSize from "./useWindowSize";

export const useAdaptive = (): boolean | undefined => {
    const [isMobile, setIsMobile] = useState<boolean | undefined>();
    const {width: windowSize} = useWindowSize();

    useEffect(() => {
        if (windowSize && windowSize <= 1180) {
            setIsMobile(true);
        } else if (windowSize && windowSize > 1180) {
            setIsMobile(false);
        }
    }, [windowSize])

    return isMobile;
};