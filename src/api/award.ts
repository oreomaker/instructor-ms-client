import axios from 'axios';

// -- 表彰奖励
export enum AwardLevel {
  NATIONAL_INDIVIDUAL = '国家级-个人', // 国家级-个人
  NATIONAL_GROUP = '国家级-集体', // 国家级-集体
  PROVINCIAL_INDIVIDUAL = '省部级-个人', // 省部级-个人
  PROVINCIAL_GROUP = '省部级-集体', // 省部级-集体
  SCHOOL_INDIVIDUAL = '校级-个人', // 校级-个人
  SCHOOL_GROUP = '校级-集体', // 校级-集体
}
export interface Award {
  awarding_time: string;
  award_level: AwardLevel;
  awar_name: string;
  author_rank: number;
  awarding_dept: string;
  note: string;
}

export function getAward(id: number): Promise<Award[]> {
  return axios.get(`/api/users/${id}/awards`);
}
