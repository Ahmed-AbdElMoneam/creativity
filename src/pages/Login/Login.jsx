// import { Button, Card, Form } from "antd";
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import config from '../../configs';
import { Link } from 'react-router-dom';

const Login = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	return (
		<div className="auth__wrapper">
			<div className="auth__logo">
				<img
					src={config.APP_LOGO_PATH}
					alt="LOGO"
					width="200"
					height="200"
					style={{ marginRight: '1rem' }}
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
						<Input
							className='input__style'
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="أدخل كلمة المرور"
						/>
					</Form.Item>
					<Form.Item className='login__props'>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>تذكرني</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							نسيت كلمة مرورك ؟
						</a>
					</Form.Item>

					<Form.Item className='login__buttons'>
						<Link to="/">
							<Button type="primary" htmlType="submit" className="form-button">
								سجل الدخول
							</Button>
						</Link>
						<Link to="/register">ليس لديك حساب !</Link>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
}

export default Login;