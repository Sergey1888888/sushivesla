import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png'

const StyledLogo = styled.img<LogoProps>`
    width: ${({width}) => width ? width : ''};
    margin: ${({margin}) => margin ? margin : ''};
`

interface LogoProps {
    width?: string;
    margin?: string;
}

const Logo: React.FC<LogoProps> = ({width, margin}) => {
    return (
        <StyledLogo src={logo} width={width} margin={margin}/>
    );
};

export default Logo;