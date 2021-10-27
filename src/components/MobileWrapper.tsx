import React from 'react';
import styled from 'styled-components';

const StyledMobileWrapper = styled.div<MobileWrapperProps>`
    width: 100%;
    padding-top: 65px;
`

interface MobileWrapperProps {

}

const MobileWrapper: React.FC<MobileWrapperProps> = ({children}) => {
    return (
        <StyledMobileWrapper>
            {children}
        </StyledMobileWrapper>
    );
};

export default MobileWrapper;