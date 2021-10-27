import React from 'react';
import styled from "styled-components";

const StyledTiktokIcon = styled.svg<TiktokIconProps>`
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};
`

interface TiktokIconProps {
    margin?: string;
    padding?: string;
    cursor?: string;
}

const TiktokIcon: React.FC<TiktokIconProps> = ({margin, padding, cursor}) => {
    return (
        <StyledTiktokIcon margin={margin} padding={padding} cursor={cursor} xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 22 22" width="22" height="20">
            <path
                d="M20.41 0H1.59A1.59 1.59 0 0 0 0 1.59v18.82A1.59 1.59 0 0 0 1.59 22h18.82A1.59 1.59 0 0 0 22 20.41V1.59A1.59 1.59 0 0 0 20.41 0zm-3.9 8.42v1.49a5.17 5.17 0 0 1-2-.41 5.56 5.56 0 0 1-1.16-.67v4.58a3.9 3.9 0 0 1-1.15 2.73 4 4 0 0 1-2.2 1.09 4.05 4.05 0 0 1-3-.77c-.13-.1-.25-.21-.37-.32a3.86 3.86 0 0 1-1.14-3 3.78 3.78 0 0 1 1-2.32A4 4 0 0 1 10 9.55v2.08a1.92 1.92 0 0 0-.59-.09A1.85 1.85 0 0 0 8.47 15a1.88 1.88 0 0 0 .85.26 2 2 0 0 0 .69-.09 1.86 1.86 0 0 0 1.27-1.76V4.73h2.05a2.88 2.88 0 0 0 .06.59 3.17 3.17 0 0 0 3.11 2.55v.55z"
                fill="#999999"/>
        </StyledTiktokIcon>
    );
};

export default TiktokIcon;