import axios from 'axios';

// -- 学习经历
// 学历类型
export enum StudyingLevel {
  UNDERGRADUATE = '大学本科', // 本科
  MASTER = '硕士研究生', // 硕士
  DOCTOR = '博士研究生', // 博士
}
// 学校类别
export enum SchoolType {
  MINISTRY = '部属高校', // 中央部委
  MUNICIPALITY = '市属高校', // 市属
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
  return axios.get('/api/users/8504/study-info');
}
