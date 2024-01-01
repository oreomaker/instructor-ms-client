import axios from 'axios';
import { Gender } from './base-info';

// -- 家庭信息
// 关系
export enum FamilyRelationship {
  Paranet = 'parent',
  Spouse = 'spouse',
  Child = 'child',
}

export interface FamilyInfo {
  relationship: FamilyRelationship;
  name: string;
  gender: Gender;
  birthday: string;
  education_degree: string;
  ethnicity: string;
  political_status: string;
  workplace: string;
  position: string;
  note: string;
}

export function getFamilyInfo(id: number): Promise<FamilyInfo[]> {
  return axios.get(`/api/users/${id}/family-info`);
}
