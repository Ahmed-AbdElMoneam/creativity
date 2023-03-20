import { Col, Row, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const SettingsButton = ({ image, title, description }) => {
  return (
    <Col xl={{ span: 8 }} md={{ span: 12 }} span={24} style={{ textAlign: 'center' }}>
      <Button className='settings__button'>
        <Row>
          <Col span={6}>
            <img src={`/images/${image}`} alt="" />
          </Col>
          <Col span={14} className='settings__button__title'>
            <span style={{ fontSize: '21px' }}>{ title }</span>
            <span style={{ fontSize: '14px', color: '#858494' }}>{ description }</span>
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