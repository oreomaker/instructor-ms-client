import axios from 'axios';

// --基本信息
// 辅导员标识
export enum InstructorType {
  DEPARTMENT_SECRETARY = '学院副书记', // 学院副书记
  FIRST_LINE_INSTRUCTOR = '一线辅导员', // 一线辅导员
  NON_FIRST_LINE_INSTRUCTOR = '非一线辅导员', // 非一线辅导员
}
// 岗位标识
export enum PositionType {
  MANAGEMENT = '管理人员', // 管理人员
  G2G = '学院双肩挑', // 学院双肩挑
}
// 性别
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
// 婚姻状况
export enum MaritalStatus {
  MARRIED = 'married',
  UNMARRIED = 'unmarried',
}
// 专职/兼职
export enum WorkType {
  FULL_TIME = 'full_time',
  PART_TIME = 'part_time',
}
export interface BaseInfo {
  in_position_status: boolean;
  instuctor_type: InstructorType;
  position_type: PositionType;
  employee_type: string;
  job_number: string;
  name: string;
  workplace: string;
  gender: Gender;
  ethnicity: string;
  ID_number: string;
  birth_date: string;
  age: number;
  office_place: string;
  work_phone: string;
  phone: string;
  work_email: string;
  dormitory_info: string;
  household_location: string;
  origin_place: string;
  marital_status: MaritalStatus;
  hometown: string;
  party: string;
  join_party_date: string;
  join_work_date: string;
  join_campus_date: string;
  join_campus_date_note: string;
  administrate_level: string;
  administrate_level_date: string;
  administrate_roll: string;
  administrate_roll_time: string;
  job_title_level: string;
  job_title: string;
  job_title_date: string;
  management_info: string;
  management_info_date: string;
  teaching_info: string;
  teaching_info_date: string;
  technical_position: string;
  technical_position_date: string;
  undergrad_school: string;
  undergrad_major: string;
  undergrad_time: string;
  grad_school: string;
  grad_major: string;
  grad_time: string;
  postgrad_school: string;
  postgrad_major: string;
  postgrad_time: string;
  final_school: string;
  final_major: string;
  final_degree: string;
  final_degree_time: string;
  final_studying: string;
  final_studying_time: string;
  is_doctor_candidate: boolean;
  doctor_university: string;
  instructor_position_type: string;
  work_type: WorkType;
  first_entry_date: string;
  latest_entry_date: string;
  additional_year: string;
  at_work_year: string;
  current_entry_time: string;
  current_at_work_year: string;
  instructing_grade: string;
  instructing_number: number;
  instructing_class: string;
  other_work: string;
  is_secondment: boolean;
  secondment_period: string;
  qualification_name: string;
  awards: string;
  work_intrests: string;
}

export function getBaseInfo() {
  return axios.get<BaseInfo>('/api/base-info');
}
export function updateBaseInfo(data: BaseInfo) {
  return axios.post<BaseInfo>('/api/base-info', data);
}
