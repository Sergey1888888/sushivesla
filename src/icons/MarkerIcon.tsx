import React from 'react';
import styled from "styled-components";

const StyledMarkerIcon = styled.svg<MarkerIconProps>`
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};
    
    &:hover path {
        fill: ${({theme}) => theme.colors.text.lightRed};
    }
`

interface MarkerIconProps {
    margin?: string;
    padding?: string;
    cursor?: string;
}

const MarkerIcon: React.FC<MarkerIconProps> = ({margin, padding, cursor}) => {
    return (
        <StyledMarkerIcon margin={margin} padding={padding} cursor={cursor} xmlns="http://www.w3.org/2000/svg"
                             width="22" height="21" viewBox="0 0 438.536 438.536">
            <g>
                <path fill='#999999' d="M322.621,42.825C294.073,14.272,259.619,0,219.268,0c-40.353,0-74.803,14.275-103.353,42.825
		c-28.549,28.549-42.825,63-42.825,103.353c0,20.749,3.14,37.782,9.419,51.106l104.21,220.986
		c2.856,6.276,7.283,11.225,13.278,14.838c5.996,3.617,12.419,5.428,19.273,5.428c6.852,0,13.278-1.811,19.273-5.428
		c5.996-3.613,10.513-8.562,13.559-14.838l103.918-220.986c6.282-13.324,9.424-30.358,9.424-51.106
		C365.449,105.825,351.176,71.378,322.621,42.825z M270.942,197.855c-14.273,14.272-31.497,21.411-51.674,21.411
		s-37.401-7.139-51.678-21.411c-14.275-14.277-21.414-31.501-21.414-51.678c0-20.175,7.139-37.402,21.414-51.675
		c14.277-14.275,31.504-21.414,51.678-21.414c20.177,0,37.401,7.139,51.674,21.414c14.274,14.272,21.413,31.5,21.413,51.675
		C292.355,166.352,285.217,183.575,270.942,197.855z"/>
            </g>
        </StyledMarkerIcon>
    );
};

export default MarkerIcon;