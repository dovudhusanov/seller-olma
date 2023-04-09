import React, {useState} from 'react';
import "./base-layout.css"
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
// @ts-ignore
import logo from "../../assets/logo.png"
import {BaseLayoutMainStyle} from "./base-layout.styles";
import {useDispatch} from "react-redux";
import {LogoutApi} from "../../api";
import {logout} from "../../action/auth-login-action";

const {Header, Sider, Content} = Layout;

export function BaseLayout() {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleLogout() {
        await LogoutApi({
            refresh: localStorage.getItem("refresh"),
            headers: {Authorization: `Bearer ${localStorage.getItem("access")}`}
        });
        dispatch(logout());
        navigate("/");
    }

    return (
        <BaseLayoutMainStyle>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} className={collapsed ? "menu-r" : "menu-b"}>
                    <button className={collapsed ? "trigger trigger-none" : "trigger"}
                            onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>} <span
                        className="menu-text">Menu</span>
                    </button>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item className={"first-li"} key="1" icon={<UserOutlined/>}>
                            <NavLink to="/seller/personal-information">Personal info</NavLink>
                        </Menu.Item>
                        <Menu.Item className={"logout-btn"} key="4" icon={<LogoutOutlined/>} style={{marginTop: 'auto'}}>
                            <span onClick={handleLogout}>Log Out</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header style={{padding: 0, background: colorBgContainer}}>
                        <div className="logo-layout">
                            <img src={logo} width={30} alt="logo" className="logo"/>
                            <h2>Olma Market</h2>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding:  window.location.pathname === "/seller/personal-information" ? 0 : 24,
                            minHeight: 280,
                            background: window.location.pathname === "/seller/personal-information" ? "none" : colorBgContainer,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>

        </BaseLayoutMainStyle>
    );
}
