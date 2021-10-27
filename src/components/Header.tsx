import React, {useContext} from 'react';
import {AdaptiveContext} from "../App";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    const isMobile = useContext<boolean>(AdaptiveContext);
    return isMobile ? <MobileHeader/> : <DesktopHeader/>
}

export default Header;