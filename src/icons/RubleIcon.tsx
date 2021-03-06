import React from 'react';
import styled from 'styled-components';

const StyledRubleIcon = styled.svg<RubleIconProps>`
    display: inline-block;
    height: 1.1vw;
`

interface RubleIconProps {

}

const RubleIcon: React.FC<RubleIconProps> = () => {
    return (
        <StyledRubleIcon width="18" height="23" viewBox="0 0 18 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="банер1-copy" transform="translate(-1578.000000, -413.000000)" fill="#333333">
                    <g id="Group-5" transform="translate(0.000000, 207.000000)" fill="#333333">
                        <g id="Group-4-Copy-6" transform="translate(1526.000000, 195.000000)" fill="#333333">
                            <g id="Group-3" transform="translate(12.000000, 4.000000)" fill="#333333">
                                <path
                                    d="M45.4140625,9.359375 L45.4140625,19.15625 L49.5703125,19.15625 C53.0390625,19.15625 54.9609375,17.265625 54.9609375,14.25 C54.9609375,11.25 53.0546875,9.359375 49.5703125,9.359375 L45.4140625,9.359375 Z M52.0546875,25.96875 L45.4140625,25.96875 L45.4140625,30 L43.2890625,30 L43.2890625,25.96875 L40.1640625,25.96875 L40.1640625,24.3125 L43.2890625,24.3125 L43.2890625,21.03125 L40.1640625,21.03125 L40.1640625,19.15625 L43.2890625,19.15625 L43.2890625,7.453125 L50.0703125,7.453125 C54.3671875,7.453125 57.1484375,10.28125 57.1484375,14.25 C57.1484375,18.234375 54.3515625,21.03125 50.0546875,21.03125 L45.4140625,21.03125 L45.4140625,24.3125 L52.0546875,24.3125 L52.0546875,25.96875 Z"
                                    id="₽" fill="#333333"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </StyledRubleIcon>
    );
};

export default RubleIcon;