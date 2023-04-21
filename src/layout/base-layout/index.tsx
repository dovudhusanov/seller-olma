import React, {useEffect, useState} from 'react';
import "./base-layout.css"
import {Link, NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
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
import {SettingsIcon} from "../../icons";
import {Avatar, Box, IconButton} from "@mui/material";
import {GetUserApi} from "../../api/profile/get-user-api";
import {GetSellerApi} from "../../api/profile/get-seller-api";

const {Header, Sider, Content} = Layout;

export default function BaseLayout() {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [isMobileBtn, setIsMobileBtn] = useState<boolean>(false)
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

    const [avatarName, setAvatarName] = useState<any>([])

    async function GetName(): Promise<void> {
        const userRes = await GetUserApi(localStorage.getItem("userId"))
        userRes?.data[0]?.seller && localStorage.setItem("sellerId", userRes.data[0].seller)
        const res = userRes?.data[0]?.seller && await GetSellerApi(localStorage.getItem("sellerId"))
        setAvatarName(res?.data[0])
    }

    useEffect(() => {
        GetName()
    }, [window.location.pathname])

    const initials = avatarName && avatarName.first_name && avatarName.last_name ? avatarName.first_name[0] + avatarName.last_name[0] : "U";

    const [selectedKey, setSelectedKey] = useState<string>("")

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
                        defaultSelectedKeys={["1"]}
                    >
                        <Menu.Item className={"first-li"} key={"1"} icon={<UserOutlined/>}
                                   onClick={() => {
                                       setIsMobileBtn(false)
                                       setSelectedKey("1")
                                   }}>
                            <Link
                                to={`/seller/personal-information`}>Personal Info</Link>
                        </Menu.Item>
                        {localStorage.getItem("sellerId") && (
                            <Menu.Item className={"first-li"} key={"2"} icon={<DropboxOutlined/>}
                                       onClick={() => {
                                           setIsMobileBtn(false)
                                           setSelectedKey("12")
                                       }}>
                                <Link
                                    to={`/seller/${localStorage.getItem("sellerId")}/products/all`}>Products</Link>
                            </Menu.Item>
                        )}
                        <Menu.Item className={"logout-btn"} icon={<LogoutOutlined/>}
                                   onClick={() => handleLogout()} style={{marginTop: 'auto'}}>
                            <span>Log Out</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <div className={"mobile-logo"}>
                            <button className={"open-menu-btn"} onClick={() => setIsMobileBtn(true)}>
                                <MenuUnfoldOutlined/>
                            </button>
                            <div className="logo-layout">
                                <img src={logo} width={30} alt="logo" className="logo"/>
                                <h2>Olma Market</h2>
                            </div>
                        </div>
                        <Box sx={{
                            display: "flex",
                            marginRight: "20px"
                        }}>
                            <IconButton>
                                <SettingsIcon/>
                            </IconButton>
                            <Link to={"/seller/profile"}>
                                <Avatar
                                    sx={{
                                        width: 38,
                                        height: 38,
                                        marginLeft: "10px",
                                        bgcolor: "rgb(54, 179, 126)",
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        cursor: "pointer"
                                    }}
                                >{localStorage.getItem("access") ? initials : "U"}
                                </Avatar>
                            </Link>
                        </Box>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding:
                                window.location.pathname === "/seller/personal-information" ||
                                window.location.pathname === `/seller/${localStorage.getItem("sellerId")}/products/create`
                                    ? 0 : 24,
                            minHeight: 280,
                            background:
                                window.location.pathname === "/seller/personal-information" ||
                                window.location.pathname === `/seller/${localStorage.getItem("sellerId")}/products/create` ||
                                window.location.pathname === `/seller/profile`
                                    ? "none" : colorBgContainer,
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
