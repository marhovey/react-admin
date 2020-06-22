import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Tabs, Upload, message, Form, Input, Select, Button, List, Switch } from 'antd';
import {  } from '@ant-design/icons'
import './index.scss';

const { TabPane } = Tabs;
const {Option} = Select;
export default class UserSetting extends React.Component<RouteComponentProps> {
  
  state = {
    imgUrl: '',
    safeData: [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ],
    notifyData: [
      {
        title: '账户密码'
      },
      {
        title: '系统通知'
      },
      {
        title: '任务通知'
      }
    ]
  }

  beforeUpload(file: File) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  changeFile(info: any) {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (imgUrl: string) =>
        this.setState({
          imgUrl,
          loading: false,
        }),
      );
    }
  }

  getBase64(img: File, callback: Function) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  updateData(values: any) {

  }
  
  render() {
    const {imgUrl, safeData, notifyData} = this.state
    return (
      <div className="user-setting">
        <Tabs 
          tabPosition='left'
          defaultActiveKey="1">
          <TabPane tab="基本信息" key="1">
            <div className="basic">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={(file) => this.beforeUpload(file)}
                onChange={(info) => this.changeFile(info)}
              >
                {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : <div className="ant-upload-text">头像</div>}
              </Upload>
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                name="nest-messages"
                onFinish={(values) => this.updateData(values)}>
                <Form.Item name={['user', 'name']} label="姓名" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'sex']} label="性别">
                  <Select defaultValue="1" style={{ width: 120 }}>
                    <Option value="1">男</Option>
                    <Option value="2">女</Option>
                  </Select>
                </Form.Item>
                <Form.Item name={['user', 'email']} label="邮箱" rules={[{ type: 'email' }]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="个人主页">
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="个人简介">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{offset: 4}}>
                  <Button type="primary" htmlType="submit">
                    提交
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </TabPane>
          <TabPane tab="安全设置" key="2">
            <div className="safe">
              <List
                itemLayout="horizontal"
                dataSource={safeData}
                renderItem={(item: any) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                )}
              />
            </div>
          </TabPane>
          <TabPane tab="通知设置" key="3">
            <div className="notification">
            <List
                itemLayout="horizontal"
                dataSource={notifyData}
                renderItem={(item: any) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="站内信的形式通知到你"
                    />
                    <div className="">
                      <Switch defaultChecked />
                    </div>
                  </List.Item>
                )}
              />
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}