import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";

import LOGO from "../../images/freetogame.webp";

import { Layout, Space } from 'antd';
import styles from "../../styles/Header.module.css"

const Header = () => {
    return (
        <Layout className={styles.headerStyle}>
            <Space>
                <div>
                    <Link to={ROUTES.HOME}>
                        <img src={LOGO} width="70" height="70" alt="logo"/>
                    </Link>
                </div>
                <h2>FREETOGAME</h2>
            </Space>
        </Layout>
    );
};

export default Header;