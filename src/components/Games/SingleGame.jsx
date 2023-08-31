import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import {Descriptions, Image, Carousel, Button, Result, Spin} from "antd";
import styles from "../../styles/SingleGame.module.css"


const SingleGame = ({value, changeId, myGame = [], isLoading}) => {
    const { id } = useParams();
    const ChangingId = (id) => {
        changeId(id);
    }
    if (value !== id) {ChangingId(id)};

    return isLoading ? <Spin tip="Loading" size="large" className={styles.spinStyle}/> :
    !myGame ?
        <Result
            title="Failed to load data"
            extra={
                <Button type="primary" key="console">
                    Try again
                </Button>
            }
        />
        : (
            <div>
                <Button type="dashed" className={styles.buttonStyle}><NavLink to={`/`}>Go back</NavLink></Button>
                <span className={styles.cardStyle}>

                    <Image maxWidth={400} src={myGame.thumbnail}/>
                    <h5 className={styles.titleStyle}>{myGame.title}</h5>
                    <Descriptions
                        className={styles.descriptionStyle}
                        items={[
                            {key: '1', label:'genre', children:myGame.genre},
                            {key: '2', label:'publisher', children:myGame.publisher},
                            {key: '3', label:'developer', children:myGame.developer},
                            {key: '5', label:'release_date', children:myGame.release_date}
                        ]}>
                    </Descriptions>
                    {(typeof myGame.minimum_system_requirements !== "undefined") ?
                        <Descriptions
                        title='Minimum system requirements'
                        items={[
                            {key: '1', label:'os', children:myGame.minimum_system_requirements.os},
                            {key: '2', label:'processor', children:myGame.minimum_system_requirements.processor},
                            {key: '3', label:'storage', children:myGame.minimum_system_requirements.storage},
                            {key: '4', label:'memory', children:myGame.minimum_system_requirements.memory},
                            {key: '5', label:'graphics', children:myGame.minimum_system_requirements.graphics},
                        ]}
                        />
                        :
                        <div>Technical requirements are not stated</div>
                    }

                    {(typeof myGame.screenshots !== "undefined") ? (
                        <Carousel className={styles.contentStyle}>
                            <img src={myGame.screenshots[0].image}></img>
                            <img src={myGame.screenshots[1].image}></img>
                            <img src={myGame.screenshots[2].image}></img>
                        </Carousel>)
                        :
                        <div>No images in this game</div>}
                </span>
            </div>
    )
};

export default SingleGame;