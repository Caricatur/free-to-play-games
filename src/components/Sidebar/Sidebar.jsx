import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import styles from "../../styles/Sidebar.module.css"
import {FolderTwoTone } from '@ant-design/icons'
import { Typography, Layout } from 'antd';
const {Text} = Typography;

const categories_list  = ['all','mmorpg', 'shooter', 'strategy',
    'moba', 'racing', 'sports', 'social', 'sandbox',
    'open-world', 'survival', 'pvp', 'pve', 'pixel',
    'voxel', 'zombie', 'turn-based', 'first-person',
    'third-Person', 'top-down', 'tank', 'space', 'sailing',
    'side-scroller', 'superhero', 'permadeath', 'card',
    'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d',
    'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg',
    'action', 'military', 'martial-arts', 'flight',
    'low-spec', 'tower-defense', 'horror', 'mmorts'];

const Sidebar = ({value, onClickCategory}) => {
    return (
        <Layout className={styles.siderStyle}>
                <Text className={styles.titleStyle}>CATEGORIES</Text>
                <Text>
                    <ul className={styles.decorationStyle}>
                        {categories_list.map((name) => (
                            <li
                                key={name}
                                onClick={() => onClickCategory(name)}
                                className={value === name ? 'active' : ''}>
                                <FolderTwoTone />
                                <NavLink to={`/`}> {name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </Text>
        </Layout>
    );
};

export default Sidebar;