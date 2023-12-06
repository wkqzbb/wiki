import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import {message} from 'antd'
import dayjs from "dayjs";
import {ResultData} from "@site/src/api/interface";


const config = {
    // 默认地址请求地址，可在 .env 开头文件中修改
    baseURL: 'https://localhost:8011' as string,
    // 设置超时时间（10s）
    timeout: 10000,
    // 跨域时候允许携带凭证
    withCredentials: true
}
// class RequestHttp {
// 	service: AxiosInstance;
// 	public constructor(config: AxiosRequestConfig) {
// 		// 实例化axios
// 		this.service = axios.create(config);

// const config = {
//   // 默认地址请求地址，可在 .env 开头文件中修改
//   baseURL: API_BASE_URL as string,
//   // 设置超时时间（10s）
//   timeout: 10000,
//   // 跨域时候允许携带凭证
//   withCredentials: true
// }
class RequestHttp {
    service: AxiosInstance

    public constructor (config: AxiosRequestConfig) {
        // 实例化axios
        this.service = axios.create(config)

        /**
         * @description 请求拦截器
         * 客户端发送请求 -> [请求拦截器] -> 服务器
         * token校验(JWT) : 接受服务器返回的token,存储到redux/本地储存当中
         */
        this.service.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                // * 如果当前请求不需要显示 loading,在api服务中通过指定的第三个参数: { headers: { noLoading: true } }来控制不显示loading，参见loginApi
                // const token: string = getToken()
                const timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss')
                // let headers: any = {
                //     'Ocp-Apim-Subscription-Key': SSO_KEY,
                //     'Auth-Type': 'sso',
                //     Authorization: token ? `Bearer ${token}` : '',
                //     timestamp,
                //     app: APP_NAME
                // }
                let headers: any = {
                    'Ocp-Apim-Subscription-Key': 1,
                    'Auth-Type': 'sso',
                    Authorization: 1 ? `Bearer ${1}` : '',
                    timestamp,
                    app: 1
                }
                // if (config.url?.includes('sso/login')) {
                //     delete headers.Authorization
                //     delete headers['Auth-Type']
                // }
                // const signData: any = sign(config, API_KEY, SECRET, timestamp)
                // if (config.method === 'get' || config.method === 'delete') {
                //     config.params = {}
                //     config.url = signData
                // }
                // if (config.method === 'post' || config.method === 'put') {
                //     config.data = signData.bodyData
                //     config.url = signData.url
                // }

                return { ...config, headers: { ...config.headers, ...headers } }
            },
            (error: AxiosError) => {
                return Promise.reject(error)
            }
        )

        /**
         * @description 响应拦截器
         *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
         */
        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                const { data } = response
                // NProgress.done()
                // // // * 登录失效（code == 401）
                // // if (response.status == ResultEnum.OVERDUE) {
                // // 	store.dispatch(setToken(""));
                // // 	message.error(data.message).then(() => {
                // // 		if (IS_SSO) {
                // // 			window.location.href = SSO_LOGIN_URL;
                // // 		} else {
                // // 			window.location.hash = "/login";
                // // 		}
                // // 	});
                // // 	return Promise.reject(data);
                // // }
                // // * 账户禁用（code == 405）
                // if (data.code == ResultEnum.STATE) {
                //     store.dispatch(setToken(''))
                //     message.error(data.message).then(() => {
                //         history.push('/405')
                //     })
                //     return Promise.reject(data)
                // }
                // // * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
                // if (data.code && data.code !== ResultEnum.SUCCESS) {
                //     message.error(data.message)
                //     return Promise.reject(data)
                // }
                // * 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
                if (response.request.responseType === 'blob' && response.headers['content-disposition']) {
                    let fileName = response.headers['content-disposition']
                    return { data, fileName: decodeURI(fileName.split('=')[1]) }
                } else {
                    return data
                }
            },
            async (error: AxiosError) => {
                // const { response } = error
                // NProgress.done()
                // if (response) checkStatus(response.status)
                // if (response?.status == ResultEnum.OVERDUE) {
                //     store.dispatch(setToken(''))
                //     if (IS_SSO) {
                //         window.location.href = SSO_LOGIN_URL
                //     } else {
                //         window.location.hash = '/login'
                //     }
                // }
                // 请求超时单独判断，请求超时没有 response
                if (error.message.indexOf('timeout') !== -1) message.error('请求超时，请稍后再试')
                // 根据响应的错误状态码，做不同的处理

                // 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
                if (!window.navigator.onLine) window.location.hash = '/500'
                return Promise.reject(error)
            }
        )
    }

    // * 常用请求方法封装
    get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
        return this.service.get(url, { params, ..._object })
    }

    post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
        console.log(_object)
        console.log(params)
        return this.service.post(url, params, _object)
    }

    put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
        return this.service.put(url, params, _object)
    }

    delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
        return this.service.delete(url, { params, ..._object })
    }
}

export default new RequestHttp(config)
