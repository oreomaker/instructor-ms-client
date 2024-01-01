import axios from 'axios';

// -- 科研项目
export enum ProjectLevel {
  NATIONAL = '国家级',
  PROVINCIAL = '省级',
  SCHOOL = '校级',
}

export interface ResearchProject {
  project_level: ProjectLevel;
  project_name: string;
  project_id: string;
  start_time: string;
  end_time: string;
  actual_funding: number;
  author_rank: number;
  approve_dept: string;
  note: string;
}

export function getResearchProject(userId: number): Promise<ResearchProject[]> {
  return axios.get(`/api/users/${userId}/research-projects`);
}
