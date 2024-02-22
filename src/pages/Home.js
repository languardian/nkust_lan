import React from 'react';
import Nav from '../component/Nav';
import images from 'C:/test project/mchotdog/src/pages/images.jpg';
import { Col, Row } from 'antd';

function Home() {
  return (
    <Row>
        <Col span={3.7} push={0} className='form-container'>
        <Nav></Nav>
        </Col>
        
        <Col span={8} push={5} className="form-wrapper">
        <img src={images} alt="Logo" style={{ display: 'block', margin: 'auto', width: '80%', marginBottom: 20 }} />
        </Col>
    </Row>
  );
}

export default Home;
