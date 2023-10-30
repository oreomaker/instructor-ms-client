import axios from 'axios';

// -- 表彰奖励
export enum AwardLevel {
  NATIONAL_INDIVIDUAL = 'national_individual', // 国家级-个人
  NATIONAL_GROUP = 'national_group', // 国家级-集体
  PROVINCIAL_INDIVIDUAL = 'provincial_individual', // 省部级-个人
  PROVINCIAL_GROUP = 'provincial_group', // 省部级-集体
  SCHOOL_INDIVIDUAL = 'school_individual', // 校级-个人
  SCHOOL_GROUP = 'school_group', // 校级-集体
}
export interface Award {
  awarding_time: string;
  award_level: AwardLevel;
  awar_name: string;
  author_rank: number;
  awarding_dept: string;
  note: string;
}

export function getAward(): Promise<Award[]> {
  return axios.get('/award').then((res) => res.data);
}
