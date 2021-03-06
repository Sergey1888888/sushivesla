import React, {useContext} from 'react';
import {AdaptiveContext, AdaptiveContextProps} from "../App";
import MobileWrapper from "./MobileWrapper";
import DesktopWrapper from "./DesktopWrapper";

interface WrapperProps {

}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
    const {isMobile} = useContext<Partial<AdaptiveContextProps>>(AdaptiveContext);
    return isMobile ? <MobileWrapper>{children}</MobileWrapper> : <DesktopWrapper>{children}</DesktopWrapper>
};

export default Wrapper;