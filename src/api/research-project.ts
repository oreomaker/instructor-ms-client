import axios from 'axios';

// -- 科研项目
export enum ProjectLevel {
  NATIONAL = 'national',
  PROVINCIAL = 'provincial',
  SCHOOL = 'school',
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

export function getResearchProject(): Promise<ResearchProject[]> {
  return axios.get('/api/research-project').then((resp) => resp.data);
}
