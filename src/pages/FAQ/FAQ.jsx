import { Layout, Col, Row, Card, Collapse } from 'antd';
import HeaderLayout from '../../layout/HeaderLayout';
const { Footer, Content } = Layout;
const { Panel } = Collapse;

const FAQ = () => {
  return (
    <Layout className='faq__layout'>
      <HeaderLayout theme="dark"/>
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