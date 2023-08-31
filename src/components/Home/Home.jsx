import React from 'react';
import {useSelector} from "react-redux";
import Games from "../Games/Games";
import {store} from "../../features/store";


const Home = () => {
    const { list } = useSelector(({ games}) => games)
    const isLoading = store.getState().game.isLoading

    return (
        <>
            <Games title="Games" products={list} isLoading={isLoading}/>

        </>

    );
};

export default Home;