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

const Voki: React.FC = () => {
    const {isMobile} = useContext<Partial<AdaptiveContextProps>>(AdaptiveContext);
    const {getVoki} = useActions();
    const {voki} = useTypedSelector(state => state.voki);

    useEffect(() => {
        document.title = 'СушиВесла - Воки'
        getVoki()
    }, [])

    return (<>
            {isMobile && <Container>
                <Text fontSize='17px' lineHeight='24px' fontWeight='bold' color='darkGrey'>Воки</Text>
            </Container>}
            <Grid>
                {voki.map(vok => <Item key={vok.id} image={vok.image} header={vok.name}
                                       description={vok.description} price={vok.price}
                                       weight={vok.weight} $backgroundColor={vok.color}/>)}
            </Grid>
        </>
    );
}

export default Voki;
