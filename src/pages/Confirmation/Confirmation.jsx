import { Layout, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { questions_api } from '../../API';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;

const Confirmation = ({ token, answers, timer }) => {
  const [isPreparing, setIsPreparing] = useState(false);
  const [viewReports, setViewReports] = useState(false);
  const navigate = useNavigate();

  const calculateTotalTimer = () => {
    let mins = 0;
    let seconds = 0;
    let total = 0;
    timer.forEach(count => {
      total = total + count.time;
    })
    mins = Math.floor(total/60);
    seconds = total%60;
    return `${mins}:${seconds}`
  }

  const submitTest = () => {
    if(viewReports){
      setTimeout(() => {
        navigate("/tests")
      }, 100)
    }else{
      setIsPreparing(true)
      axios.post(questions_api,{
        question_1: answers[0].ans,
        question_2: answers[1].ans,
        question_3: answers[2].ans , 
        question_4: answers[3].ans,
        question_5: answers[4].ans,
        question_6: answers[5].ans,
        test_time: calculateTotalTimer(),
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setIsPreparing(false)
        setViewReports(true)
      }).catch((err) => {
        console.log(err.message);
      });
    }
  }

  return (
    <Layout className='confirmation__layout'>
      <Content className="confirmation__content__wrapper">
        <div>
          <h1 style={{ fontSize: '50px' }}>شكرا لك !</h1>
          {viewReports ? 
            <p style={{ fontSize: '40px' }}>اضغط عرض التقارير لعرض نتيجة إختبارك الحالي و الإختبارات السابقة</p> : 
            <p style={{ fontSize: '40px' }}>اضغط إعداد التقرير لتحليل إجاباتك و إعداد تقريرك المفصل</p>
          }
        </div>
        {!isPreparing && <Button className='confirmation__footer__button' onClick={submitTest}>
          {viewReports ? <span>عرض التقارير</span> : <span>إعداد التقرير</span>}
        </Button>}
        {isPreparing && <LoadingOutlined className="loading__icon" />}
      </Content>
    </Layout>
  );
}

export default Confirmation;