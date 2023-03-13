import { Layout, Col, Row, Button } from 'antd';
import { Link } from "react-router-dom";
import HeaderLayout from '../../layout/HeaderLayout';
const { Footer, Content } = Layout;

const Details = ({ part, title, no_questions, type, description, question_id }) => {
  return (
    <Layout className='details__layout'>
      <HeaderLayout theme="light" />
      <Content className="details__content__wrapper">
        <img width={700} src="/images/details.svg" alt="details" />
      </Content>
      <Footer className='details__footer__wrapper'>
        <div>
          <Row>
            <Col span={24}>
              <p style={{ color: '#858494', fontSize: '18px' }}>{part}</p>
              <p style={{ fontSize: '24px' }}>{title}</p>
            </Col>
          </Row>
          <Row>
            <Col className='details__footer__info info__rightBorder' span={6} offset={6}>
              <img width={50} src="/images/question.svg" alt="question" />
              <p className='details__footer__paragraph'>{no_questions}</p>
            </Col>
            <Col className='details__footer__info info__leftBorder' span={6}>
              <img width={50} src="/images/puzzle.svg" alt="puzzle" />
              <p className='details__footer__paragraph'>{type}</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p style={{ color: '#858494', fontSize: '14px' }}>وصف اللعبة و التعليمات</p>
              <p style={{ fontSize: '18px' }}>{description}</p>
            </Col>
          </Row>
        </div>
        <Row>
          <Col span={12} offset={6}>
            <Link to={`questions/${question_id}`}>
              <Button type='primary' className='details__footer__button'>
                ابدأ اللعبة
              </Button>
            </Link>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default Details;