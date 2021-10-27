import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Flex, {StyledFlex} from "./Flex";
import Text, {StyledText} from "./Text";
import Button from "./Button";
import RubleIcon from "../icons/RubleIcon";
import person from "../icons/person.svg";

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 58.3%;
    
    @media screen and (max-width: 1360px) {
        min-width: 41.7%;
    }
    
    @media screen and (max-width: 1180px) {
        & > img {
            width: 90%;
            margin: auto;
            padding: 0;
        }
    }
    
    @media screen and (max-width: 460px) {
        width: 50%;
    }
`

const Container = styled.div`
    width: 100%;
`

const PersonCount = styled.div`
    display: flex;
    align-items: center;
    width: 60px;
    height: 26px;
    border-radius: 15px;
    background-color: rgba(67,67,67,0.1);
    padding: 3px 0 3px 14px;
    margin-bottom: 0.4vw;
`

const StyledItem = styled.div<Pick<ItemProps, '$backgroundColor' | 'price'>>`
    width: 100%;
    height: 13.5vw;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background-color: ${({$backgroundColor, theme}) => $backgroundColor ? $backgroundColor : theme.colors.background.grey};
    
    @media screen and (max-width: 1360px) {
        height: 290px;
        
        & > ${StyledFlex} {
            width: 48.3%;
            padding: 20px 10px 20px 20px;
        }
        
        & > ${ImageContainer} > img {
            max-height: 290px;
        }
        
        & > ${StyledFlex} > ${Container} > ${StyledText}:first-child {
            font-size: 24px;
            line-height: 24px;
        }
        
        & > ${StyledFlex} > ${Container} > ${StyledText}:not(:first-child) {
            font-size: 13px;
            line-height: 16px;
        }
        
        & > ${StyledFlex} > ${Container}:last-child > ${StyledFlex} > ${StyledText} {
            font-size: 24px;
            line-height: 34px;
        }
        
        & > ${StyledFlex} > ${Container}:last-child > ${StyledFlex} > button {
            width: 100px;
            height: 37px;
            padding: 9px 10px;
            font-size: 14px;
        }
    }
    
    @media screen and (max-width: 1180px) {
        height: auto;
        background-color: ${({$backgroundColor, theme}) => $backgroundColor ? $backgroundColor : theme.colors.background.white};
        padding: 10px 15px 0 15px;
        
        & > ${StyledFlex} {
            padding: 0 0 0 10px;
        }
        
        & ${PersonCount} {
            margin-top: 30px;
            margin-bottom: 20px;
        }
        
        & > ${StyledFlex} > ${Container} > ${StyledText}:first-child {
            font-size: 16px;
            line-height: 16px;
        }
        
        & > ${StyledFlex} > ${Container} > ${StyledText}:not(:first-child) {
            font-size: 12px;
            line-height: 14px;
            color: ${({theme}) => theme.colors.text.grey};
        }
        
        & > ${StyledFlex} > ${Container}:last-child > ${StyledFlex} {
            justify-content: ${({price}) => price ? 'space-between' : 'flex-end'};
            margin-bottom: 25px;
        }
        
        & > ${StyledFlex} > ${Container}:last-child > ${StyledFlex} > ${StyledText} {
            color: ${({theme}) => theme.colors.text.lightRed};
            font-size: 17px;
            line-height: 24px;
        }
        
        & > ${StyledFlex} > ${Container}:last-child > ${StyledFlex} > ${StyledText} svg {
            width: 9px;
            height: 9px;
        }
        
        & > ${StyledFlex} > ${Container}:last-child > ${StyledFlex} > ${StyledText} path {
            fill: ${({theme}) => theme.colors.text.lightRed};
        }
        
        & > ${StyledFlex} > ${Container}:last-child > ${StyledFlex} > button {
            width: 80px;
            height: 30px;
            padding: 0;
            font-size: 10px;
        }
    }
`

interface ItemProps {
    $backgroundColor?: string;
    image: string;
    header: string;
    description: string;
    weight?: number | string;
    count?: number;
    personCount?: number;
    price?: number;
}

const Item: React.FC<ItemProps> = ({
                                       $backgroundColor, image, header,
                                       description, weight, count, personCount, price
                                   }) => {
    return (
        <StyledItem $backgroundColor={$backgroundColor} price={price}>
            <ImageContainer>
                <Image width='auto' maxHeight='13.5vw' margin='auto' padding='6px 0' image={image}/>
            </ImageContainer>
            <Flex flexDirection='column' flexGrow='2' padding='0.9vw' $justifyContent='space-between'>
                <Container>
                    <Text fontSize='1.15vw' lineHeight='1.15vw' color='dark'>
                        {header}
                    </Text>
                    <Text display='-webkit-box' fontSize='0.67vw' color='lightDark' margin='5px 0 0 0'
                          overflow='hidden' textOverflow='ellipsis' lineClamp='3' boxOrient='vertical'>
                        {description}
                    </Text>
                    <Text display='inline' fontSize='0.67vw' color='lightDark'>
                        {weight && <>{weight} {typeof weight === 'string' ? 'л.' : 'г.'}г.</>} {count && <>{count} шт.</>}
                    </Text>
                </Container>
                <Container>
                    {personCount && <PersonCount>
                        <Image width='auto' image={person}/>
                        <Text fontSize='14px' fontWeight='bold' color='lightGrey' margin='2px 0 0 6px'>
                            {personCount}
                        </Text>
                    </PersonCount>
                    }
                    <Flex $justifyContent='flex-end' $alignItems='center'>
                        {price && <Text fontSize='1.5vw' color='dark' margin='0 10px 0 0'>
                            {price}<RubleIcon/>
                        </Text>}
                        <Button cursor='pointer' padding='5% 10px' color='white' height='2vw' fontSize='0.7vw'
                                fontWeight='bold'
                                borderRadius='4px' $backgroundColor='lightRed' uppercase>
                            {price ? 'В корзину' : 'Выбрать'}
                        </Button>
                    </Flex>
                </Container>
            </Flex>
        </StyledItem>
    );
};

export default Item;