import { Button, Checkbox, Form, Input, Card, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import config from '../../configs';
import { Link, useNavigate } from 'react-router-dom';
import { login_api } from '../../API';
import axios from "axios";

const Login = ({ handleLogin }) => {
	const navigate = useNavigate();
	const [messageApi, contextHolder] = message.useMessage();

	const onFinish = (values) => {
		axios.post(login_api,{
			user_email: values.username,
			user_password: values.password,
		},
		{
			headers: {
				'Content-Type': 'multipart/form-data'
			},
		})
		.then((response) => {
			if(response.data.success){
				messageApi.success(response.data.message);
				handleLogin(response.data.data.token, values.remember)
				setTimeout(() => {
          navigate("/")
        }, 1500)
			}else if(response.data.message === "form_validation"){
				messageApi.info('من فضلك تأكد من إدخال البريد الإلكتروني و كلمة المرور بشكل صحيح');
				sessionStorage.removeItem("session_token")
				document.cookie = "session_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
			}else{
				messageApi.warning(response.data.message);
				sessionStorage.removeItem("session_token")
				document.cookie = "session_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
			}
		}).catch((err) => {
			console.log(err.message);
		});
	};

	return (
		<div className="auth__wrapper">
			{contextHolder}
			<div className="auth__logo">
				<img
					src={config.APP_LOGO_PATH}
					alt="LOGO"
					width="220"
					height="220"
				/>
			</div>
			<Card title="تسجيل الدخول" className='login__card'>
				<Form
					name="login_form"
					className="login-form"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: 'من فضلك أدخل بريد إلكتروني صحيح !',
							},
						]}
					>
						<Input className='input__style' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="أدخل بريدك الإلكتروني" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'من فضلك أدخل كلمة المرور بشكل صحيح !',
							},
						]}
					>
						<Input.Password
							className='input__style'
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="أدخل كلمة المرور"
						/>
					</Form.Item>
					<Form.Item name="remember" valuePropName="checked" className='login__props'>
						<Checkbox>تذكرني</Checkbox>
					</Form.Item>

					<Form.Item className='login__buttons'>
						<Button type="primary" htmlType="submit" className="form-button">
							سجل الدخول
						</Button>
						<Link to="/register">ليس لديك حساب !</Link>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
}

export default Login;