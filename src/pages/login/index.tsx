import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { Scene } from 'three';
import './index.scss';
import $http from './http';
import { RouteComponentProps } from 'react-router';

export default class Login extends React.Component<RouteComponentProps> {

  state = {
    loading: false
  }

  componentDidMount() {

  }

  handleLogin(values: any) {
    console.log('ok')
    // $http.login(values)
    //   .then(res => {

    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.props.history.push('/index/charts')
    }, 500)
  }

  initThree() {

  }

  render() {
    const { loading } = this.state
    return (
      <div className="login">
        <div className="login-box">
          <div className="login-title">欢迎来到登录页面</div>
          <div className="login-tooltip">基于antd的后台管理界面</div>
          <Form
            onFinish={(values) => this.handleLogin(values)}
            className="login-form">
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <div className="password-tip">
              *账号密码随便输
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
              >
                登 录
              </Button>
            </Form.Item>
          </Form>
          
        </div>
      </div>
    )
  }
}