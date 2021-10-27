import React, {useContext} from 'react';
import {AdaptiveContext, AdaptiveContextProps} from "../App";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    const {isMobile} = useContext<Partial<AdaptiveContextProps>>(AdaptiveContext);
    return isMobile ? <MobileFooter/> : <DesktopFooter/>
};

export default Footer;