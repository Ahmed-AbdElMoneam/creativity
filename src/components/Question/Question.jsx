import { Layout, Col, Row, Button, Input, message } from 'antd';
import Icon from '@ant-design/icons';
import Countdown from "react-countdown";
import { Link, useNavigate } from 'react-router-dom';
import UserAvatar from '../../utils/Images/UserAvatar';
import { useState } from 'react';
const { TextArea } = Input;
const { Header, Footer, Content } = Layout;

const Question = ({ title, part, question, qusestion_info, question_img, next_page, key }) => {
  const[timeFinish, setTimeFinish] = useState(false);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('انتهى الوقت! سيتم تحويلك تلقائيا للصفحه التاليه');
  };
  const renderer = ({
    total,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    completed
  }) => {
    if (completed) {
      // Render a complete state
      setTimeFinish(true);
      setTimeout(() => {
        navigate(`/${next_page}`)
      }, 6000)
      return <span>0</span>;
    } else {
      // Render a countdown
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
      <Header className="question__header">
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
          <Col className='header__user' span={4} offset={13}>
            <Icon component={UserAvatar} />
            <p className='header__username'>هناء المشاري</p>
          </Col>
        </Row>
      </Header>
      <Content className="question__content__wrapper">
        <h1 style={{ fontSize: '32px', marginTop: '0px' }}>{ title }</h1>
      </Content>
      <Footer className='question__footer__wrapper'>
        <div>
          <Row>
            <Col span={20}>
              <p style={{ color: '#858494', fontSize: '18px' }}>{ part }</p>
              <p style={{ fontSize: '24px' }}>{ question }</p>
            </Col>
            <Col className='question__footer__counter' span={4}>
              <Countdown date={Date.now() + 180000} key={key} renderer={renderer} onComplete={info} />
              <img src="/images/counter.svg" alt="" />
            </Col>
          </Row>
          <Row style={{ marginBottom: "1.5rem" }}>
            <Col span={24}>
              <img width={150} height={100} src={question_img} alt="" />
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