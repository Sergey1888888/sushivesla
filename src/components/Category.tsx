import React, {useContext} from 'react';
import {AdaptiveContext, AdaptiveContextProps} from "../App";
import MobileCategory from "./MobileCategory";
import DesktopCategory from "./DesktopCategory";

interface CategoryProps {

}

const Category: React.FC<CategoryProps> = () => {
    const {isMobile} = useContext<Partial<AdaptiveContextProps>>(AdaptiveContext);
    return isMobile ? <MobileCategory/> : <DesktopCategory/>
};

export default Category;