import React, {useEffect, useState} from 'react';
import "./base-layout.css"
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LogoutOutlined,
    DropboxOutlined
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

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [isMobileBtn, setIsMobileBtn] = useState<any>(false)
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

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 768) {
                setCollapsed(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <BaseLayoutMainStyle isMobileBtn={isMobileBtn}>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} className={collapsed ? "menu-r" : "menu-b"}>
                    <button className={collapsed ? "trigger trigger-none" : "trigger"}
                            onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>} <span
                        className="menu-text">Menu</span>
                    </button>
                    <button className={"close-btn-menu"} onClick={() => setIsMobileBtn(false)}><MenuFoldOutlined/><span
                        className="menu-text">Close</span>
                    </button>
                    <Menu
                        theme="dark"
                        mode="inline"
                    >
                        <Menu.Item className={"first-li"} key="1" icon={<UserOutlined/>}
                                   onClick={() => setIsMobileBtn(false)}>
                            <NavLink to="/seller/personal-information">Personal info</NavLink>
                        </Menu.Item>
                        {localStorage.getItem("sellerId") && (
                            <Menu.Item className={"first-li"} key="2" icon={<DropboxOutlined/>}
                                       onClick={() => setIsMobileBtn(false)}>
                                <NavLink
                                    to={`/seller/${localStorage.getItem("sellerId")}/products/all`}>Products</NavLink>
                            </Menu.Item>
                        )}
                        <Menu.Item className={"logout-btn"} key="4" icon={<LogoutOutlined/>}
                                   onClick={() => handleLogout()} style={{marginTop: 'auto'}}>
                            <span>Log Out</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header style={{padding: 0, background: colorBgContainer}}>
                        <div className={"mobile-logo"}>
                            <button className={"open-menu-btn"} onClick={() => setIsMobileBtn(true)}>
                                <MenuUnfoldOutlined/>
                            </button>
                            <div className="logo-layout">
                                <img src={logo} width={30} alt="logo" className="logo"/>
                                <h2>Olma Market</h2>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding:
                                window.location.pathname === "/seller/personal-information" ||
                                window.location.pathname === `/seller/${localStorage.getItem("sellerId")}/products/create`
                                    ? 0 : 24,
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
