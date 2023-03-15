import { Layout, Col, Row, Menu } from 'antd';
import { useState, useEffect, useContext } from 'react';
import Icon, { SettingOutlined, QuestionOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import UserAvatar from '../../utils/Images/UserAvatar';
import Logo from '../../components/Logo';
import { UsernameContext } from '../App/App';
const { Header } = Layout;

const items = [
  {
    label: (<Link to="/">الرئيسية</Link>),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: (<Link to="/faq">الأسئلة المتكررة</Link>),
    key: 'faq',
    icon: <QuestionOutlined />,
  },
  {
    label: (<Link to="/settings">الإعدادات</Link>),
    key: 'settings',
    icon: <SettingOutlined />,
  },
];
const HeaderLayout = ({ theme }) => {
  const currentMenuItem = window.location.pathname.substring(1) ? window.location.pathname.substring(1) : 'home'
  const [current, setCurrent] = useState(currentMenuItem);
  const userName = useContext(UsernameContext);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header className="layout__header">
      <Row>
        {theme === "light" && <Logo image="logo_light.svg" theme="light" />}
        {theme === "dark" && <Logo image="logo_dark.svg" theme="dark" />}
        <Col span={9} offset={1} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='header__menu'/>
        </Col>
        <Col className='header__user' span={4} offset={3}>
          <Icon component={UserAvatar} />
          <p className='header__username'>{userName}</p>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderLayout;