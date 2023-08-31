import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from "../Home/Home";
import {ROUTES} from "../../utils/routes";
import SingleGame from "../Games/SingleGame";
import {useDispatch, useSelector} from "react-redux";
import {getGame} from "../../features/api/apiSlice";
import {store} from "../../features/store";

const AppRoutes = () => {
    const [currGame, setCurrGame] = useState(540)
    const dispatch = useDispatch();
    const {myGame} = useSelector(({game}) => game);

    useEffect(() => {
        dispatch(getGame(currGame));

    }, [dispatch, currGame]);

    const gameList = store.getState().game

    useEffect(() => {
        setCurrGame(currGame)
        }, [myGame])

    return (
        <Routes>
            <Route index element={<Home />}/>
            <Route path={ROUTES.GAME} element={<SingleGame value={currGame} changeId={(name) => setCurrGame(name)} myGame={gameList.list} isLoading={gameList.isLoading}/>} />

        </Routes>
    );
};

export default AppRoutes;