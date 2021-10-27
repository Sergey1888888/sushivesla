import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import MenuIcon from "../icons/MenuIcon";
import FilterIcon from "../icons/FilterIcon";
import BasketIcon from "../icons/BasketIcon";
import Flex from "./Flex";

const StyledMobileHeader = styled.div<MobileHeaderProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 65px;
    padding: 0 20px 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background.white};
`

const Container = styled.div`

`

interface MobileHeaderProps {

}

const MobileHeader: React.FC<MobileHeaderProps> = () => {
    return (
        <StyledMobileHeader>
            <MenuIcon/>
            <Flex flexDirection='column' height='100%' $justifyContent='space-evenly'>
                <Container>
                    <Text fontSize='12px' fontWeight='bold' color='black'>
                        Волгоград
                    </Text>
                    <Text fontSize='12px' fontWeight='bold' margin='2px 0 0 0'>
                        8-800-550-30-30
                    </Text>
                </Container>
                <Text fontSize='12px' color='lightRed' borderBottom='1px dashed'>
                    Условия доставки
                </Text>
            </Flex>
            <Container>
                <FilterIcon/>
                <BasketIcon margin='0 0 2px 25px'/>
            </Container>
        </StyledMobileHeader>
    );
};

export default MobileHeader;