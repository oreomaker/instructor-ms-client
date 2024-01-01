import axios from 'axios';

// -- 职称信息
// 专业技术职务级别
export enum ProfessionalLevel {
  JUNIOR = '初级', // 初级
  INTERMEDIATE = '中级', // 中级
  ASSOCIATE_SENIOR = '副高级', // 副高级
  FULL_SENIOR = '正高级', // 正高级
}

export interface JobTitle {
  professional_level: ProfessionalLevel;
  position_name: string;
  start_time: string;
  end_time: string;
  employ_dept: string;
  note: string;
}

export function getJobTitle(id: number): Promise<JobTitle[]> {
  return axios.get(`/api/users/${id}/job-title`);
}
