import React, {useEffect} from 'react';
import Category from "../components/Category";

const Main: React.FC = () => {
    useEffect(() => {
        document.title = "СушиВесла - Главная"
    }, []);
    return (
        <Category/>
    );
}

export default Main;
