import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AdaptiveContext, AdaptiveContextProps} from "../App";
import {useActions} from "../hooks/useActions";
import Item from "../components/Item";
import Text from "../components/Text";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    
    @media screen and (max-width: 1360px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media screen and (max-width: 1180px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1px;
        background-color: ${({theme}) => theme.colors.background.grey};
    }
`

const Container = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.background.grey};
`

const BakedRolls: React.FC = () => {
    const {isMobile} = useContext<Partial<AdaptiveContextProps>>(AdaptiveContext);
    const {getBakedRolls} = useActions();
    const {bakedRolls} = useTypedSelector(state => state.bakedRolls);

    useEffect(() => {
        document.title = "СушиВесла - Запеченные Роллы"
        getBakedRolls()
    }, [])

    return (<>
            {isMobile && <Container>
                <Text fontSize='17px' lineHeight='24px' fontWeight='bold' color='darkGrey'>Запеченные Роллы</Text>
            </Container>
            }
            <Grid>
                {bakedRolls.map(roll => <Item key={roll.id} image={roll.image} header={roll.name}
                                              description={roll.description} count={roll.count} price={roll.price}
                                              weight={roll.weight} $backgroundColor={roll.color}
                                              personCount={roll.personCount}/>)}
            </Grid>
        </>
    )
        ;
}

export default BakedRolls;
