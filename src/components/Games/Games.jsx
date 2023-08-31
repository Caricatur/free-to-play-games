import React from 'react';
import { Link } from 'react-router-dom'

import styles from "../../styles/Games.module.css"

import {Button, Card, Result, Typography, Spin} from 'antd';
const { Meta } = Card;
const { Title } = Typography;

const Games = ({title, products = [], isLoading}) => {

    return isLoading ? <Spin tip="Loading" size="large" className={styles.spinStyle}/> :
    !products ?
        <Result
            title="Failed to load data"
            extra={
                <Button type="primary" key="console">
                    Try again
                </Button>
            }
        />
        : (<section>{title && <Title level={2} className={styles.titleStyle}>{title}</Title>}
            <div className={styles.cardStyle}>
                <div className={styles.style1}>
                    {products.map(({id, title, genre, publisher, platform, thumbnail, release_date}) => (

                        <Link to={`/game/${id}`} key={id} className={styles.linkStyle}>
                            <Card
                                hoverable className={styles.hoverableStyle}
                                cover={<img src={thumbnail}/>}
                            >
                                <Meta
                                    title={title}
                                />
                                <p>
                                    <div>{genre}</div>
                                    <div>{platform}</div>
                                    <div>{publisher}</div>
                                    <div>{release_date}</div>
                                </p>
                            </Card>
                        </Link>

                    ))}
                </div>
            </div>

        </section>
    );
};

export default Games;