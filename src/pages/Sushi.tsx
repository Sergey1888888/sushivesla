import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AdaptiveContext} from "../App";
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

const Sushi: React.FC = () => {
    const isMobile = useContext<boolean>(AdaptiveContext);
    const {getSushi} = useActions();
    const {sushi} = useTypedSelector(state => state.sushi);

    useEffect(() => {
        document.title = 'СушиВесла - Суши'
        getSushi()
    }, [])

    return (<>
            {isMobile && <Container>
                <Text fontSize='17px' lineHeight='24px' fontWeight='bold' color='darkGrey'>Суши</Text>
            </Container>}
            <Grid>
                {sushi.map(sushi => <Item key={sushi.id} image={sushi.image} header={sushi.name}
                                          description={sushi.description} price={sushi.price}
                                          weight={sushi.weight}/>)}
            </Grid>
        </>
    );
}

export default Sushi;
