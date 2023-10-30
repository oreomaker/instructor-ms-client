import axios from 'axios';

// -- 教学情况
export enum CourseType {
  SITUATION_POLICY = 'situation_policy',
  CAREER_GUIDANCE = 'career_guidance',
  POLITICAL = 'political',
  COMPREHENSIVE_QUALITY = 'comprehensive_quality',
  PROFESSIONAL = 'professional',
  OTHER = 'other',
}

export enum CourseCharacter {
  REQUIRED = 'required',
  ELECTIVE = 'elective',
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

export function getTeachingInfo(): Promise<TeachingInfo[]> {
  return axios.get('/api/teaching-info').then((resp) => resp.data);
}
