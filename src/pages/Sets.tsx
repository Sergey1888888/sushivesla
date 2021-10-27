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

const Sets: React.FC = () => {
    const {isMobile} = useContext<Partial<AdaptiveContextProps>>(AdaptiveContext);
    const {getSets} = useActions();
    const {sets} = useTypedSelector(state => state.sets);

    useEffect(() => {
        document.title = 'СушиВесла - Сеты'
        getSets()
    }, [])

    return (<>
            {isMobile && <Container>
                <Text fontSize='17px' lineHeight='24px' fontWeight='bold' color='darkGrey'>Сеты</Text>
            </Container>}
            <Grid>
                {sets.map(set => <Item key={set.id} image={set.image} header={set.name}
                                       description={set.description} count={set.count} price={set.price}
                                       weight={set.weight} $backgroundColor={set.color}
                                       personCount={set.personCount}/>)}
            </Grid>
        </>
    );
}

export default Sets;
