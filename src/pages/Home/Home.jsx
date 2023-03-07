import { Layout, Col, Row, Card, Button } from 'antd';
import Icon, { CheckCircleOutlined, StarFilled, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import UserAvatar from '../../utils/Images/UserAvatar';
const { Footer, Content } = Layout;

const Home = () => {
  return (
    <div className="home__wrapper">
      <Layout className='home__layout'>
        <Content style={{ color: '#fff' }}>
          <div className="home__content">
            <Row style={{ marginBottom: '1rem' }}>
              <Col span={6}>
                <p style={{ color: '#FFD6DD', fontSize: '1.2rem' }}><CheckCircleOutlined style={{ marginLeft: '0.3rem' }} />مرحبا</p>
                <p style={{ fontSize: '1.2rem' }}>هناء المشاري</p>
              </Col>
              <Col span={6} offset={12} style={{ textAlign: 'left' }}>
                <Icon component={UserAvatar} />
              </Col>
            </Row>
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
          </div>
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
    </div>
  );
}

export default Home;