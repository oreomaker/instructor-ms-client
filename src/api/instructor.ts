import axios from 'axios';

// --基本信息
export enum PoliticalAffiliation {
  MASSES = '群众',
  LEAGUE = '共青团员',
  PARTY_MEMBERS = '中共党员',
}
export interface BaseInfo {
  name: string;
  ethinicity: string; // 民族
  pinyin_name: string;
  former_name: string;
  birth_date: string;
  marriage_status: string;
  nationality: string; // 国籍
  hometown: string; // 籍贯
  political_affiliation: PoliticalAffiliation; // 政治面貌
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

// --学籍信息
export enum StudentCategory {
  UNDERGRADUATE = '本科生',
  GRADUATE = '研究生',
}
export enum DegreeType {
  BACHELOR = '学士',
  MASTER = '硕士',
  DOCTOR = '博士',
}
export enum StudyMethod {
  FULL_TIME = '全日制',
  PART_TIME = '非全日制',
}
export enum MembershipStatus { // 在籍状态
  MEMBER = '在籍',
  NON_MEMBER = '非在籍',
}
export interface SchoolRollInfo {
  department: string; // 院系
  major: string; // 专业
  class: string; // 班级
  grade: string; // 年级
  campus: string; // 校区
  study_duration: string; // 学制
  student_category: StudentCategory; // 学生类别
  academic_degree: string; // 就读学历
  degree_type: DegreeType; // 就读学位
  study_method: StudyMethod; // 培养方式
  membership_status: string; // 在籍状态
  school_status: MembershipStatus; // 在校状态
  admission_date: string; // 入学时间
  graduation_date: string; // 毕业时间
}
export function getSchoolRollInfo() {
  return axios.get<SchoolRollInfo>('/api/school-roll-info');
}
export function updateSchoolRollInfo(data: SchoolRollInfo) {
  return axios.post<SchoolRollInfo>('/api/school-roll-info', data);
}

// --联系方式
export interface ParentInfo {
  relationship: string;
  name: string;
  workplace: string;
  position: string;
  contact_info: string;
}
export interface ContactInfo {
  mobile_phone: string;
  wechat_id: string;
  dormitory: string;
  emergency_contact: string;
  emergency_contact_phone: string;
  email: string;
  home_phone: string;
  home_address: string;
  parent_info: ParentInfo[];
}
export function getContactInfo() {
  return axios.get<ContactInfo>('/api/contact-info');
}
export function updateContactInfo(data: ContactInfo) {
  return axios.post<ContactInfo>('/api/contact-info', data);
}

// --班级信息
export interface ClassInfo {
  class: string;
  grade: string;
  department: string;
  major: string;
  campus: string;
}

// --户籍信息
export interface HouseholdInfo {
  household_type: string;
  household_address: string;
  household_postcode: string;
  household_phone: string;
  household_member: string;
  household_member_phone: string;
  household_member_relationship: string;
}

// --干部信息
export interface CadreInfo {
  organization: string;
  position: string;
  start_date: string;
  end_date: string;
}

// --组织信息
export interface OrganizationInfo {
  organization: string;
  position: string;
  start_date: string;
  end_date: string;
}

// --成绩信息
// 平时成绩与思测

// 学习成绩

// 四六级成绩
export interface CETGrade {
  cet_4: number;
  cet_6: number;
}
// 宿舍成绩
export interface DormitoryGrade {
  personal_score: number;
  dormitory_score: number;
  inspection_date: string;
}

// --奖惩助贷
// 奖学金
export interface Scholarship {
  name: string;
  level: string;
  date: string;
  amount: number;
}
// 荣誉称号
export interface Honor {
  name: string;
  level: string;
  date: string;
}
// 困难生
export interface DifficultStudent {
  name: string;
  level: string;
  date: string;
}
// 困难补助
export interface Subsidy {
  name: string;
  level: string;
  date: string;
  amount: number;
}
// 助学金
export interface Grant {
  name: string;
  level: string;
  date: string;
  amount: number;
}
// 勤工助学
export interface WorkStudy {
  name: string;
  level: string;
  date: string;
  amount: number;
}
// 学费减免
export interface TuitionWaiver {
  name: string;
  level: string;
  date: string;
  amount: number;
}

// --奖励培训

// --转专业

// --迎新数据

// --毕业设计

// --就业信息

// --科研论文
// 科研项目

// 大学生创新创业项目

// 学术论文

// 著作

// 专利获取情况

// --国际交流

// --人员备注
export interface Remark {
  recorder: string;
  record_content: string;
  record_time: string;
}
// --相关导航
export interface Navigation {
  name: string;
  url: string;
}
export function getNavigation() {
  return axios.get<Navigation[]>('/api/navigation');
}
export function updateNavigation(data: Navigation[]) {
  return axios.post<Navigation[]>('/api/navigation', data);
}
