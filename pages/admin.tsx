import type { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import axios from 'axios';
import wrapper, { SagaStore } from '../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from 'reducer/user';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { userType } from 'reducer/reducerUser';

import { useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';

const Admin = () => {
    const { SubMenu } = Menu;

    const handleClick = (e: Event) => {
        console.log('click ', e);
    };
    // const me = useSelector((state: { user: userType }): string => state.user.me);
    return (
        <Menu
            // onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubMenu key="sub1" icon={<MailOutlined />} title="대시보드">
                <Menu.Item key="1">대시보드1</Menu.Item>
                <Menu.Item key="2">대시보드2</Menu.Item>
                <Menu.Item key="3">대시보드3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="콘텐츠">
                <Menu.Item key="4">글 관리</Menu.Item>
                <Menu.Item key="5">페이지 관리</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="설정">
                <Menu.Item key="6">회원목록 관리</Menu.Item>
                <Menu.Item key="70">금지어 관리</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req }): Promise<any> => {
    const cookie = req ? req.headers.cookie : '';
    axios.defaults.headers.common['Cookie'] = '';
    if (req && cookie) {
        axios.defaults.headers.common['Cookie'] = cookie;
    }
    store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch(END);
    await (store as SagaStore).sagaTask.toPromise();
});

export default Admin