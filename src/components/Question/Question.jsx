import { Layout, Col, Row, Button, Input, message } from 'antd';
import Countdown from "react-countdown";
import { useNavigate  } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import HeaderLayout from '../../layout/HeaderLayout';
const { TextArea } = Input;
const { Footer, Content } = Layout;

const Question = ({ title, part, question, qusestion_info, question_img, next_page, question_id, getAnswers, getTimers }) => {
  const navigate = useNavigate();
  const[timeFinish, setTimeFinish] = useState(false);
  const[answer, setAnswer] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const countRef = useRef();
  const timerRef = useRef(Date.now())

  const handleStop = () => countRef.current.stop();
  const handleStart = () => countRef.current.start();
  const handlePause = () => countRef.current.pause();
  const handleInput = (e) => setAnswer(e.target.value)


  const renderer = ({
    total,
    completed
  }) => {
    if (completed) {
      return <span className='question__counter' style={{ left: '-38px' }}>0</span>;
    } else {
      if(total>=100000){
        return <span className='question__counter' style={{ left: '-52px' }}>{total/1000}</span>
      }else if(total>=10000){
        return <span className='question__counter' style={{ left: '-45px' }}>{total/1000}</span>
      }else{
        return <span className='question__counter' style={{ left: '-38px' }}>{total/1000}</span>
      }
    }
  };

  const handleComplete = () => {
    if(answer){
      setTimeFinish(true);
      messageApi.info('انتهى الوقت! يرجى الإنتقال للسؤال التالي');
    }else{
      setTimeFinish(false);
      messageApi.info('انتهى الوقت! يرجى الإجابة على السؤال و عدم ترك الحقل فارغ');
    }
    handleStop();
    handlePause();
  };

  const handleSubmit = () => {
    if(answer){
      handleStop();
      handlePause();
      getAnswers(answer)
      setTimeout(() => {
        handleStart();
      }, 100)
      setTimeout(() => {
        navigate(`/${next_page}`)
      }, 100)
      setAnswer("");
      setTimeFinish(false);
    }else{
      messageApi.info('برجاء الإجابة على السؤال قبل الإنتقال للسؤال التالي');
    }
  }

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
              <Countdown date={timerRef.current + 180000} ref={countRef} onPause={getTimers} onComplete={handleComplete} renderer={renderer}/>
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
                key={question_id}
                disabled={timeFinish}
                rows={3}
                style={{
                  marginBottom: '1rem',
                  resize: 'none',
                }}
                placeholder="اكتب كل استعمال في سطر مستقل"
                value={answer}
                onChange={handleInput}
              />
              <p style={{ color: '#858494', fontSize: '1.5vw' }}>{qusestion_info}</p>
            </Col>
          </Row>
        </div>
        <Row>
          <Col span={12} offset={6}>
            <Button className='question__footer__button' onClick={handleSubmit}>
              انتقل للسؤال التالي
            </Button>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default Question;