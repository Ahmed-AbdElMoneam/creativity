import { Link } from 'react-router-dom';
import { Col } from 'antd';

const Logo = ({ image, theme }) => {
  return (
    <>
      <Col span={2}>
        <Link className='header__logo' to="/">
          <img width={70} src={`/images/${image}`} alt="logo" />
        </Link>
      </Col>
      <Col span={5}>
        <Link className='header__title' style={{ color: theme === 'light' ? 'white' : '#49465F' }} to="/">
          <span className='header__title__span__ar'>نسبة الإبداع</span>

          <span className='header__title__span__en'>
            <span className='header__title__span__letter'>C</span>
            reativity <span className='header__title__span__letter'>Q</span>
            uotient
          </span>
        </Link>
      </Col>
    </>
  );
}

export default Logo;