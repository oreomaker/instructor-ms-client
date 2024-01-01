import axios from 'axios';

// -- 教学情况
export enum CourseType {
  SITUATION_POLICY = '形势政策课',
  CAREER_GUIDANCE = '就业指导',
  POLITICAL = '思想政治课',
  COMPREHENSIVE_QUALITY = '综合素质',
  PROFESSIONAL = '专业课',
  OTHER = '其他',
}

export enum CourseCharacter {
  REQUIRED = '必修课',
  ELECTIVE = '选修课',
}

export interface TeachingInfo {
  course_name: string;
  course_type: CourseType;
  course_character: CourseCharacter;
  course_period: number;
  course_volumn: number;
  start_time: string;
  end_time: string;
  note: string;
}

export function getTeachingInfo(id: number): Promise<TeachingInfo[]> {
  return axios.get(`/api/users/${id}/teaching-info`);
}
