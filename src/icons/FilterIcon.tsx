import React from 'react';
import styled from "styled-components";

const StyledFilterIcon = styled.svg<FilterIconProps>`
    margin: ${({margin}) => margin ? margin : ''};
    padding: ${({padding}) => padding ? padding : ''};
    cursor: ${({cursor}) => cursor ? cursor : ''};
`

interface FilterIconProps {
    margin?: string;
    padding?: string;
    cursor?: string;
}

const FilterIcon: React.FC<FilterIconProps> = ({margin, padding, cursor}) => {
    return (
        <StyledFilterIcon margin={margin} padding={padding} cursor={cursor} xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <circle cx="12" cy="12" r="12" fill="#EFEFF4"/>
                <path stroke="#979797"
                      d="M19 8.989v-1.8a.221.221 0 0 0-.005-.048C18.865 5.751 15.31 5 12 5s-6.862.75-6.994 2.14A.2.2 0 0 0 5 7.19v1.799a.19.19 0 0 0 .07.152l5.085 3.873v6.681c0 .057.022.11.06.145a.133.133 0 0 0 .09.035.112.112 0 0 0 .043-.008l3.392-1.26c.062-.023.105-.092.105-.172v-5.421l5.086-3.873A.191.191 0 0 0 19 8.989z"
                      fill="none"/>
            </g>
        </StyledFilterIcon>
    );
};

export default FilterIcon;
