import React from 'react';
import styled from 'styled-components';
import Column from "./Column";
import sets from "../images/sets.png";
import rolls from "../images/rolls.png";
import sushi from "../images/sushi.png";
import friedRolls from "../images/fried_rolls.png";
import bakedRolls from "../images/baked_rolls.png";
import pattern from "../images/pattern.png";
import leaf from "../images/leaf.png";
import wokTopLeaf from "../images/wok_top_leaf.png";
import wokBottomLeaf from "../images/wok_bottom_leaf.png";
import wok from "../images/wok.png";
import soupsShadows from "../images/soups_shadows.png";
import soups from "../images/soups.png";
import soupPattern from "../images/soup_pattern.png";
import beverages from "../images/beverages.png";
import tempura from "../images/tempura.png";
import Text from "./Text";
import Image, {StyledImage} from "./Image";
import {NavLink} from "react-router-dom";

const StyledDesktopCategory = styled.div<DesktopCategoryProps>`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 41.3vw;
`

const Row = styled(NavLink)<RowProps>`
    display: ${({display}) => display ? display : 'block'};
    justify-content: ${({$justifyContent}) => $justifyContent ? $justifyContent : ''};
    align-items: ${({$alignItems}) => $alignItems ? $alignItems : ''};
    width: 100%;
    height: ${({height}) => height ? height : '100%'};
    background-color: ${({$backgroundColor, theme}) => $backgroundColor && theme.colors.background[$backgroundColor]};
    background: ${({background}) => background ? background : ''};
    background-size: ${({$backgroundSize}) => $backgroundSize ? $backgroundSize : ''};
    background-position-y: ${({$backgroundPositionY}) => $backgroundPositionY ? $backgroundPositionY : ''};
    background-position-x: ${({$backgroundPositionX}) => $backgroundPositionX ? $backgroundPositionX : ''};
    transition: ${({transition}) => transition ? transition : ''};
    overflow: ${({overflow}) => overflow ? overflow : ''};
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
        ${({$hoverStyle}) => $hoverStyle ? $hoverStyle : ''}
    }
    
    ${StyledImage} {
        transition: ${({transition}) => transition ? transition : ''};
        transform: ${({transform}) => transform ? transform : ''};
    }
    &:hover ${StyledImage} {
        transform: ${({$transformHover}) => $transformHover ? $transformHover : ''};
    }
`

const Container = styled.div<ContainerProps>`
    display: ${({display}) => display ? display : 'inline-block'};;
    vertical-align: top;
    height: ${({height}) => height ? height : ''};
    width: ${({width}) => width ? width : '50%'};
    background-color: ${({$backgroundColor, theme}) => $backgroundColor && theme.colors.background[$backgroundColor]};
`

interface ContainerProps {
    height?: string;
    width?: string;
    $backgroundColor?: string;
    display?: string;
}

interface RowProps {
    display?: string;
    $justifyContent?: string;
    $alignItems?: string;
    transition?: string;
    overflow?: string;
    transform?: string;
    $transformHover?: string;
    $hoverStyle?: string;
    height?: string;
    background?: string;
    $backgroundSize?: string;
    $backgroundPositionY?: string;
    $backgroundPositionX?: string;
    $backgroundColor?: 'blue' | 'red' | 'green' | 'white';
}

interface DesktopCategoryProps {

}

