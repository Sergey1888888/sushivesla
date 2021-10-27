import React from 'react';
import styled from 'styled-components';

const StyledDesktopWrapper = styled.div<DesktopWrapperProps>`
    width: 100%;
    padding: 89px 35px 61px 35px;
    margin: 0 auto;
`

interface DesktopWrapperProps {

}

const DesktopWrapper: React.FC<DesktopWrapperProps> = ({children}) => {
    return (
        <StyledDesktopWrapper>
            {children}
        </StyledDesktopWrapper>
    );
};

export default DesktopWrapper;