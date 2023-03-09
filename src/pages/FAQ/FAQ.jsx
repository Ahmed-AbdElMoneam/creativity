import { Layout, Col, Row, Card, Collapse } from 'antd';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';
import UserAvatar from '../../utils/Images/UserAvatar';
const { Footer, Content, Header } = Layout;
const { Panel } = Collapse;

const FAQ = () => {
  return (
    <Layout className='faq__layout'>
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
            الأسئلة المتكررة
          </Col>
        </Row>
      </Content>
      <Footer className="faq__footer__wrapper">
        <Card className="faq__footer">
          <Row>
            <Col span={24} style={{ color: 'rgb(133, 132, 148)' }} >
              مقدمة
            </Col>
          </Row>
          <Row>
            <Col span={24} >
              <Collapse accordion bordered={false} style={{ backgroundColor: 'white' }}>
                <Panel showArrow={false} header="ما هو الأسلوب الابداعي" key="1">
                  <p>بين يديك الآن أول أداة عربية تتسم بالصدق والثبات ولها معايير مشتقة من البيئة الخليجية وذلك لقياس قدرات التفكير الإبداعي (اللفظية والشكلية)
                    يعتمد التطبيق على استخدام الخوارزميات بأسلوب "التعلم العميق Deep Learning" كأحد تقنيات الذكاء الاصطناعي
                    يُعتبر التطبيق الأول من نوعه في مجال معالجة اللغات الطبيعية Natural Language Processing (NLP)  باللغة العربية
                  </p>
                </Panel>
                <Panel showArrow={false} header="ما هي مهمة هذا التطبيق" key="2">
                  <p>بين يديك الآن أول أداة عربية تتسم بالصدق والثبات ولها معايير مشتقة من البيئة الخليجية وذلك لقياس قدرات التفكير الإبداعي (اللفظية والشكلية)
                    يعتمد التطبيق على استخدام الخوارزميات بأسلوب "التعلم العميق Deep Learning" كأحد تقنيات الذكاء الاصطناعي
                    يُعتبر التطبيق الأول من نوعه في مجال معالجة اللغات الطبيعية Natural Language Processing (NLP)  باللغة العربية
                  </p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ color: 'rgb(133, 132, 148)' }} >
              كيفية اللعب
            </Col>
          </Row>
          <Row>
            <Col span={24} >
              <Collapse accordion bordered={false} style={{ backgroundColor: 'white' }}>
                <Panel showArrow={false} header="ما هي الألعاب المتاحة" key="1">
                  <p>بين يديك الآن أول أداة عربية تتسم بالصدق والثبات ولها معايير مشتقة من البيئة الخليجية وذلك لقياس قدرات التفكير الإبداعي (اللفظية والشكلية)
                    يعتمد التطبيق على استخدام الخوارزميات بأسلوب "التعلم العميق Deep Learning" كأحد تقنيات الذكاء الاصطناعي
                    يُعتبر التطبيق الأول من نوعه في مجال معالجة اللغات الطبيعية Natural Language Processing (NLP)  باللغة العربية
                  </p>
                </Panel>
                <Panel showArrow={false} header="علام تدل نتائج اللعبة؟" key="2">
                  <p>بين يديك الآن أول أداة عربية تتسم بالصدق والثبات ولها معايير مشتقة من البيئة الخليجية وذلك لقياس قدرات التفكير الإبداعي (اللفظية والشكلية)
                    يعتمد التطبيق على استخدام الخوارزميات بأسلوب "التعلم العميق Deep Learning" كأحد تقنيات الذكاء الاصطناعي
                    يُعتبر التطبيق الأول من نوعه في مجال معالجة اللغات الطبيعية Natural Language Processing (NLP)  باللغة العربية
                  </p>
                </Panel>
                <Panel showArrow={false} header="كيف يمكن اللعب و الفوز؟" key="3">
                  <p>بين يديك الآن أول أداة عربية تتسم بالصدق والثبات ولها معايير مشتقة من البيئة الخليجية وذلك لقياس قدرات التفكير الإبداعي (اللفظية والشكلية)
                    يعتمد التطبيق على استخدام الخوارزميات بأسلوب "التعلم العميق Deep Learning" كأحد تقنيات الذكاء الاصطناعي
                    يُعتبر التطبيق الأول من نوعه في مجال معالجة اللغات الطبيعية Natural Language Processing (NLP)  باللغة العربية
                  </p>
                </Panel>
                <Panel showArrow={false} header="هل يمكن مشاركة النتائج؟" key="4">
                  <p>بين يديك الآن أول أداة عربية تتسم بالصدق والثبات ولها معايير مشتقة من البيئة الخليجية وذلك لقياس قدرات التفكير الإبداعي (اللفظية والشكلية)
                    يعتمد التطبيق على استخدام الخوارزميات بأسلوب "التعلم العميق Deep Learning" كأحد تقنيات الذكاء الاصطناعي
                    يُعتبر التطبيق الأول من نوعه في مجال معالجة اللغات الطبيعية Natural Language Processing (NLP)  باللغة العربية
                  </p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </Card>
      </Footer>
    </Layout>
  );
}

export default FAQ;