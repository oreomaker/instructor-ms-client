import axios from 'axios';

// -- 学习经历
// 学历类型
export enum StudyingLevel {
  UNDERGRADUATE = 'undergraduate', // 本科
  MASTER = 'master_graduate', // 硕士
  DOCTOR = 'doctor_graduate', // 博士
}
// 学校类别
export enum SchoolType {
  MINISTRY = 'ministry', // 中央部委
  MUNICIPALITY = 'municipality', // 市属
}

export interface StudyInfo {
  studying_level: StudyingLevel;
  enroll_date: string;
  studying_country: string;
  university: string;
  major: string;
  grad_date: string;
  studying_year: number;
  degree_type: string;
  degree: string;
  degree_date: string;
  studying_type: string;
  school_type: SchoolType;
}

export function getStudyInfo(): Promise<StudyInfo[]> {
  return axios.get('/api/study-info').then((res) => res.data);
}
