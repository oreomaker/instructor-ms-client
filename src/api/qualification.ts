import axios from 'axios';

// -- 职称资格
export interface Qualification {
  certificate_name: string;
  awarding_dept: string;
  awarding_time: string;
}

export function getQualification(userId: number): Promise<Qualification[]> {
  return axios.get(`/api/users/${userId}/qualifications`);
}
