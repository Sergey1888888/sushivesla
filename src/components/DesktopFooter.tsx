import React from 'react';
import styled from 'styled-components';
import Flex, {StyledFlex} from "./Flex";
import Image from "./Image";
import Text, {StyledText} from "./Text";
import TiktokIcon from "../icons/TiktokIcon";
import TelegramIcon from "../icons/TelegramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import VkIcon from "../icons/VkIcon";
import InstagramIcon from "../icons/InstagramIcon";
import MarkerIcon from "../icons/MarkerIcon";
import masterCard from "../icons/master-card.svg";
import visa from "../icons/visa.svg";
import googlePlay from "../images/google-play.png"
import appStore from "../images/app-store.png"

const StyledDesktopFooter = styled.div<DesktopFooterProps>`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 61px;
    z-index: 100;
    background-color: ${({theme}) => theme.colors.background.white};
    
    @media screen and (max-width: 1500px) {
        ${StyledText} {
            font-size: 0.8rem;
        }
    }
    
    @media screen and  (max-width: 1360px) {
        & > ${StyledFlex} {
            flex-wrap: wrap;
            justify-content: center;
        }
        
        & > ${StyledFlex} > ${StyledFlex}:last-child {
            margin-left: 20px;
        }
    }
`

const Container = styled.div<ContainerProps>`
    margin: ${({margin}) => margin ? margin : ''};
`

interface ContainerProps {
    margin?: string;
}

interface DesktopFooterProps {

}

const DesktopFooter: React.FC<DesktopFooterProps> = () => {
    return (
        <StyledDesktopFooter>
            <Flex width='calc(100% - 80px)' height='100%' $justifyContent='space-between' $alignItems='center'
                  margin='0 auto'>
                <Flex>
                    <Container>
                        <FacebookIcon/>
                        <VkIcon margin='0 0 0 20px'/>
                        <InstagramIcon margin='0 0 0 20px'/>
                        <TelegramIcon margin='0 0 0 20px'/>
                        <TiktokIcon margin='0 0 0 20px'/>
                    </Container>
                    <Flex $alignItems='center' margin='0 0 0 40px'>
                        <MarkerIcon/>
                        <Text display='inline' fontSize='1rem' hoverColor='lightRed' cursor='pointer'
                              margin='0 0 0 5px'>
                            Ближайшие СушиВесла
                        </Text>
                    </Flex>
                </Flex>
                <Flex margin='0 0 0 5%'>
                    <Text fontSize='1rem' hoverColor='lightRed' cursor='pointer'>
                        Акции
                    </Text>
                    <Text fontSize='1rem' hoverColor='lightRed' cursor='pointer' margin='0 0 0 20px'>
                        Франшиза
                    </Text>
                    <Text fontSize='1rem' hoverColor='lightRed' cursor='pointer' margin='0 0 0 20px'>
                        Вакансии
                    </Text>
                    <Text fontSize='1rem' hoverColor='lightRed' cursor='pointer' margin='0 0 0 20px'>
                        Отзывы
                    </Text>
                    <Text fontSize='1rem' hoverColor='lightRed' cursor='pointer' margin='0 0 0 20px'>
                        Политика обработки персональных данных
                    </Text>
                </Flex>
                <Flex $alignItems='center'>
                    <Image image={masterCard}/>
                    <Image image={visa} margin='0 0 0 5px'/>
                    <Image image={googlePlay} maxHeight='25px' margin='0 0 0 5px'/>
                    <Image image={appStore} maxHeight='25px' margin='0 0 0 5px'/>
                </Flex>
            </Flex>
        </StyledDesktopFooter>
    );
};

export default DesktopFooter;