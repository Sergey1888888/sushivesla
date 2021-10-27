import React, {useContext} from 'react';
import {AdaptiveContext, AdaptiveContextProps} from "../App";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    const {isMobile} = useContext<Partial<AdaptiveContextProps>>(AdaptiveContext);
    return isMobile ? <MobileHeader/> : <DesktopHeader/>
}

export default Header;