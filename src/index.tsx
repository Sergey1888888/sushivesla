import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import GilroyRegular from './fonts/Gilroy-Regular.woff';
import GilroyBold from './fonts/Gilroy-Bold.woff';
import {store} from "./store";

const Global = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        src: local('Gilroy'),
        url(${GilroyRegular}) format('woff');
        font-weight: 400;
    }
    
    @font-face {
        font-family: 'Gilroy';
        src: local('Gilroy'),
        url(${GilroyBold}) format('woff');
        font-weight: 700;
    }
    
    *, *:after, *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Gilroy","PT Sans",sans-serif;
        user-select: none;
        -webkit-user-drag: none;
    }
    
    body::-webkit-scrollbar {
        display: none;
    }

    body {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`

const theme = {
    colors: {
        text: {
            black: '#000',
            dark: '#333333',
            lightDark: '#666666',
            grey: '#999999',
            lightGrey: '#9b9b9b',
            darkGrey: '#4a4a4a',
            lightRed: '#eb1f40',
            red: '#f32b2b',
            white: '#fff'
        },
        background: {
            blue: '#8ed8f7',
            red: '#f32b2b',
            lightRed: '#eb1f40',
            green: '#9fe48b',
            white: '#fff',
            grey: '#efeff4'
        }
    },
}


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Global/>
                    <App/>
                </Router>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);