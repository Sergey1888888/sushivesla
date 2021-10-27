import React from 'react';
import {Switch, Route} from "react-router-dom";
import {useAdaptive} from "./hooks/useAdaptive";
import Main from "./pages/Main";
import Rolls from "./pages/Rolls";
import Sets from "./pages/Sets";
import Salads from "./pages/Salads";
import Sushi from "./pages/Sushi";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Supy from "./pages/Supy";
import Napitki from "./pages/Napitki";
import Tempura from "./pages/Tempura";
import FriedRolls from "./pages/FriedRolls";
import BakedRolls from "./pages/BakedRolls";
import Voki from "./pages/Voki";

export interface AdaptiveContextProps {
    isMobile: boolean;
}

export const AdaptiveContext = React.createContext<Partial<AdaptiveContextProps>>({});

const App = () => {
    const isMobile = useAdaptive();
    if (typeof isMobile === 'undefined') return <></>
    return (
        <AdaptiveContext.Provider value={{isMobile}}>
            <Wrapper>
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => <Main/>}/>
                    <Route path='/rolls' render={() => <Rolls/>}/>
                    <Route path='/fried-rolls' render={() => <FriedRolls/>}/>
                    <Route path='/baked-rolls' render={() => <BakedRolls/>}/>
                    <Route path='/sets' render={() => <Sets/>}/>
                    <Route path='/salads' render={() => <Salads/>}/>
                    <Route path='/sushi' render={() => <Sushi/>}/>
                    <Route path='/supy' render={() => <Supy/>}/>
                    <Route path='/napitki' render={() => <Napitki/>}/>
                    <Route path='/tempura' render={() => <Tempura/>}/>
                    <Route path='/voki' render={() => <Voki/>}/>
                </Switch>
                <Footer/>
            </Wrapper>
        </AdaptiveContext.Provider>
    );
}
export default App;
