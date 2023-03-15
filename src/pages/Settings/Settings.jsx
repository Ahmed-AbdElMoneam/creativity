import { Layout, Col, Row, Switch, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLayout from '../../layout/HeaderLayout';
import SettingsButton from '../../components/SettingsButton';
import { logout_api } from '../../API';
import axios from "axios";
const { Content } = Layout;

const Settings = ({ token, userEmail }) => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogOut = () => {
    axios.get(logout_api,{
      headers: { 
        Authorization: `Bearer ${token}`
      },
    })
		.then((response) => {
      if(response.data.success){
        navigate("/login");
        sessionStorage.removeItem("session_token")
        document.cookie = "session_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
			}else{
				messageApi.info("تعذر تسجيل خروجك. حاول مرة أخرى !");
			}
		}).catch((err) => {
			console.log(err.message);
		});
  }

  return (
    <Layout className='settings__layout'>
      {contextHolder}
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
          <SettingsButton image="email_settings.svg" title="تعديل البريد الإلكتروني" description={userEmail}/>
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
            <Link className='settings__logout' onClick={handleLogOut}>
              تسجيل الخروج
            </Link>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Settings;