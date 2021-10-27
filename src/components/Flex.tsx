import React from 'react';
import styled from 'styled-components';

export const StyledFlex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'row'};
    flex-wrap: ${({flexWrap}) => flexWrap ? flexWrap : 'nowrap'};
    flex-grow: ${({flexGrow}) => flexGrow ? flexGrow : ''};
    justify-content: ${({$justifyContent}) => $justifyContent ? $justifyContent : 'flex-start'};
    align-items: ${({$alignItems}) => $alignItems ? $alignItems : 'flex-start'};
    width: ${({width}) => width ? width : ''};
    height: ${({height}) => height ? height : ''};
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};  
`

interface FlexProps {
    flexDirection?: string;
    flexWrap?: string;
    flexGrow?: string;
    $justifyContent?: string;
    $alignItems?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    cursor?: string;
}

const Flex: React.FC<FlexProps> = ({children, ...props}) => {
    return (
        <StyledFlex {...props}>
            {children}
        </StyledFlex>
    );
};

export default Flex;