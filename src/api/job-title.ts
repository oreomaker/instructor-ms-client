import axios from 'axios';

// -- 职称信息
// 专业技术职务级别
export enum ProfessionalLevel {
  JUNIOR = 'junior', // 初级
  INTERMEDIATE = 'intermediate', // 中级
  ASSOCIATE_SENIOR = 'associate_senior', // 副高级
  FULL_SENIOR = 'full_senior', // 正高级
}

export interface JobTitle {
  professional_level: ProfessionalLevel;
  position_name: string;
  start_time: string;
  end_time: string;
  employ_dept: string;
  note: string;
}

export function getJobTitle(): Promise<JobTitle[]> {
  return axios.get('/api/job-title').then((res) => res.data);
}
