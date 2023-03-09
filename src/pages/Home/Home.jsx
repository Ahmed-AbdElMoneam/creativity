import { Layout, Col, Row, Card, Button } from 'antd';
import Icon, { StarFilled, LeftOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import UserAvatar from '../../utils/Images/UserAvatar';
const { Footer, Content, Header } = Layout;

const Home = () => {
  return (
    <Layout className='home__layout'>
      <Header className="home__header">
        <Row>
          <Col span={2} className='header__logo'>
            <Link style={{ display: 'inline-block', marginRight: '32px' }} to="/">
              <img width={70} src="/images/logo_light.svg" alt="logo" />
            </Link>
          </Col>
          <Col span={5} className='header__title'>
            <Link to="/" className='header__title' style={{ height: '100%' }}>
              <span className='header__title__span'>نسبة الإبداع</span>
              <span className='header__title__span'>Creativity Quotient</span>
            </Link>
          </Col>
          <Col className='header__user' span={7} offset={10}>
            <Link to="/faq" className='header__user__faq'>الأسئلة الشائعة</Link>
            <Icon component={UserAvatar} />
            <p className='header__username'>هناء المشاري</p>
            <Link to="/settings" className='header__user__settings'><SettingOutlined /></Link>
          </Col>
        </Row>
      </Header>
      <Content className="home__content" style={{ color: '#fff' }}>
        <Row style={{ marginBottom: '2rem' }}>
          <Col span={24} className='home__main__title'>
            بين يديك الآن أول أداة عربية تتسم بالصدق والثبات ولها معايير مشتقة من البيئة الخليجية وذلك لقياس قدرات التفكير الإبداعي (اللفظية والشكلية)
          </Col>
        </Row>
        <Row style={{ marginBottom: '1.5rem' }}>
          <Col span={1} style={{ textAlign: 'left' }}>
            <StarFilled style={{ color: '#FFD54B', fontSize: '1.5rem', marginTop: '4px' }} />
          </Col>
          <Col span={23} className='home__sub__title'>
            يعتمد التطبيق على استخدام الخوارزميات بأسلوب "التعلم العميق Deep Learning" كأحد تقنيات الذكاء الاصطناعي
          </Col>
        </Row>
        <Row>
          <Col span={1} style={{ textAlign: 'left' }}>
            <StarFilled style={{ color: '#FFD54B', fontSize: '1.5rem', marginTop: '4px' }} />
          </Col>
          <Col span={23} className='home__sub__title'>
            يعتبر التطبيق الأول من نوعه في مجال معالجة اللغات الطبيعية Natural Language Processing (NLP)  باللغة العربية
          </Col>
        </Row>
      </Content>
      <Footer className="home__footer__wrapper">
        <Card className="home__footer" title="الألعاب المتاحة">
          <Link to="/stages/1">
            <Button className='home__footer__button'>
              <Row>
                <Col span={20} className='home__footer__button__style'>
                  <img src="/images/stats.svg" alt="" />
                  <div style={{ textAlign: 'right', marginTop: '6px' }}>
                    <p>لعبة نسبة الإبداع</p>
                    <p style={{ fontSize: '12px' }}>مرحلتين - 6 أسئلة</p>
                  </div>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <LeftOutlined />
                </Col>
              </Row>
            </Button>
          </Link>
        </Card>
      </Footer>
    </Layout>
  );
}

export default Home;