import {Baseurl} from "@site/src/api/modules/baseurl";
import http from '@site/src/api'
/**
 * 客户组别
 */
export const queryAllCustomerGroup = (params: any) => {
    return http.get<any>(`${Baseurl}/customer/queryAllCustomerGroup`, params)
}