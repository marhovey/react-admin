import loadable from '@loadable/component';
import { RouteComponentProps } from 'react-router';

export interface RouteConfigProps {
  path: string,
  exact: boolean,
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
  id: number,
  name?: string,
  routes?: Array<RouteConfigProps>
}

const Index = loadable(() => import('../pages/index'));
const Login = loadable(() => import('../pages/login'));
const Charts = loadable(() => import('../pages/charts'));
const Tables = loadable(() => import('../pages/table'));
const UserCenter = loadable(() => import('../pages/userCenter'));
const UserSetting = loadable(() => import('../pages/userSetting'));

export const routeConfig: Array<RouteConfigProps> = [
  {
    path: '/login',
    exact: true,
    component: Login,
    id: 99,
    name: '登陆',
    routes: []
  },
  {
    path: '/index',
    exact: false,
    component: Index,
    id: 999,
    name: '首页',
    routes: [
      {
        path: '/index/charts',
        exact: false,
        component: Charts,
        id: 1,
        name: '数据中心',
      },
      {
        path: '/index/table',
        exact: false,
        component: Tables,
        id: 2,
        name: '表格列表',
      },
      {
        path: '/index/userCenter',
        exact: false,
        component: UserCenter,
        id: 31,
        name: '个人中心',
      },
      {
        path: '/index/userSetting',
        exact: false,
        component: UserSetting,
        id: 32,
        name: '个人设置',
      }
    ]
  }
]