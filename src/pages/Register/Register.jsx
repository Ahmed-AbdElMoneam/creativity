import {
  Button,
  Form,
  Input,
  Select,
  Card,
  DatePicker,
} from 'antd';
import locale from 'antd/es/date-picker/locale/ar_EG';
import Icon, { MailOutlined } from '@ant-design/icons';
import BookIcon from '../../utils/Images/BookIcon';
import CityIcon from '../../utils/Images/CityIcon';
import config from '../../configs';
import { Link } from 'react-router-dom';
const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

const Register = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='reg__wrapper'>
      <div className="reg__logo">
				<img
					src={config.APP_LOGO_PATH}
					alt="LOGO"
					width="200"
					height="200"
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
              <Option value="first">الصف الأول</Option>
              <Option value="second">الصف الثاني</Option>
              <Option value="third">الصف الثالث</Option>
              <Option value="fourth">الصف الرابع</Option>
              <Option value="fifth">الصف الخامس</Option>
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
              <Option value="eg">مصر</Option>
              <Option value="sa">السعودية</Option>
              <Option value="bh">البحرين</Option>
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
            <Link to="/">
              <Button type="primary" htmlType="submit" className="form-button">
                تسجيل
              </Button>
            </Link>
            <Link to="/login">لدي حساب بالفعل !</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Register;