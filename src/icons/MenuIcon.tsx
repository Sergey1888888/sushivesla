import React from 'react';
import styled from "styled-components";

const StyledMenuIcon = styled.svg<MenuIconProps>`
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};
`

interface MenuIconProps {
    margin?: string;
    padding?: string;
    cursor?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({margin, padding, cursor}) => {
    return (
        <StyledMenuIcon margin={margin} padding={padding} cursor={cursor} xmlns="http://www.w3.org/2000/svg"
                        width="23" height="19" viewBox="0 0 23 19">
            <path d="M.293 9.5h21.711m-21.711 8h15.844M.293 1.5h15.844" stroke="#9B9B9B" strokeWidth="3" fill="none"
                  strokeLinecap="round" strokeLinejoin="round"/>
        </StyledMenuIcon>
    );
};

export default MenuIcon;
