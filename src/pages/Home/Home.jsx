import { Layout, Col, Row, Card, Button } from 'antd';
import { StarFilled, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import HeaderLayout from '../../layout/HeaderLayout';
const { Footer, Content } = Layout;

const Home = () => {
  return (
    <Layout className='home__layout'>
      <HeaderLayout theme="light"/>
      <Content className="home__content">
        <Row style={{ marginBottom: '2rem' }}>
          <Col span={24} className='home__main__title'>
            بين يديك الآن أول أداة عربية تتسم بالصدق والثبات ولها معايير مشتقة من البيئة الخليجية وذلك لقياس قدرات التفكير الإبداعي (اللفظية والشكلية)
          </Col>
        </Row>
        <Row style={{ marginBottom: '1.5rem' }}>
          <Col span={1} style={{ textAlign: 'left' }}>
            <StarFilled style={{ color: '#FFD54B', fontSize: '1.5rem', marginTop: '10px' }} />
          </Col>
          <Col span={23} className='home__sub__title'>
            يعتمد التطبيق على استخدام الخوارزميات بأسلوب "التعلم العميق Deep Learning" كأحد تقنيات الذكاء الاصطناعي
          </Col>
        </Row>
        <Row>
          <Col span={1} style={{ textAlign: 'left' }}>
            <StarFilled style={{ color: '#FFD54B', fontSize: '1.5rem', marginTop: '10px' }} />
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
                <Col span={7} className='home__footer__button__image'>
                  <img src="/images/stats.svg" alt="" />
                </Col>
                <Col span={15} className='home__footer__button__title'>
                  <span style={{ fontSize: '24px' }}>لعبة نسبة الإبداع</span>
                  <span style={{ fontSize: '18px' }}>مرحلتين - 6 أسئلة</span>
                </Col>
                <Col span={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
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