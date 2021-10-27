import React from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div<ColumnProps>`
    background-color: ${({$backgroundColor, theme}) => $backgroundColor && theme.colors.background[$backgroundColor]};
    position: ${({position}) => position ? position : 'static'};
    z-index: ${({zIndex}) => zIndex ? zIndex : '1'};
    height: 100%;
    overflow: ${({overflow}) => overflow ? overflow : 'hidden'};
`

interface ColumnProps {
    $backgroundColor?: 'blue' | 'red' | 'green' | 'white';
    position?: string;
    zIndex?: string;
    overflow?: string;
}

const Column: React.FC<ColumnProps> = ({$backgroundColor, position, zIndex, overflow, children}) => {
    return (
        <StyledColumn $backgroundColor={$backgroundColor} position={position} zIndex={zIndex} overflow={overflow}>
            {children}
        </StyledColumn>
    );
};

export default Column;