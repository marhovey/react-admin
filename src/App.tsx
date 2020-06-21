import React from 'react';
import { Provider } from 'react-redux';
import zhCN from 'antd/es/locale-provider/zh_CN';
import { HashRouter } from 'react-router-dom';
import { MyRouter } from './router';
import { ConfigProvider, message, notification } from 'antd';
import storeConfig from './store';
import moment  from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './App.css'
moment.locale('zh-cn');

const store = storeConfig();

message.config({
  duration: 2,
  maxCount: 2
});
notification.config({
  placement: 'topRight',
  bottom: 50,
  duration: 2,
});
function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <MyRouter />
        </HashRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
