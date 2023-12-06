/*
 * @Author: xxx xxx
 * @Date: 2022-12-28 16:38:14
 * @LastEditors: xxx xxx
 * @LastEditTime: 2023-03-06 16:43:50
 * @FilePath: \react-admin\src\api\interface\EleLockRequest.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// * 请求响应参数(不包含data)
export interface Result {
  code: string | number
  msg: string
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  data?: T
}

// * 分页响应参数
export interface ResPage<T> {
  list: T[]
  pageNum: number
  pageSize: number
  total: number
}

// * 分页请求参数
export interface ReqPage {
  pageNum: number | undefined
  pageSize: number | undefined
  [propName: string]: any
}

export type RequestMethodType = 'get' | 'post' | 'put' | 'delete'

// * 登录
export namespace Login {
  export interface ReqLoginForm {
    username: string
    password: string
  }
  export interface ResLogin {
    access_token: string
  }
  export interface ResAuthButtons {
    [propName: string]: any
  }
}
