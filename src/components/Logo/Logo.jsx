import { Link } from 'react-router-dom';
import { Col } from 'antd';

const Logo = ({ image, theme }) => {
  return (
    <>
      <Col span={1}>
        <Link className='header__logo' to="/">
          <img style={{ width: '5.1vw', minWidth: '70px' }} src={`/images/${image}`} alt="logo" />
        </Link>
      </Col>
      <Col span={6} className='logo__title'>
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