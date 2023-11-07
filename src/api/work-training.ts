import axios from 'axios';

// -- 岗位锻炼_1个月以上
export enum TrainingType {
  TEMPORARY = 'temporary', // 挂职
  LOAD = 'load', // 借调
  OTHER_DOMESTIC_UNIVERSITY_EXCHANGE = 'other_domestic_university_exchange', // 其他-国内高校交流
  OTHER_NON_BEIJING_UNIVERSITY_EXCHANGE = 'other_non_beijing_university_exchange', // 其他-非京高校交流
  OTHER_INTRA_SCHOOL_EXCHANGE = 'other_intra_school_exchange', // 其他-校内交流
}

export interface WorkTraining1More {
  training_type: TrainingType;
  start_time: string;
  end_time: string;
  organizing_dept: string;
  receiving_dept: string;
  job_name: string;
  secondment_reason: string;
  note: string;
}

export function getWorkTraining1More(): Promise<WorkTraining1More[]> {
  return axios.get('/work-training/1-more').then((res) => res.data);
}

// -- 岗位锻炼_1个月以内
export enum TrainingLevel {
  NATIONAL = 'national', // 国家级
  PROVINCIAL = 'provincial', // 省部级
  SCHOOL = 'school', // 校级
}

export interface WorkTraining1Less {
  start_time: string;
  end_time: string;
  training_level: TrainingLevel;
  organizing_dept: string;
  training_name: string;
  training_type: string;
  training_location: string;
  note: string;
}

export function getWorkTraining1Less(): Promise<WorkTraining1Less[]> {
  return axios.get('/work-training/1-less').then((res) => res.data);
}
