import React from 'react';
import styled from "styled-components";

const StyledFacebookIcon = styled.svg<FacebookIconProps>`
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};
    
    &:hover path {
        fill: ${({theme}) => theme.colors.text.lightRed};
    }
`

interface FacebookIconProps {
    margin?: string;
    padding?: string;
    cursor?: string;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({margin, padding, cursor}) => {
    return (
        <StyledFacebookIcon margin={margin} padding={padding} cursor={cursor} xmlns="http://www.w3.org/2000/svg"
                            width="24" height="21" viewBox="0 0 24 24">
            <path fill='#999999'
                  d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </StyledFacebookIcon>
    );
};

export default FacebookIcon;