import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Footer, Content } = Layout;

const Confirmation = () => {
  return (
    <Layout className='confirmation__layout'>
      <Content className="confirmation__content__wrapper">
        <div>
          <h1 style={{ fontSize: '50px' }}>شكرا لك !</h1>
          <p style={{ fontSize: '40px' }}>لقد استلمنا إجاباتك و سيتم التواصل معك عبر البريد الإلكتروني لاحقا</p>
        </div>
        <Link to="/">
          <Button className='confirmation__footer__button'>
            العودة إلى الرئيسية
          </Button>
        </Link>
      </Content>
    </Layout>
  );
}

export default Confirmation;