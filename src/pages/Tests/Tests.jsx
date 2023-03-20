import { useEffect, useState } from "react";
import { Layout, Button, Row, Col } from 'antd';
import { DownloadOutlined, LoadingOutlined } from '@ant-design/icons';
import HeaderLayout from '../../layout/HeaderLayout';
import { tests_api, print_api } from '../../API';
import axios from "axios";
const { Content } = Layout;

const Tests = ({ token, userId }) => {
  const[tests, setTests] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(tests_api,{
      headers: { 
        Authorization: `Bearer ${token}`
      },
    })
		.then((response) => {
      setTests(response.data.data.user_tests_info)
      setIsLoading(false)
		}).catch((err) => {
			console.log(err.message);
		});
  }, []);

  const handleDownload = (test_id) => {
    axios.get(print_api,{
      responseType: "blob",
      params: {
        report_id: test_id,
        user_id: userId,
      },
      headers: { 
        Authorization: `Bearer ${token}`
      },
    })
		.then((response) => {
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", "Creativity_test_results.pdf");
			document.body.appendChild(link);
			link.click();
		}).catch((err) => {
			console.log(err.message);
		});
  }

  return (
    <Layout className='tests__layout'>
      <HeaderLayout theme="light" />
      <Content className="tests__content__wrapper">
        <Row>
          <Col span={24} className='tests__main__title'>
            التقارير
          </Col>
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {!isLoading && tests && tests.map((test, index) => {
            return(
              <Col xl={{ span: 8 }} md={{ span: 12 }} span={24} style={{ textAlign: 'center' }} key={index}>
                <Button className='tests__button' onClick={() => handleDownload(test.id)}>
                  <Row>
                    <Col span={6}>
                      <img src={`/images/document.svg`} alt="" />
                    </Col>
                    <Col span={14} className='settings__button__title'>
                      <span style={{ fontSize: '21px' }}>{`تقرير ${index+1}`}</span>
                      <span style={{ fontSize: '14px', color: '#858494' }}>{`التاريخ: ${test.date_added}`}</span>
                    </Col>
                    <Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <DownloadOutlined />
                    </Col>
                  </Row>
                </Button>
              </Col>
            )
          })}
          {!isLoading && !tests && <p style={{ fontSize: '40px' }}>لا توجد لديك أي تقارير</p>}
          {isLoading && <LoadingOutlined className="loading__icon" style={{ height: '600px' }} />}
        </Row>
      </Content>
    </Layout>
  );
}

export default Tests;