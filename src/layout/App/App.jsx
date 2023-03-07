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
import Questions from "../../pages/Questions";
import PrivateRoutes from "../../utils/PrivateRoutes";
import Confirmation from "../../pages/Confirmation";

function App() {
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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoutes/>}>
            <Route path="/" element={<Home />} />
            <Route path="/stages/:stageId" element={<Stages />} />
            <Route path="/stages/:stageId/questions/:questionId" element={<Questions />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
