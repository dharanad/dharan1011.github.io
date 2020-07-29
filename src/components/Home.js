import React from 'react';
import {Layout, Row, Col} from 'antd';
import ProfileInfo from './ProfileInfo';
import SkillList from './SkillList';
import info from './mockinfo';

const Home = () => {
  return (
    <React.Fragment>
      <Layout style={{height: '100%', padding: '2%'}}>
        <Row>
          <Col>
            <ProfileInfo {...info} />
          </Col>
        </Row>
        <Row>
          <Col>
            <SkillList skills={info.skills} />
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
