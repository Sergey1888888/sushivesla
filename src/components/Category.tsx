import React, {useContext} from 'react';
import {AdaptiveContext} from "../App";
import MobileCategory from "./MobileCategory";
import DesktopCategory from "./DesktopCategory";

interface CategoryProps {

}

const Category: React.FC<CategoryProps> = () => {
    const isMobile = useContext<boolean>(AdaptiveContext);
    return isMobile ? <MobileCategory/> : <DesktopCategory/>
};

export default Category;