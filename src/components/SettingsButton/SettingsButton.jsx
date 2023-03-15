import { Col, Row, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const SettingsButton = ({ image, title, description }) => {
  return (
    <Col span={8} style={{ textAlign: 'center' }}>
      <Button className='settings__button'>
        <Row>
          <Col span={6}>
            <img src={`/images/${image}`} alt="" />
          </Col>
          <Col span={14} className='settings__button__title'>
            <span style={{ fontSize: '1.5vw' }}>{ title }</span>
            <span style={{ fontSize: '1vw', color: '#858494' }}>{ description }</span>
          </Col>
          <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <LeftOutlined />
          </Col>
        </Row>
      </Button>
    </Col>
  );
}

export default SettingsButton;