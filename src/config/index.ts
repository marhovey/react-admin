import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { delCookie } from "../utils/cookies";

interface TokenProps {
  requestName: string,
  f: Function
}

export interface AjaxOptions {
  method: Method,
  url: string,
  data?: any,
  contentType?: string
}

axios.defaults.timeout = 15000;
let tokens : Array<TokenProps> = [];
let cancelToken = axios.CancelToken;
const baseUrl = "https://";

let cancel = (token: any) => {
  let ind = tokens.findIndex(
    (item: TokenProps) =>
      item.requestName === `${token.url}&${token.method}`
  );
  if (ind !== -1) {
    tokens[ind].f();
    tokens.splice(ind, 1)
  }
};

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    cancel(config);
    config.cancelToken = new cancelToken((c) => {
      tokens.push({
        requestName: `${config.url}&${config.method}`,
        f: c
      })
    });
    return config
  },
  err => {
    return Promise.reject(err)
  }
);

axios.interceptors.response.use(
  (res: AxiosResponse) => {
    cancel(res.config);
    return res
  },
  (err: any) => {
    if (err.__CANCEL__) {
      return Promise.resolve({
        data: {
          errcode: 10000,
          errMsg: 'cancel'
        }
      })
    }
    if (err.response && err.response.status === 401) {
      cancel(err.response.config);
      delCookie('sid');
      window.location.href = '#/login';
      return Promise.reject('身份信息已失效')
    }
    if(!err.response) {
      return Promise.reject('系统繁忙，请稍后再试...')
    }
    return Promise.reject(err)
  }
);

export function AjaxService(options: AjaxOptions) {
  const {
    method,
    url = baseUrl,
    contentType = "application/json",
    data = {}
  } = options;
  if (data) {
    for (let k of Object.keys(data)) {
      if ((data[k] === '') || (data[k] === undefined)) {
        delete data[k]
      }
    }
  }
  return axios({
    method: method,
    headers : {
      "Access-Control-Allow-Origin": "*",
      "content-type": contentType
    },
    url: baseUrl + url,
    params: method.toUpperCase() === 'GET' ? data : '',
    data: data,
    responseType: 'json'
  })
}