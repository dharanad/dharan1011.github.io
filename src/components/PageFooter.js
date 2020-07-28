import React from 'react';
import {Row, Col} from 'antd';
import {HeartTwoTone} from '@ant-design/icons';
const PageFooter = () => (
  <Row justify="center">
    <Col>
      <span>
        {'</>'} with <HeartTwoTone twoToneColor="#eb2f96" />
      </span>
    </Col>
  </Row>
);
export default PageFooter;
