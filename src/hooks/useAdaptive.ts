import {useLayoutEffect, useState} from "react";
import useWindowSize from "./useWindowSize";

export const useAdaptive = (): boolean | undefined => {
    const [isMobile, setIsMobile] = useState<boolean | undefined>();
    const {width: windowSize} = useWindowSize();

    useLayoutEffect(() => {
        if (windowSize && windowSize <= 1180) {
            setIsMobile(true);
        } else setIsMobile(false);
    }, [windowSize])

    return isMobile;
};