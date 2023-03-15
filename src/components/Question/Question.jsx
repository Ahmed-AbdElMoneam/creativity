import { Layout, Col, Row, Button, Input, message } from 'antd';
import Countdown, { calcTimeDelta, CountdownApi } from "react-countdown";
import { Link, useNavigate, useLocation  } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import HeaderLayout from '../../layout/HeaderLayout';
import { questions_api } from '../../API';
import axios from "axios";
const { TextArea } = Input;
const { Footer, Content } = Layout;

const Question = ({ title, part, question, qusestion_info, question_img, next_page, question_id }) => {
  const location = useLocation()
  const[timeFinish, setTimeFinish] = useState(false);
  const[answers, setAnswers] = useState([{id:1,ans:""},{id:2,ans:""},{id:3,ans:""},{id:4,ans:""},{id:5,ans:""},{id:6,ans:""}]);
  const[timers, setTimers] = useState([{id:1,time:0},{id:2,time:0},{id:3,time:0},{id:4,time:0},{id:5,time:0},{id:6,time:0}]);
  const[answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const date = Date.now() + 180000
  const timerRef = useRef();
  // console.log(answers)
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
      if(total>=100000){
        return <span className='question__counter' style={{ left: '-52px' }}>{total/1000}</span>
      }else if(total>=10000){
        return <span className='question__counter' style={{ left: '-45px' }}>{total/1000}</span>
      }else{
        return <span className='question__counter' style={{ left: '-38px' }}>{total/1000}</span>
      }
    }
  };

  // const usePrevious = (value) => {
  //   const ref = useRef()
  //   useEffect(() => { ref.current = value })

  //   return ref.current
  // }
  
  // const useLocationChange = (action) => {
  //   const location = useLocation()
  //   const prevLocation = usePrevious(location)
  //   useEffect(() => { 
  //     action(location, prevLocation) 
  //   }, [location])
  // }

  // useLocationChange((location, prevLocation) => { 
  //   console.log('changed from', prevLocation, 'to', location) 
  // })

  // const handleInput = (e) => {
  //   setAnswer(e.target.value);
  //   // setAnswers((prevAnswers) => {
  //   //   // const new_answer = prevAnswers.filter((answer) => answer.id === question_id).map(answer => {
  //   //   //   return {id: answer.id, ans: e.target.value}
  //   //   // })
  //   //   const prev_answers = prevAnswers.filter((answer) => answer.id !== question_id)
  //   //   return [...prev_answers, {
  //   //     id: question_id, 
  //   //     ans: e.target.value,
  //   //   }].sort((a,b) => a.id - b.id);
  //   // })
  // }

  const handlePause = (counter) => {
    // let counted_time = 180000 - counter.total;
    // console.log(counted_time)
    // setTimers((prevTimers) => {
    //   // const new_answer = prevTimers.filter((answer) => answer.id === question_id).map(answer => {
    //   //   return {id: answer.id, ans: answer.ans, time: counted_time}
    //   // })
    //   const prev_timers = prevTimers.filter((timer) => timer.id !== question_id)
    //   return [...prev_timers, {
    //     id: question_id, 
    //     time: counted_time,
    //   }].sort((a,b) => a.id - b.id);
    // })
  }

  const handleSubmit = () => {
    // getAnswer(answer)
    // timerRef.current.pause();
    setTimeout(() => {
      navigate(`/${next_page}`)
    }, 100)
    // const timediff =  calcTimeDelta(Date.now()+1000)
    // console.log(timediff)
    // if(next_page === "confirmation"){
    //   axios.post(questions_api,{
    //     // question_1: body.question_1,
    //     // question_2: body.question_2,
    //     // question_3: body.question_3 , 
    //     // question_4: body.question_4,
    //     // question_5: body.question_5,
    //     // question_6: body.question_6,
    //     // test_time: "5:30"
    //   },
    //   {
    //     headers: {
    //       // 'Content-Type': 'multipart/form-data',
    //       // Authorization: `Bearer ${token}`
    //     }
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     // if(response.data.success){
    //     //   messageApi.success(response.data.message);
    //     //   handleLogin(response.data.data.token, values.remember)
    //     //   setTimeout(() => {
    //     //     navigate("/")
    //     //   }, 1500)
    //     // }else if(response.data.message === "form_validation"){
    //     //   messageApi.info('من فضلك تأكد من إدخال البريد الإلكتروني و كلمة المرور بشكل صحيح');
    //     //   handleLogin(false)
    //     // }else{
    //     //   messageApi.warning(response.data.message);
    //     //   handleLogin(false)
    //     // }
    //   }).catch((err) => {
    //     console.log(err.message);
    //   });
    // }
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
              <Countdown date={Date.now() + 180000} key={question_id} renderer={renderer} onPause={handlePause} ref={timerRef} onComplete={info} />
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
                // value={answers[question_id-1].ans}
                // value={answer}
                // onChange={handleInput}
              />
              <p style={{ color: '#858494', fontSize: '1.5vw' }}>{qusestion_info}</p>
            </Col>
          </Row>
        </div>
        <Row>
          <Col span={12} offset={6}>
            {/* to={`/${next_page}`} */}
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