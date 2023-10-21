import axios from 'axios';

export interface BaseInfo {
  name: string;
  ethinicity: string; // 民族
  pinyin_name: string;
  former_name: string;
  birth_date: string;
  marriage_status: string;
  nationality: string; // 国籍
  hometown: string; // 籍贯
  political_affiliation: string; // 政治面貌
  id_type: string; // 证件类型
  id_number: string; // 证件号码
  origin_place: string; // 生源地
  religious_belief: string; // 宗教信仰
  height: string;
  health_status: string;
  weight: string;
}

export function getBaseInfo() {
  return axios.get<BaseInfo>('/api/base-info');
}
export function updateBaseInfo(data: BaseInfo) {
  return axios.post<BaseInfo>('/api/base-info', data);
}