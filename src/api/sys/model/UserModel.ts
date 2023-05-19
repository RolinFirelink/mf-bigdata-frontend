import { PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 用户信息
 * @author: cgli
 * @date: 2022/10/11 15:28
 */
//登录接口参数
export interface LoginParams {
  //password方式登录时使用
  username?: string;
  //password方式登录时使用
  password?: string;
  client_id: string;
  client_secret: string;
  grant_type: string;
  redirect_uri: string;
  //auth_code方式登录时使用
  code?: string;
  state?: string;
  //刷新token时使用
  refresh_token?: string;
}

export interface RoleInfo {
  id: string;
  roleName: string;
  roleCode: string;
}

export interface AccessToken {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export interface SsoUser {
  id: string;
  orgName: string;
  account: string;
  phone: string;
  email: string;
  password: string;
  oldPassword: string;
  nickname: string;
  headImgUrl: string;
  telephone: string;
  birthday: string;
  sex: number;
  status: number;
  del_flag: number;
  salt: string;
  openid: string;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
  roleIds: string[];
  userRoles: RoleInfo[];
  permissions: Set<string>;
}

export interface OnlineUser {
  account: string;
  loginMode: number;
  ip: string;
  clientId: string;
  token: string;
  loginTime: string;
  expire: string;
}

export type SsoUserPageModel = PageResult<SsoUser>;

export type OnlineUserPageModel = PageResult<OnlineUser>;