const DesktopCategory: React.FC<DesktopCategoryProps> = () => {
    return (
        <StyledDesktopCategory>
            <Column $backgroundColor='blue' zIndex='10' position='relative' overflow='visible'>
                <Image zIndex='100' image={leaf} width='22%' position='absolute' top='19.5%' right='-13%'/>
                <Row to='/sets' transform='translateY(-7.9%)' $transformHover='translateY(-0.5%)'
                     transition='transform 1s'>
                    <Image image={sets} margin='0 0 -10% 0' width='90%'/>
                    <Text color='white' fontSize='3.5vw' fontWeight='bold' uppercase margin='1% 0 0 15%'>
                        Сеты
                    </Text>
                </Row>
            </Column>
            <Column $backgroundColor='red' position='relative'>
                <Row to='/rolls' height='fit-content' display='flex' $alignItems='center' transform='translateX(-16%)'
                     $transformHover='translateX(8%)' transition='transform 1s'>
                    <Image image={rolls} margin='2% 0 0 0' width='50%' display='inline-block'/>
                    <Text display='inline-block' color='white' fontSize='1.5vw' fontWeight='bold' uppercase
                          padding='0 0 5% 7%'>
                        Роллы
                    </Text>
                </Row>
                <Row to='/sushi' height='fit-content' display='flex' $justifyContent='space-between'
                     $alignItems='center'
                     transform='translateX(41%)' $transformHover='translateX(15%)' transition='transform 1s'>
                    <Text display='inline-block' color='white' fontSize='1.5vw' fontWeight='bold' uppercase
                          padding='0 0 7% 24.5%'>
                        Суши
                    </Text>
                    <Image image={sushi} margin='-6% 0 0 0' width='50%' display='inline-block'/>
                </Row>
                <Row to='/fried-rolls' height='fit-content' display='flex' $alignItems='center'
                     transform='translateX(-20%)'
                     $transformHover='translateX(8%)' transition='transform 1s'>
                    <Image image={friedRolls} margin='-6% 0 0 0' width='50%' display='inline-block'/>
                    <Text display='inline-block' color='white' fontSize='1.2vw' fontWeight='bold' uppercase
                          padding='0 0 5% 7%' lineHeight='1.7vw'>
                        Жареные<br/>роллы
                    </Text>
                </Row>
                <Row to='/baked-rolls' height='fit-content' display='flex' $justifyContent='space-between'
                     $alignItems='center'
                     transform='translateX(24.5%)' $transformHover='translateX(0%)' transition='transform 1s'>
                    <Text display='inline-block' color='white' fontSize='1.2vw' fontWeight='bold' uppercase
                          padding='0 0 10% 11.5%' textAlign='right' lineHeight='1.7vw'>
                        Запеченные<br/>роллы
                    </Text>
                    <Image image={bakedRolls} margin='-6% 0 0 0' width='50%' display='inline-block'/>
                </Row>
                <Image zIndex='100' image={pattern} width='30%' position='absolute' bottom='4%' left='-15%'/>
            </Column>
            <Column position='relative' zIndex='10'>
                <Row to='/voki' height='100%' background={`#fff url(${wok}) no-repeat`} $backgroundPositionY='bottom'
                     $backgroundPositionX='-2vw'
                     $backgroundSize='144%' $hoverStyle='background-position-x: 0'
                     transition='background-position-x 1s'>
                    <Image image={wokTopLeaf} width='27%' margin='0 auto'/>
                    <Text color='red' fontSize='3.5vw' lineHeight='3.5vw' fontWeight='bold' uppercase
                          padding='9% 10% 0 10%'
                          margin='-20% 0 0 0'>
                        Вок<br/>Конструк<br/>Тор
                    </Text>
                    <Text color='red' fontSize='1vw' lineHeight='1vw' fontWeight='bold' uppercase
                          padding='10% 10% 0 10%'
                          margin='-9% 0 0 0'>
                        Собери свой
                    </Text>
                    <Image image={wokBottomLeaf} position='absolute' width='27%' right='0' bottom='0'/>
                </Row>
            </Column>
            <Column $backgroundColor='green' position='relative'>
                <Row to='/supy' height='50%' $backgroundColor='red'
                     background={`#f32b2b url(${soupsShadows}) no-repeat`}
                     $backgroundSize='106%' transform='rotate(-15deg)' $transformHover='rotate(-45deg)'
                     transition='all 1s'>
                    <Image display='inline' image={soups} width='82%' margin='-20.5% 0 0 10.5%'/>
                    <Text fontSize='3.5vw' fontWeight='bold' color='white' uppercase padding='2% 0 0 13%'>
                        Супы
                    </Text>
                </Row>
                <Container height='50%' width='100%' $backgroundColor='green'>
                    <Row to='/tempura' height='50%' transform='translateX(-20%)' $transformHover='translateX(20%)'
                         transition='all 1s'>
                        <Container>
                            <Image image={tempura} width='75%' margin='6% 0 0 0'/>
                        </Container>
                        <Container height='50%'>
                            <Text display='block' color='red' textAlign='right' fontSize='1.8vw' fontWeight='bold'
                                  uppercase
                                  padding='35% 14% 0 0'>
                                Темпура
                            </Text>
                        </Container>
                    </Row>
                    <Row to='/napitki' height='50%' transform='translateY(0)' $transformHover='translateY(-20%)'
                         transition='all 1s'>
                        <Container height='50%'>
                            <Text display='block' color='red' textAlign='right' fontSize='1.8vw' fontWeight='bold'
                                  uppercase
                                  padding='20% 7% 0 0'>
                                Напитки
                            </Text>
                        </Container>
                        <Container>
                            <Image image={beverages} width='11vw' margin='0 0 0 10%'/>
                        </Container>
                    </Row>
                </Container>
                <Image image={soupPattern} width='23%' position='absolute' top='41%' right='0'/>
            </Column>
        </StyledDesktopCategory>
    );
};

export default DesktopCategory;