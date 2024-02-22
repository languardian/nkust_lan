import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import Nav from '../component/Nav';
import { Link } from 'react-router-dom';
import './EmployeeLogin.css';
import Logo from 'C:/test project/mchotdog/src/pages/Logo.png';

const EmployeeLogin = () => {
  const onFinish = async (values) => {
    // try {
    //   console.log('Received values:', values);
    //   // 向後端發送帳號密碼，進行驗證
    //   const response = await yourAuthenticationFunction(values); // 請替換成實際的後端驗證函式

    //   if (response.success) {
    //     // 假設後端返回驗證成功的回應，使用 Link 將使用者導向到首頁
    //     // 在 Link 中設定首頁路徑
    //     // <Link to="/">回到首頁</Link>
    //   } else {
    //     // 處理驗證失敗的情況，例如顯示錯誤訊息
    //     console.log('Authentication failed:', response.message);
    //   }
    // } catch (error) {
    //   console.error('Error during authentication:', error);
    // }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row>
        <Col span={3} push={0} className='form-container'>
        <Nav></Nav>
        </Col>
        
        <Col span={8} push={4} className="form-wrapper1">
        <img src={Logo} alt="Logo" style={{ display: 'block', margin: 'auto', width: '80%', marginBottom: 20 }} />
        <p >
            ~歡迎來到彬彬的房間~
        </p>
        <hr/>
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
        
          <Form.Item
            className='custom-form-item'
            label="帳號"
            name="username"
            rules={[{ required: true, message: '請輸入帳號!' }]}
          >
            <Input activeBorderColor placeholder='兆彬幫你泡牛奶'></Input>
          </Form.Item>

          <Form.Item
            className='custom-form-item'
            label="密碼"
            name="password"
            rules={[{ required: true, message: '請輸入密碼!' }]}
          >
            <Input.Password placeholder='兆彬幫你蓋棉被'></Input.Password>
          </Form.Item>

          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/Home"> {/* 使用 Link 將使用者導向到首頁 */}
                  <Button type="primary" htmlType="submit">
                    登入
                  </Button>
                </Link>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default EmployeeLogin;
