import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Card, Avatar, Descriptions, Timeline } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.scss';

export default class UserCenter extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div className="user-center">
        <Card>
          <Avatar size="large" icon={<UserOutlined />} />
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Card>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
        </Card>
      </div>
    )
  }
}