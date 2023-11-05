import axios from 'axios';

// -- 行政职务
// 行政级别
export enum AdministrativeLevel {
  A_5 = '处级正职或五级职员',
  A_6 = '处级副职或六级职员',
  A_7 = '科级正职或七级职员',
  A_8 = '科级副职或八级职员',
  A_9 = '科员或九级职员',
  A_10 = '办事员或十级职员',
}

export interface AdministrationInfo {
  start_time: string;
  end_time: string;
  administration_level: AdministrativeLevel;
  administration_dept: string;
  administration_name: string;
  administration_number: string;
  note: string;
}

export function getAdministrationInfo(): Promise<AdministrationInfo[]> {
  return axios.get('/api/administration-info').then((res) => res.data);
}
