import { Layout, Col, Row, Switch } from 'antd';
import { Link } from 'react-router-dom';
import HeaderLayout from '../../layout/HeaderLayout';
import SettingsButton from '../../components/SettingsButton';
const { Content } = Layout;

const Settings = () => {
  return (
    <Layout className='settings__layout'>
      <HeaderLayout theme="dark"/>
      <Content className="faq__content" style={{ color: '#fff' }}>
        <Row>
          <Col span={24} className='faq__main__title'>
            الإعدادات
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ color: 'rgb(133, 132, 148)', fontSize: '2vw', marginBottom: '1rem' }}>
            الحساب
          </Col>
        </Row>
        <Row style={{ marginBottom: '6vh' }}>
          <SettingsButton image="user_settings.svg" title="تعديل الملف الشخصي" description="تعديل اسم المستخدم, البلد, أخرى"/>
          <SettingsButton image="email_settings.svg" title="تعديل البريد الإلكتروني" description="madias@yahoo.com"/>
          <SettingsButton image="password_settings.svg" title="تغيير كلمة المرور" description="أخر تغيير كان منذ سنه"/>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={12} style={{ color: 'rgb(133, 132, 148)', fontSize: '2vw', marginBottom: '1rem' }}>
            أخرى
          </Col>
          <Col span={12} style={{ color: 'rgb(133, 132, 148)', fontSize: '2vw', marginBottom: '1rem' }}>
            الإشعارات
          </Col>
        </Row>
        <Row style={{ marginBottom: '3rem' }}>
          <SettingsButton image="difficulty_settings.svg" title="تغيير الصعوبة" description="سهل, متوسط, صعب"/>
          {/* <SettingsButton image="faq_settings.svg" title="الأسئلة المتكررة" description="الأسئلة الأكثر تكرارا"/> */}
          <Col span={2} offset={4}>
            <Switch defaultChecked />
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