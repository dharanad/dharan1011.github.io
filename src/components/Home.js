import React from 'react';
import {Layout, Typography} from 'antd';
const Home = () => {
  const {Title, Paragraph, Link, Text} = Typography;
  const info = {
    name: 'Dharan Aditya',
    role: 'Asst. System Engineer',
    org: 'TCS',
    about: 'Nothing to say',
  };
  return (
    <React.Fragment>
      <Layout style={{height: '100%', padding: '2%'}}>
        <Typography>
          <Title level={1}>{info.name}</Title>
          <Text>
            {info.role} @ <Text strong>{info.org}</Text>
          </Text>
          <Title level={3}>About Me</Title>
          <Paragraph>{info.about}</Paragraph>
        </Typography>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
