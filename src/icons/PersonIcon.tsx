import React from 'react';
import styled from "styled-components";

const StyledPersonIcon = styled.svg<PersonIconProps>`
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : ''};
`

interface PersonIconProps {
    margin?: string;
    padding?: string;
}

const PersonIcon: React.FC<PersonIconProps> = ({margin, padding}) => {
    return (
        <StyledPersonIcon margin={margin} padding={padding} xmlns="http://www.w3.org/2000/svg" height="24"
                          viewBox="0 0 24 24" width="17">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill='#999'/>
        </StyledPersonIcon>
    );
};

export default PersonIcon;