import React from 'react';
import styled from "styled-components";

const StyledEggIcon = styled.svg<EggIconProps>`
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : ''};
`

interface EggIconProps {
    margin?: string;
    padding?: string;
}

const EggIcon: React.FC<EggIconProps> = ({margin, padding}) => {
    return (
        <StyledEggIcon margin={margin} padding={padding} xmlns="http://www.w3.org/2000/svg" width="17" height="18"
                       viewBox="0 0 17 18">
            <defs>
                <linearGradient id="a" x1="77.907%" x2="19.092%" y1="8.74%" y2="90.154%">
                    <stop offset="0%" stopColor="#FB9A59"/>
                    <stop offset="100%" stopColor="#F5612D"/>
                </linearGradient>
            </defs>
            <g fill="none" transform="matrix(-1 0 0 1 17 .686)">
                <circle cx="8.5" cy="8.5" r="8.5" fill="url(#a)"/>
                <circle cx="10.289" cy="6.711" r="5.816" fill="#F3F52D" opacity=".143"/>
                <circle cx="5.368" cy="5.368" r="2.684" fill="#FFF" opacity=".684"/>
            </g>
        </StyledEggIcon>
    );
};

export default EggIcon;

