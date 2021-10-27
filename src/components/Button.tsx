import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
    width: ${({width}) => width ? width : ''};
    height: ${({height}) => height ? height : ''};
    font-size: ${({fontSize}) => fontSize ? fontSize : ''};
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : ''};
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : '10px 20px'};
    border: ${({border}) => border ? border : 'none'};
    border-radius: ${({borderRadius}) => borderRadius ? borderRadius : ''};
    box-shadow: ${({boxShadow}) => boxShadow ? boxShadow : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};    
    text-transform: ${({uppercase}) => uppercase ? 'uppercase' : ''};
    color: ${({color, theme}) => color ? theme.colors.text[color] : theme.colors.text.grey};
    background-color: ${({$backgroundColor, theme}) => $backgroundColor ? theme.colors.background[$backgroundColor] : theme.colors.background.white};
    
    &:hover {
        color: ${({hoverColor, theme}) => hoverColor ? theme.colors.text[hoverColor] : ''};
    }
`

interface ButtonProps {
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    cursor?: string;
    uppercase?: boolean;
    color?: 'red' | 'grey' | 'lightRed' | 'white';
    $backgroundColor?: 'blue' | 'red' | 'lightRed' | 'green' | 'white';
    hoverColor?: 'red' | 'grey' | 'lightRed' | 'white';
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;