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

const Tempura: React.FC = () => {
    const {isMobile} = useContext<Partial<AdaptiveContextProps>>(AdaptiveContext);

    const {getTempura} = useActions();
    const {tempura} = useTypedSelector(state => state.tempura);

    useEffect(() => {
        document.title = 'СушиВесла - Темпура'
        getTempura()
    }, [])

    return (<>
            {isMobile && <Container>
                <Text fontSize='17px' lineHeight='24px' fontWeight='bold' color='darkGrey'>Темпура</Text>
            </Container>}
            <Grid>
                {tempura.map(tempura => <Item key={tempura.id} image={tempura.image} header={tempura.name}
                                              description={tempura.description} price={tempura.price}
                                              weight={tempura.weight} count={tempura.count}
                                              personCount={tempura.personCount}/>)}
            </Grid>
        </>
    );
}

export default Tempura;
