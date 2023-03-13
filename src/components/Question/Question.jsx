import { Layout, Col, Row, Button, Input, message } from 'antd';
import Countdown from "react-countdown";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HeaderLayout from '../../layout/HeaderLayout';
const { TextArea } = Input;
const { Footer, Content } = Layout;

const Question = ({ title, part, question, qusestion_info, question_img, next_page, key }) => {
  const[timeFinish, setTimeFinish] = useState(false);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('انتهى الوقت! سيتم تحويلك تلقائيا للصفحه التاليه');
  };
  const renderer = ({
    total,
    completed
  }) => {
    if (completed) {
      setTimeFinish(true);
      setTimeout(() => {
        navigate(`/${next_page}`)
      }, 6000)
      return <span>0</span>;
    } else {
      return (
        <span style={{ color: 'white', fontSize: '24px', position: 'relative', top: '-2px', left: '-52px' }} >
          {total/1000}
        </span>
      );
    }
  };

  return (
    <Layout className='question__layout'>
      {contextHolder}
      <HeaderLayout theme="light" />
      <Content className="question__content__wrapper">
        <h1 style={{ fontSize: '32px' }}>{ title }</h1>
      </Content>
      <Footer className='question__footer__wrapper'>
        <div>
          <Row>
            <Col span={20}>
              <p style={{ color: '#858494', fontSize: '1.5vw' }}>{ part }</p>
              <p style={{ fontSize: '2vw' }}>{ question }</p>
            </Col>
            <Col className='question__footer__counter' span={4}>
              <Countdown date={Date.now() + 180000} key={key} renderer={renderer} onComplete={info} />
              <img src="/images/counter.svg" alt="" />
            </Col>
          </Row>
          <Row style={{ marginBottom: "1.5rem" }}>
            <Col span={24}>
              <img width={300} height={300} src={question_img} alt="" />
            </Col>
          </Row>
          <Row style={{ marginBottom: "3.5rem" }}>
            <Col span={24}>
              <TextArea
                showCount
                disabled={timeFinish}
                rows={3}
                style={{
                  marginBottom: '1rem',
                  resize: 'none',
                }}
                placeholder="اكتب كل استعمال في سطر مستقل"
              />
              <p style={{ color: '#858494', fontSize: '1.5vw' }}>{qusestion_info}</p>
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