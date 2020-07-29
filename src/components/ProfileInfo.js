import React from 'react';
import {Typography} from 'antd';
const {Title, Paragraph, Text} = Typography;
const ProfileInfo = ({name, role, org, about}) => (
  <React.Fragment>
    <Typography>
      <Title level={1} style={{marginBottom: 0}}>
        {name}
      </Title>
      <span>
        <Text strong>{role}</Text> @ <Text strong>{org}</Text>
      </span>
      {about.length > 0 ? (
        <>
          <Title level={4}>About</Title>
          <Paragraph>{about}</Paragraph>
        </>
      ) : null}
    </Typography>
  </React.Fragment>
);
export default ProfileInfo;
