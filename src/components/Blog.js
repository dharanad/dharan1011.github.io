import React from 'react';
import {Layout, Empty} from 'antd';
const Blog = () => (
  <React.Fragment>
    <Layout style={{height: '100%', overflow: 'auto', padding: '2%'}}>
      {/* <List>
        {Array(100)
          .fill(null)
          .map((_val, index) => (
            <List.Item key={index}>{index}</List.Item>
          ))}
      </List> */}
      <Empty />
    </Layout>
  </React.Fragment>
);

export default Blog;
