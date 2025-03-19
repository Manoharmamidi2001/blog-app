import React from "react";
import { Layout, Menu } from "antd";
import {Link} from 'react-router-dom'

const { Header } = Layout;

const BlogHeader = () => {
  return (
    <Layout>
      <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#001529" }}>
        {/* Logo */}
        <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>My Blog</div>
        
        {/* Navigation Menu */}
        <Menu theme="dark" mode="horizontal" style={{ minWidth: 200 }}>
          <Menu.Item><Link style={{textDecoration:'none'}} to='/'>See Blogs</Link></Menu.Item>
          <Menu.Item><Link style={{textDecoration:'none'}} to='/postblog'>Post Blogs</Link></Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default BlogHeader;
