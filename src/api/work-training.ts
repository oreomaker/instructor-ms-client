import axios from 'axios';

// -- 岗位锻炼_1个月以上
export enum TrainingType {
  TEMPORARY = '挂职', // 挂职
  LOAD = '借调', // 借调
  OTHER_DOMESTIC_UNIVERSITY_EXCHANGE = '其他-国内高校交流', // 其他-国内高校交流
  OTHER_NON_BEIJING_UNIVERSITY_EXCHANGE = '其他-非京高校交流', // 其他-非京高校交流
  OTHER_INTRA_SCHOOL_EXCHANGE = '其他-校内交流', // 其他-校内交流
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

export function getWorkTraining1More(id: number): Promise<WorkTraining1More[]> {
  return axios.get(`/api/users/${id}/work-training-1-more`);
}

// -- 岗位锻炼_1个月以内
export enum TrainingLevel {
  NATIONAL = '国家级', // 国家级
  PROVINCIAL = '省部级', // 省部级
  SCHOOL = '校级', // 校级
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

export function getWorkTraining1Less(id: number): Promise<WorkTraining1Less[]> {
  return axios.get(`/api/users/${id}/work-training-1-less`);
}
