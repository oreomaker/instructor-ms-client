import axios from 'axios';

// -- 工作经历
// 工作岗位类型
export enum PositionType {
  FULL_TIME_TEACHER = 'full_time_teacher', // 全职教师
  ADMINISTRATIVE_STAFF = 'administrative_staff', // 行政人员
  OTHER_PROFESSIONAL_STAFF = 'other_professional_staff', // 其他专业技术人员
  COUNSELOR = 'counselor', // 辅导员
}

export interface WorkInfo {
  start_time: string;
  end_time: string;
  country: string;
  province: string;
  workplace: string;
  department: string;
  position: string;
  duty: string;
  position_type: PositionType;
}

export function getWorkInfo(id: number): Promise<WorkInfo[]> {
  return axios.get(`/api/users/${id}/work-info`);
}
