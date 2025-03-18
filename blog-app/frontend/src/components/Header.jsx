import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Myheader = () => {
  return (
    <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#001529" }}>
      {/* Logo */}
      <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>MyBlog</div>
      
      {/* Navigation */}
      <Menu theme="dark" mode="horizontal" style={{ minWidth: 200 }} defaultSelectedKeys={["1"]}>
        <Menu.Item key="1"><Link style={{textDecoration:'none'}} to='/'>Add Blog</Link></Menu.Item>
        <Menu.Item key="2"><Link style={{textDecoration:'none'}}>See Blog</Link></Menu.Item>
      </Menu>
    </Header>
  );
};

export default Myheader;
