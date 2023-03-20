import { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  Card,
  DatePicker,
  message,
} from 'antd';
import locale from 'antd/es/date-picker/locale/ar_EG';
import Icon, { MailOutlined, UserOutlined } from '@ant-design/icons';
import BookIcon from '../../utils/Images/BookIcon';
import CityIcon from '../../utils/Images/CityIcon';
import config from '../../configs';
import { Link, useNavigate } from 'react-router-dom';
import { register_api, countries_api } from '../../API';
import axios from "axios";
const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

const Register = () => {
  const [countries, setCountries] = useState({})
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    fetch(countries_api)
      .then((res) => res.json())
      .then((response) => setCountries(response.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const onFinish = (values) => {
    axios.post(register_api,{
			user_firstname: values.name,
      user_email: values.email,
      user_birth_date: values.date, 
      user_school_grade: values.grade,
      user_school_name: values.school,
      user_gender: values.gender,
      user_countrycode: values.country,
      user_city: values.city
		},
		{
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		.then((response) => {
      if(response.data.success){
        messageApi.success('تم إنشاء حسابك بنجاح. سجل دخولك و ابدأ الأن');
        setTimeout(() => {
          navigate("/login")
        }, 2000)
      }else if(response.data.message === "البريد الإلكتروني مسجل مسبقا"){
        messageApi.error(response.data.message);
			}else{
				messageApi.info('من فضلك تأكد من إدخال جميع البيانات بشكل صحيح');
			}
		}).catch((err) => {
			console.log(err.message);
		});
  };

  return (
    <div className='reg__wrapper'>
      {contextHolder}
      <div className="reg__logo">
				<img
					src={config.APP_LOGO_PATH}
					alt="LOGO"
					width="220"
					height="220"
					style={{ marginRight: '1rem' }}
				/>
			</div>
      <Card title="انشئ حسابك" className='reg__card'>
        <Form
          form={form}
          name="register"
          layout='vertical'
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="name"
            label="اسم المستخدم"
            rules={[
              {
                required: true,
                message: 'من فضلك أدخل اسم المستخدم !',
              },
            ]}
          >
            <Input className='input__style' prefix={<UserOutlined />} placeholder="أدخل اسم المستخدم" />
          </Form.Item>

          <Form.Item
            name="email"
            label="البريد الالكتروني"
            rules={[
              {
                type: 'email',
                message: 'البريد الالكتروني غير صالح !',
              },
              {
                required: true,
                message: 'من فضلك أدخل بريدك الالكتروني !',
              },
            ]}
          >
            <Input className='input__style' prefix={<MailOutlined />} placeholder="أدخل بريدك الإلكتروني" />
          </Form.Item>

          <Form.Item
            name="date"
            label="تاريخ الميلاد"
            rules={[
              {
                required: true,
                message: 'أدخل تاريخ الميلاد',
              },
            ]}
          >
            <DatePicker className='input__style' locale={locale} style={{ width: '100%' }} format={dateFormat} placeholder="يوم / شهر / سنة" />
          </Form.Item>

          <Form.Item
            name="grade"
            label="الصف الدراسي"
            rules={[
              {
                required: true,
                message: 'من فضلك اختر الصف الدراسي !',
              },
            ]}
          >
            <Select className='input__style' placeholder="اختر الفصل الدراسي">
              <Option value="first" key={1}>الصف الأول</Option>
              <Option value="second" key={2}>الصف الثاني</Option>
              <Option value="third" key={3}>الصف الثالث</Option>
              <Option value="fourth" key={4}>الصف الرابع</Option>
              <Option value="fifth" key={5}>الصف الخامس</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="school"
            label="اسم المدرسة"
            rules={[
              {
                required: true,
                message: 'من فضلك أدخل اسم المدرسة !',
              },
            ]}
          >
            <Input className='input__style' prefix={<Icon component={BookIcon} />} placeholder="أدخل اسم المدرسة" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="النوع"
            rules={[
              {
                required: true,
                message: 'من فضلك اختر النوع !',
              },
            ]}
          >
            <Select className='input__style' placeholder="اختر النوع">
              <Option value="male" key={1}>ذكر</Option>
              <Option value="female" key={2}>أنثى</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="country"
            label="الدولة"
            rules={[
              {
                required: true,
                message: 'من فضلك اختر الدولة !',
              },
            ]}
          >
            <Select className='input__style' placeholder="اختر الدولة">
              {Object.keys(countries).map((country, index) => {
                return <Option value={country} key={index+1}>{countries[country]}</Option>
              })}
            </Select>
          </Form.Item>

          <Form.Item
            name="city"
            label="اسم المدينة"
            rules={[
              {
                required: true,
                message: 'من فضلك أدخل اسم المدينة !',
              },
            ]}
          >
            <Input className='input__style' prefix={<Icon component={CityIcon} />} placeholder="أدخل اسم المدينة" />
          </Form.Item>

          <Form.Item className='login__buttons'>
            <Button type="primary" htmlType="submit" className="form-button">
              تسجيل
            </Button>
            <Link to="/login">لدي حساب بالفعل !</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Register;