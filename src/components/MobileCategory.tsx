import React from 'react';
import styled from 'styled-components';
import Text from "./Text";
import Image from "./Image";
import rolls from '../images/rolls_phone.png';
import sets from '../images/sets_phone.png';
import sushi from '../images/sushi_phone.png';
import wok from '../images/wok_phone.png';
import bakedRolls from '../images/baked_rolls_phone.png';
import friedRolls from '../images/fried_rolls_phone.png';
import soups from '../images/soups_phone.png';
import tempura from '../images/tempura_phone.png';
import beverages from '../images/beverages_phone.png';
import sauces from '../images/sauces_phone.png';
import salad from '../images/salad_phone.png';
import {Link} from "react-router-dom";

const StyledMobileCategory = styled.div<MobileCategoryProps>`
    padding: 0 15px;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 50%;
    height: 120px;
`

const StyledLink = styled(Link)<StyledLinkProps>`
    text-decoration: none;
    height: 120px;
    display: flex;
    align-items: center;
    margin: ${({margin}) => margin ? margin : ''};
`

interface StyledLinkProps {
    margin?: string;
}

interface MobileCategoryProps {

}

const MobileCategory: React.FC<MobileCategoryProps> = () => {
    return (
        <StyledMobileCategory>
            <StyledLink to='/rolls' margin='20px 0 0 0'>
                <Container>
                    <Image image={rolls} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Роллы
                </Text>
            </StyledLink>
            <StyledLink to='/sets'>
                <Container>
                    <Image image={sets} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Сеты
                </Text>
            </StyledLink>
            <StyledLink to='/sushi'>
                <Container>
                    <Image image={sushi} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Суши
                </Text>
            </StyledLink>
            <StyledLink to='/voki'>
                <Container>
                    <Image image={wok} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Воки
                </Text>
            </StyledLink>
            <StyledLink to='/baked-rolls'>
                <Container>
                    <Image image={bakedRolls} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Запеченные <br/> роллы
                </Text>
            </StyledLink>
            <StyledLink to='/fried-rolls'>
                <Container>
                    <Image image={friedRolls} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Жареные <br/> роллы
                </Text>
            </StyledLink>
            <StyledLink to='/supy'>
                <Container>
                    <Image image={soups} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Супы
                </Text>
            </StyledLink>
            <StyledLink to='/tempura'>
                <Container>
                    <Image image={tempura} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Темпура
                </Text>
            </StyledLink>
            <StyledLink to='/napitki'>
                <Container>
                    <Image image={beverages} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Напитки
                </Text>
            </StyledLink>
            <StyledLink to='/sauces'>
                <Container>
                    <Image image={sauces} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Соусы
                </Text>
            </StyledLink>
            <StyledLink to='/salads'>
                <Container>
                    <Image image={salad} width='fit-content' margin='0 auto'/>
                </Container>
                <Text fontSize='22px' fontWeight='bold' uppercase color='dark'>
                    Салаты
                </Text>
            </StyledLink>
        </StyledMobileCategory>
    );
};

export default MobileCategory;