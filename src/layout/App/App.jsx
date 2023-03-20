import { useState, createContext, useEffect } from "react";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import arEG from 'antd/locale/ar_EG';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Home from '../../pages/Home';
import Error from "../../pages/Error";
import Stages from "../../pages/Stages";
import PrivateRoutes from "../../utils/PrivateRoutes";
import Tests from "../../pages/Tests";
import FAQ from "../../pages/FAQ";
import Settings from "../../pages/Settings";
import { user_api } from '../../API';
import axios from "axios";
import Questions from "../../pages/Questions";
import Confirmation from "../../pages/Confirmation";

function App() {
  const getCookie = (name) => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  )

  const [rememberMe, setRememberMe] = useState(true);
  const [token, setToken] = useState(rememberMe ? getCookie("session_token") : sessionStorage.getItem('session_token'))
  const [userName, setUserName] = useState("")
  const [userId, setUserId] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userGender, setUserGender] = useState("")
  const [answers, setAnswers] = useState([{id:1,ans:""},{id:2,ans:""},{id:3,ans:""},{id:4,ans:""},{id:5,ans:""},{id:6,ans:""}]);
  const [timer, setTimer] = useState([{id:1,time:0},{id:2,time:0},{id:3,time:0},{id:4,time:0},{id:5,time:0},{id:6,time:0}]);
  const [questionId, setQuestionId] = useState(0);
  var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();

  const getQuestionId = (id) => setQuestionId(id);

  useEffect(() => {
    token && axios.get(user_api,{
      headers: { 
        Authorization: `Bearer ${token}`
      },
    })
		.then((response) => {
      setUserName(response.data.data.user_firstname)
      setUserId(response.data.data.id)
      setUserEmail(response.data.data.user_email)
      setUserGender(response.data.data.user_gender);
		}).catch((err) => {
			console.log(err.message);
		});
  }, [token]);

  const handleLogin = (session_token, remember) => {
    setRememberMe(remember);
    if(remember){
      document.cookie = `session_token=${session_token}; expires=${expires};path=/;`
      sessionStorage.removeItem("session_token")
    }else{
      document.cookie = "session_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      sessionStorage.setItem('session_token', JSON.stringify(session_token))
    }
    setToken(session_token)
  }

  const getAnswers = (answer) => {
    setAnswers((prevAnswers) => {
      const prev_answers = prevAnswers.filter((answer) => answer.id !== Number(questionId))
      return [...prev_answers, {
        id: Number(questionId), 
        ans: answer,
      }].sort((a,b) => a.id - b.id);
    })
  }

  const getTimers = (counter) => {
    const timer = (180000-counter.total)/1000;
    setTimer((prevTimer) => {
      const prev_timer = prevTimer.filter((timer) => timer.id !== Number(questionId))
      return [...prev_timer, {
        id: Number(questionId), 
        time: timer,
      }].sort((a,b) => a.id - b.id);
    })
  }

  return (
    <ConfigProvider
      locale={arEG}
      direction="rtl" 
      theme={{
        token: {
          colorPrimary: '#6A5AE0',
          borderRadius: '20px',
        },
      }}
    >
      <BrowserRouter>
        <UsernameContext.Provider value={userName}>
          <GenderContext.Provider value={userGender}>
            <Routes>
              <Route path="/login" element={<Login handleLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route element={<PrivateRoutes token={token}/>}>
                <Route path="/" element={<Home />} />
                <Route path="/stages/:stageId" element={<Stages />} />
                <Route path="/stages/:stageId/questions/:questionId" element={<Questions getAnswers={getAnswers} getQuestionId={getQuestionId} getTimers={getTimers}/>} />
                <Route path="/confirmation" element={<Confirmation token={token} answers={answers} timer={timer} />} />
                <Route path="/tests" element={<Tests token={token} userId={userId}/>} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/settings" element={<Settings token={token} userEmail={userEmail}/>} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </GenderContext.Provider>
        </UsernameContext.Provider>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
export const UsernameContext = createContext();
export const GenderContext = createContext();
