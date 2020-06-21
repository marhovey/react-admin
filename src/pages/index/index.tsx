import React from 'react';
import { Menu, Dropdown } from 'antd';
import { Switch } from 'react-router-dom';
import { PieChartOutlined, LogoutOutlined, TableOutlined, AppstoreOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import './index.scss';
import { RouteConfigProps } from '../../router/routerConfig';
import { SubRoute } from '../../router/subRoute';

const { SubMenu } = Menu;

interface NavProps {
  path: string,
  name: string,
  key: string,
  id: number,
  children?: Array<NavProps>,
  icon?: React.ReactNode
}
export default class Index extends React.Component<any> {

  state = {
    menuKey: 'index'
  }

  navMenu: Array<NavProps> = [
    {
      path: '/index/charts',
      name: '数据统计',
      key: 'index',
      id: 1,
      icon: <PieChartOutlined />
    },
    {
      path: '/index/table',
      name: '表格列表',
      key: 'table',
      id: 2,
      icon: <TableOutlined />
    },
    {
      path: '/index',
      name: '个人中心',
      key: 'user',
      id: 3,
      icon: <AppstoreOutlined />,
      children: [
        {
          path: '/index/userCenter',
          name: '个人中心',
          key: 'userCenter',
          id: 31,
          icon: <UserOutlined />
        },
        {
          path: '/index/userSetting',
          name: '个人设置',
          id: 32,
          icon: <SettingOutlined />,
          key: 'userSetting'
        }
      ]
    }
  ]

  componentDidMount() {
    
  }

  renderNav(data: Array<NavProps>) {
    return data.map((v) => {
      if(!v.children || v.children.length < 1) {
        return this.renderNavItem(v)
      }
      return (
        <SubMenu key={v.key} icon={v.icon} title={v.name}>
          {
            v.children.map((item) => {
              return this.renderNavItem(item)
            })
          }
        </SubMenu>
      )
    })
  }

  changePath(data: {
    key: string,
    path: string
  }) {
    this.setState({
      menuKey: data.key
    }, () => {
      this.props.history.push(data.path)
    })
  }

  renderNavItem(data: NavProps) {
    return (
      <Menu.Item
        onClick={() => this.changePath(data)}
        key={data.key}
        icon={data.icon}>
        {data.name}
      </Menu.Item>
    )
  }

  render() {
    const {menuKey} = this.state
    const dropMenu = (
      <Menu>
        <Menu.Item
          onClick={() => this.changePath({key: 'userCenter', path: '/index/userCenter'})}
          key={'userCenter'}
          icon={<UserOutlined />}
        >
          个人中心
        </Menu.Item>
        <Menu.Item
          onClick={() => this.changePath({key: 'userSetting', path: '/index/userSetting'})}
          key={'userSetting'}
          icon={<SettingOutlined />}
        >
          个人设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          onClick={() => this.changePath({key: '', path: '/login'})}
          key={'logout'}
          icon={<LogoutOutlined />}
        >
          退出登录
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="index">
        <div className="left-nav">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={[menuKey]}
          >
            {this.renderNav(this.navMenu)}
          </Menu>
        </div>
        <div className="container">
          <div className="top-nav">
            <Dropdown overlay={dropMenu}>
              <div>
                <UserOutlined />
                个人中心
              </div>
            </Dropdown>
          </div>
          <div className="content">
            <Switch>
              {
                this.props.routes.map((item: RouteConfigProps) => {
                  return (
                    <SubRoute
                      {...item}
                      key={item.id}
                      path={item.path}
                    />
                  )
                })
              }
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}