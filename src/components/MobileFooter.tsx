import React from 'react';
import styled from 'styled-components';
import Flex from "./Flex";
import FacebookIcon from "../icons/FacebookIcon";
import VkIcon from "../icons/VkIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TiktokIcon from "../icons/TiktokIcon";
import Button from "./Button";
import Image from "./Image";
import Text from "./Text";
import ru from "../icons/ru.svg"
import masterCard from "../icons/master-card.svg";
import visa from "../icons/visa.svg";

const StyledMobileFooter = styled.div<MobileFooterProps>`
    width: 100%;
    margin-top: 20px;
    padding: 0 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background.white};
    
    & svg + svg {
        margin-left: 20px;
    }
`

interface MobileFooterProps {

}

const MobileFooter: React.FC<MobileFooterProps> = () => {
    return (
        <StyledMobileFooter>
            <Flex height='32px' $alignItems='center' $justifyContent='center'>
                <FacebookIcon/>
                <VkIcon/>
                <InstagramIcon/>
                <TelegramIcon/>
                <TiktokIcon/>
            </Flex>
            <Button fontSize='16px' padding='0' margin='5px 0'>
                <Flex>
                    <Image image={ru} margin='0 5px 0 0'/>RU
                </Flex>
            </Button>
            <Flex flexWrap='wrap' height='90px' $alignItems='center' $justifyContent='center' width='100%'>
                <Text width='100%' fontSize='0.8rem' hoverColor='lightRed' cursor='pointer'>
                    Пользовательское соглашение
                </Text>
                <Text width='100%' fontSize='0.8rem' hoverColor='lightRed' cursor='pointer'>
                    Политика обработки персональных данных
                </Text>
                <Text width='100%' fontSize='0.8rem' hoverColor='lightRed' cursor='pointer'>
                    Франшиза
                </Text>
            </Flex>
            <Flex $alignItems='flex-end'>
                <Image image={visa} margin='0 0 2px 0'/>
                <Image image={masterCard} margin='0 0 0 10px'/>
            </Flex>
        </StyledMobileFooter>
    );
};

export default MobileFooter;