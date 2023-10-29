import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
}
export interface RegisterData {
  username: string;
  password: string;
  checkPassword: string;
  email: string;
}

// 包装用户信息返回结果
export interface UserInfo {
  id: number;
  username: string;
  email: string;
  phone: string;
  organization: string;
  registrationDate: string;
  role: number;
}

export interface LoginRes {
  id: number;
  username: string;
  email: string;
  role: string;
  token: string;
}
export interface RegsterRes {
  status: string;
}
export interface UpdateUserRes {
  code: number;
  msg: string;
  data: UserInfo;
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/api/user/login', data);
}

export function register(data: RegisterData) {
  return axios.post<RegsterRes>('/api/user/register', data);
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}

export function getAllUser() {
  return axios.get<UserInfo[]>('/api/user');
}

export function deleteUser(id: number) {
  return axios.delete(`/api/user/${id}`);
}

export function updateUser(id: number, data: UserInfo) {
  return axios.put<UpdateUserRes>(`/api/user/${id}`, data);
}

export function partialUpdateUser(id: number, data: UserState) {
  return axios.patch(`/api/user/${id}`, data);
}
