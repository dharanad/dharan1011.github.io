import React from 'react';
import {Tag, Row, Col, Divider, Popover} from 'antd';
import {
  SyncOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
const SkillList = ({skills}) => {
  const colorLevel = ['#52c41a', '#1890ff', '#fa541c'];
  const TagIcons = [CheckCircleOutlined, ClockCircleOutlined, SyncOutlined];
  const skillInfo = ['Primary Skill', 'Secondary Skill', 'Learning'];
  return (
    <React.Fragment>
      <Divider orientation="left">Skills</Divider>
      <Row justify="start" align="stretch">
        {skills.map(({name, type, info}, index) => {
          let Icon = TagIcons[type - 1];
          let spin = false;
          if (type === 3) {
            spin = true;
          }
          return (
            <Col>
              <Popover
                title={skillInfo[type - 1]}
                placement="top"
                content={info}>
                <Tag
                  key={index}
                  color={colorLevel[type - 1]}
                  icon={<Icon spin={spin} />}>
                  {name}
                </Tag>
              </Popover>
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};

export default SkillList;
