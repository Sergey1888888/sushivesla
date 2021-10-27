import React from 'react';
import styled from 'styled-components';

export const StyledImage = styled.img<Omit<ImageProps, "image">>`
    width: ${({width}) => width ? width : '100%'};
    height: ${({height}) => height ? height : ''};
    max-height: ${({maxHeight}) => maxHeight ? maxHeight : '100%'};
    margin: ${({margin}) => margin ? margin : '0'};
    padding: ${({padding}) => padding ? padding : '0'};
    z-index: ${({zIndex}) => zIndex ? zIndex : ''};
    position: ${({position}) => position ? position : 'static'};
    top: ${({top}) => top ? top : ''};
    left: ${({left}) => left ? left : ''};
    right: ${({right}) => right ? right : ''};
    bottom: ${({bottom}) => bottom ? bottom : ''};
    display: ${({display}) => display ? display : 'block'};
`

interface ImageProps {
    image: string;
    height?: string;
    maxHeight?: string;
    width?: string;
    display?: string;
    margin?: string;
    padding?: string;
    position?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    zIndex?: string;
}

const Image: React.FC<ImageProps> = ({
                                         image, height, maxHeight, width, display, margin, padding, position, top,
                                         left, right, bottom, zIndex
                                     }) => {
    return (
        <StyledImage src={image} height={height} maxHeight={maxHeight} width={width} display={display} margin={margin} padding={padding}
                     position={position} top={top} left={left} right={right} bottom={bottom} zIndex={zIndex}/>
    );
};

export default Image;