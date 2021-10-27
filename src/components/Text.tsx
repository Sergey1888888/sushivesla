import React from 'react';
import styled from 'styled-components';

export const StyledText = styled.div<TextProps>`
    width: ${({width}) => width ? width : ''};
    height: ${({height}) => height ? height : ''};
    display: ${({display}) => display ? display : 'block'};
    font-size: ${({fontSize}) => fontSize ? fontSize : '13px'};
    line-height: ${({lineHeight}) => lineHeight ? lineHeight : ''};
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '400'};
    color: ${({color, theme}) => color ? theme.colors.text[color] : theme.colors.text.grey};
    margin: ${({margin}) => margin ? margin : 0};
    padding: ${({padding}) => padding ? padding : 0};
    text-transform: ${({uppercase}) => uppercase ? 'uppercase' : ''};
    text-align: ${({textAlign}) => textAlign ? textAlign : ''};
    border-bottom: ${({borderBottom}) => borderBottom ? borderBottom : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};
    transition: ${({transition}) => transition ? transition : ''};
    overflow: ${({overflow}) => overflow ? overflow : ''};
    text-overflow: ${({textOverflow}) => textOverflow ? textOverflow : ''};
    white-space: ${({whiteSpace}) => whiteSpace ? whiteSpace : ''};
    -webkit-line-clamp: ${({lineClamp}) => lineClamp ? lineClamp : ''};
    -webkit-box-orient: ${({boxOrient}) => boxOrient ? boxOrient : ''};
    
    &:hover {
        color: ${({hoverColor, theme}) => hoverColor ? theme.colors.text[hoverColor] : ''};
    }
`

interface TextProps {
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: '400' | 'bold';
    lineHeight?: string;
    display?: string;
    color?: 'red' | 'grey' | 'lightRed' | 'white' | 'black' | 'dark' | 'lightDark' | 'lightGrey' | 'darkGrey' | 'inherit';
    margin?: string;
    padding?: string;
    uppercase?: boolean;
    textAlign?: string;
    borderBottom?: string;
    cursor?: string;
    hoverColor?: 'red' | 'grey' | 'lightRed' | 'white' | 'black' | 'dark' | 'lightDark' | 'lightGrey' | 'darkGrey';
    transition?: string;
    overflow?: string;
    textOverflow?: string;
    whiteSpace?: string;
    lineClamp?: string;
    boxOrient?: string;
}

const Text: React.FC<TextProps> = ({children, ...props}) => {
    return (
        <StyledText {...props}>
            {children}
        </StyledText>
    );
};

export default Text;