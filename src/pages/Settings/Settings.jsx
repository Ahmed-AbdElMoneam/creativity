import { Layout, Col, Row, Button, Switch } from 'antd';
import Icon, { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import UserAvatar from '../../utils/Images/UserAvatar';
const { Content, Header } = Layout;

const Settings = () => {
  return (
    <Layout className='settings__layout'>
      <Header className="faq__header">
        <Row>
          <Col span={2} className='header__logo'>
            <Link style={{ display: 'inline-block', marginRight: '32px' }} to="/">
              <img width={70} src="/images/logo_dark.svg" alt="logo" />
            </Link>
          </Col>
          <Col span={5} className='header__title'>
            <Link to="/" className='header__title' style={{ height: '100%' }}>
              <span className='faq__header__title__span'>نسبة الإبداع</span>
              <span className='faq__header__title__span'>Creativity Quotient</span>
            </Link>
          </Col>
          <Col className='header__user' span={6} offset={11}>
            <Link to="/" className='header__user__home'>الرئيسية</Link>
            <Icon component={UserAvatar} />
            <p className='faq__header__username'>هناء المشاري</p>
          </Col>
        </Row>
      </Header>
      <Content className="faq__content" style={{ color: '#fff' }}>
        <Row>
          <Col span={24} className='faq__main__title'>
            الإعدادات
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ color: 'rgb(133, 132, 148)', fontSize: '18px', marginBottom: '1rem' }}>
            الحساب
          </Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Button className='settings__button'>
              <Row>
                <Col span={6} className='home__footer__button__style'>
                  <img src="/images/user_settings.svg" alt="" />
                </Col>
                <Col span={14} className='settings__button__title'>
                  <span style={{ fontSize: '18px' }}>تعديل الملف الشخصي</span>
                  <span style={{ fontSize: '12px', color: '#858494' }}>تعديل اسم المستخدم, البلد, أخرى</span>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <LeftOutlined />
                </Col>
              </Row>
            </Button>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Button className='settings__button'>
              <Row>
                <Col span={6} className='home__footer__button__style'>
                  <img src="/images/email_settings.svg" alt="" />
                </Col>
                <Col span={14} className='settings__button__title'>
                  <span style={{ fontSize: '18px' }}>تعديل البريد الإلكتروني</span>
                  <span style={{ fontSize: '12px', color: '#858494' }}>madias@yahoo.com</span>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <LeftOutlined />
                </Col>
              </Row>
            </Button>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Button className='settings__button'>
              <Row>
                <Col span={6} className='home__footer__button__style'>
                  <img src="/images/password_settings.svg" alt="" />
                </Col>
                <Col span={14} className='settings__button__title'>
                  <span style={{ fontSize: '18px' }}>تغيير كلمة المرور</span>
                  <span style={{ fontSize: '12px', color: '#858494' }}>أخر تغيير كان منذ سنه</span>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <LeftOutlined />
                </Col>
              </Row>
            </Button>
          </Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24} style={{ color: 'rgb(133, 132, 148)', fontSize: '18px', marginBottom: '1rem' }}>
            أخرى
          </Col>
        </Row>
        <Row style={{ marginBottom: '3rem' }}>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Row className='settings__switch'>
              <Col style={{ color: '#0C092A', fontSize: '18px' }} span={2}>
                الإشعارات
              </Col>
              <Col span={2} offset={4}>
                <Switch defaultChecked />
              </Col>
            </Row>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Button className='settings__button'>
              <Row>
                <Col span={6} className='home__footer__button__style'>
                  <img src="/images/difficulty_settings.svg" alt="" />
                </Col>
                <Col span={14} className='settings__button__title'>
                  <span style={{ fontSize: '18px' }}>تغيير الصعوبة</span>
                  <span style={{ fontSize: '12px', color: '#858494' }}>سهل, متوسط, صعب</span>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <LeftOutlined />
                </Col>
              </Row>
            </Button>
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Button className='settings__button'>
              <Row>
                <Col span={6} className='home__footer__button__style'>
                  <img src="/images/faq_settings.svg" alt="" />
                </Col>
                <Col span={14} className='settings__button__title'>
                  <span style={{ fontSize: '18px' }}>الأسئلة المتكررة</span>
                  <span style={{ fontSize: '12px', color: '#858494' }}>الأسئلة الأكثر تكرارا</span>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <LeftOutlined />
                </Col>
              </Row>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Link to="/login" className='settings__logout'>
              تسجيل الخروج
            </Link>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Settings;