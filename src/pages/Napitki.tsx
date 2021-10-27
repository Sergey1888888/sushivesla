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

const Napitki: React.FC = () => {
    const {isMobile} = useContext<Partial<AdaptiveContextProps>>(AdaptiveContext);
    const {getNapitki} = useActions();
    const {napitki} = useTypedSelector(state => state.napitki);

    useEffect(() => {
        document.title = 'СушиВесла - Напитки'
        getNapitki()
    }, [])

    return (<>
            {isMobile && <Container>
                <Text fontSize='17px' lineHeight='24px' fontWeight='bold' color='darkGrey'>Напитки</Text>
            </Container>}
            <Grid>
                {napitki.map(napitok => <Item key={napitok.id} image={napitok.image} header={napitok.name}
                                       description={napitok.description} price={napitok.price}
                                       weight={napitok.weight} $backgroundColor={napitok.color}/>)}
            </Grid>
        </>
    );
}

export default Napitki;
