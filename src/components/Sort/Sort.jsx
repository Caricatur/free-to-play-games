import React, {useState} from 'react';

import styles from "../../styles/Sort.module.css"
import { Radio, Space, Typography } from 'antd';
const { Text } = Typography;

const Sort = ({value, onChangeSort, platform_value, onChangePlatform}) => {
    const [open, setOpen] = useState(false);
    const [open_p, setOpen_p] = useState(false);

    const type_list = ['release-date', 'popularity', 'relevance', 'alphabetical'];
    const platform = ['all', 'browser', 'pc']

    const onClickListItem = (i) => {
        onChangeSort(i);
        setOpen(false);

    }
    const onClickPlatform = (i) => {
        onChangePlatform(i);
        setOpen_p(false);
    }

    return (
        <div>
            <Text className={styles.titleStyle}>Sort by  </Text>
            <Space>
                <Radio.Group size="large" defaultValue='relevance'>
                    {type_list.map((type) =>
                        <Radio.Button value={type}
                                      className={value === type ? 'active' : ''}
                                      onClick={() => onClickListItem(type)}>
                            {type}</Radio.Button>
                    )}
                </Radio.Group>
            </Space>

            <Text className={styles.sortStyle}>   Platform  </Text>
                <Radio.Group size="large" defaultValue='all'>
                    {platform.map((type) =>
                            <Radio.Button value={type}
                                          className={platform_value === type ? 'active' : ''}
                                          onClick={() => onChangePlatform(type)}>
                                {type}</Radio.Button>
                        )}
                </Radio.Group>


        </div>
    );
};

export default Sort;