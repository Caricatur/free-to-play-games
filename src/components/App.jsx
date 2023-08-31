import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getGames} from "../features/games/gamesSlise";

import styles from "../styles/App.module.css";
import AppRoutes from "./Routes/Routes";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Sort from "./Sort/Sort";
import { Layout } from 'antd';
const { Sider, Content } = Layout;

const App = () => {
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState(0);
    const [platformType, setPlatformType] = useState(0);

    const dispatch = useDispatch();

    const option = [categoryId, sortType, platformType]

    useEffect(() => {
        dispatch(getGames(option));

    }, [dispatch, categoryId, sortType, platformType]);

    return <Layout className={styles.bacStyle}>
        <Header />

        <Layout>
            <Sider className={styles.siderStyle}><Sidebar value={categoryId} onClickCategory={(name) => setCategoryId(name)}/></Sider>

            <Content className={styles.contentStyle}><Sort
                value={sortType}
                onChangeSort={(type) => setSortType(type)}
                platform_value={platformType}
                onChangePlatform={(type) => setPlatformType(type)}/>
                <AppRoutes />
            </Content>
        </Layout>

        <Footer />
    </Layout>;
};

export default App;