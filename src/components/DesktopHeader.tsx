import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link, NavLink, useLocation} from "react-router-dom";
import Logo from "./Logo";
import Flex, {StyledFlex} from "./Flex";
import Text, {StyledText} from "./Text";
import PersonIcon from "../icons/PersonIcon";
import Button from "./Button";
import EggIcon from "../icons/EggIcon";
import BasketIcon from "../icons/BasketIcon";

const StyledDesktopHeader = styled.header<DesktopHeaderProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 89px;
    z-index: 100;
    background-color: ${({theme}) => theme.colors.background.white};
    
    @media screen and (max-width: 1440px) {
        ${StyledFlex} > button {
            display: none;
        }
    }
`

const StyledLink = styled(Link)`
    min-width: 13.5vw;
    flex-grow: 1;
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 6px 20px;
    border-radius: 19px;
    
    &.active > ${StyledText} {
        color: ${({theme}) => theme.colors.text.white};
    }
    
    &.active {
        background-color: ${({theme}) => theme.colors.text.lightRed};
    }
    
    @media screen and (max-width: 1440px) {
        & > ${StyledText} {
            font-size: 13px;
        }
    }
`

const StyledTelLink = styled.a`
    text-decoration: none;
    width: max-content;
    font-size: 13px;
    color: ${({theme}) => theme.colors.text.grey};
    transition: color 0.5s;
    &:hover {
        color: ${({theme}) => theme.colors.text.lightRed};
    }
`

const Container = styled.div`
    
`

interface DesktopHeaderProps {

}

const DesktopHeader: React.FC = () => {
    const [isMainPage, setIsMainPage] = useState<boolean>(true);
    const location = useLocation();

    useEffect(() => {
        location.pathname === '/' ? setIsMainPage(true) : setIsMainPage(false);
    }, [location])

    return (
        <StyledDesktopHeader>
            <Flex width='calc(100% - 80px)' $justifyContent='space-between' height='86px' $alignItems='center'
                  margin='0 auto'>
                <Flex $justifyContent='space-between' $alignItems='center' width='min-content'>
                    <StyledLink to='/'>
                        <Logo width='100%' margin='3% 0 0 0'/>
                    </StyledLink>
                    <Flex flexDirection='column' margin='0 0 0 34px'>
                        <Flex height='30px' $alignItems='flex-end'>
                            <Text margin='0 8px 0 0' hoverColor='lightRed' transition='color 0.5s' cursor='pointer'>
                                Волгоград
                            </Text>
                            <StyledTelLink href='tel:8-800-550-30-30'>
                                8-800-550-30-30
                            </StyledTelLink>
                        </Flex>
                        <Flex height='30px' $justifyContent='space-between' $alignItems='flex-end' cursor='pointer'>
                            <Text hoverColor='lightRed' fontWeight='bold'>
                                Личный кабинет
                                <PersonIcon margin='0 0 -6px 8px'/>
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                {!isMainPage &&
                <Flex height='100%' $justifyContent='flex-end' $alignItems='center' width='100%' margin='0 20px'>
                    <StyledNavLink to='/sets'>
                        <Text hoverColor='lightRed' fontSize='16px'>Сеты</Text>
                    </StyledNavLink>
                    <StyledNavLink to='/rolls'>
                        <Text hoverColor='lightRed' fontSize='16px'>Роллы</Text>
                    </StyledNavLink>
                    <StyledNavLink to='/sushi'>
                        <Text hoverColor='lightRed' fontSize='16px'>Суши</Text>
                    </StyledNavLink>
                    <StyledNavLink to='/salads'>
                        <Text hoverColor='lightRed' fontSize='16px'>Салаты</Text>
                    </StyledNavLink>
                </Flex>}
                <Flex height='100%' $justifyContent='flex-end' $alignItems='center' width='100%'>
                    <Container>
                        <Text display='inline' hoverColor='lightRed' transition='color 0.5s' cursor='pointer'>
                            О компании
                        </Text>
                        <Text display='inline' margin='0 0 0 15px' hoverColor='lightRed' transition='color 0.5s'
                              cursor='pointer'>
                            Условия доставки
                        </Text>
                        <br/>
                        <Text display='inline-block' margin='10px 0 0 15px' hoverColor='lightRed'
                              transition='color 0.5s' cursor='pointer'>
                            Пользовательское соглашение
                        </Text>
                    </Container>
                    <Button fontSize='15px' borderRadius='19px' boxShadow='0 2px 4px 0 rgb(0 0 0 / 10%)'
                            hoverColor='lightRed' cursor='pointer' margin='-10px 0 0 30px'>
                        <Flex>
                            Икринки<EggIcon margin='0 0 0 15px'/>
                        </Flex>
                    </Button>
                    <Flex>
                        <BasketIcon margin='-10px 0 0 60px' cursor='pointer'/>
                    </Flex>
                </Flex>
            </Flex>
        </StyledDesktopHeader>
    );
};

export default DesktopHeader;