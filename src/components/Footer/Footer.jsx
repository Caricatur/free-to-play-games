import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import LOGO from "../../images/freetogame.webp";

import { Layout} from 'antd';
import styles from "../../styles/Footer.module.css"

const Footer = () => {
    return (
        <Layout className={styles.footerStyle}>
            Выполнено в рамках тестового задания отбора на стажировку в Avito
            <div>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} width="70" height="70" alt="logo"/>
                </Link>
            </div>
            <div>Developed by Anastasia Schedrina</div>
            <div>2023</div>

        </Layout>
    );
};

export default Footer;