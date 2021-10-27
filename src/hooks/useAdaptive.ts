import {useEffect, useLayoutEffect, useState} from "react";
import useWindowSize from "./useWindowSize";

export const useAdaptive = (): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [initialized, setInitialized] = useState<boolean>(false);
    const {width: windowSize} = useWindowSize();

    useLayoutEffect(() => {
        if (!initialized) {
            if (windowSize && windowSize <= 1180) {
                setIsMobile(true);
            } else setIsMobile(false);
            setInitialized(true);
        }
    }, [])

    useEffect(() => {
        if (initialized) {
            if (windowSize && windowSize <= 1180) {
                setIsMobile(true);
            } else setIsMobile(false);
        }
    }, [windowSize])

    return isMobile;
};