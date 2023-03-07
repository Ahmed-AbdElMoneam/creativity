import { Layout, Col, Row, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
const { TextArea } = Input;
const { Footer, Content } = Layout;

const Question = ({ title, part, question, qusestion_info, question_img, next_page }) => {
  return (
    <Layout className='question__layout'>
      <Content className="question__content__wrapper">
        <h1 style={{ fontSize: '32px', marginTop: '10px' }}>{ title }</h1>
      </Content>
      <Footer className='question__footer__wrapper'>
        <div>
          <Row>
            <Col span={20}>
              <p style={{ color: '#858494', fontSize: '18px' }}>{ part }</p>
              <p style={{ fontSize: '24px' }}>{ question }</p>
            </Col>
            <Col className='question__footer__counter' span={4}>
              <img src="/images/counter.svg" alt="" />
            </Col>
          </Row>
          <Row style={{ marginBottom: "1.5rem" }}>
            <Col span={24}>
              <img src={question_img} alt="" />
            </Col>
          </Row>
          <Row style={{ marginBottom: "3.5rem" }}>
            <Col span={24}>
              <TextArea
                showCount
                rows={5}
                style={{
                  marginBottom: '1rem',
                  resize: 'none',
                }}
                placeholder="اكتب كل استعمال في سطر مستقل"
              />
              <p style={{ color: '#858494', fontSize: '18px' }}>{qusestion_info}</p>
            </Col>
          </Row>
        </div>
        <Row>
          <Col span={12} offset={6}>
            <Link to={`/${next_page}`}>
              <Button className='question__footer__button'>
                انتقل للسؤال التالي
              </Button>
            </Link>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default Question;