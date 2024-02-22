import React, { useState } from 'react';
import { ExclamationCircleOutlined, AuditOutlined, FileDoneOutlined, AlignLeftOutlined, MessageOutlined } from '@ant-design/icons';
import { Layout, Menu, Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from 'C:/test project/mchotdog/src/pages/Logo.png';

const { Sider } = Layout;

function getItem(label, key, icon, children, link) {
  return {
    key,
    icon,
    children,
    label,
    link,
  };
}

const items = [
  getItem('商品確認', '1', <FileDoneOutlined />),
  getItem('舉報審核', '2', <ExclamationCircleOutlined />),
  getItem('聊天室', 'sub1', <MessageOutlined />, [
    getItem('買家', '3'),
    getItem('賣家', '4'),
  ]),
  getItem('知識專區撰寫', '5', <AlignLeftOutlined />),
  getItem('會員帳號管理', 'sub3', <AuditOutlined />,[
    getItem('買家之帳號管理', '6'),
    getItem('賣家之帳號管理', '7'),
  ]),
  getItem('登入', '9', null, null, '/Login'),
];

const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <a href='http://localhost:3000/Home' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src={Logo}
            width={collapsed ? 70 : 140} 
            height={collapsed ? 42 : 70}
            preview={false}
          />
        </a>
        <div className="demo-logo-vertical" />
        
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {items.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                item.label
              )}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Nav;
