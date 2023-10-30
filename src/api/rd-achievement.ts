import axios from 'axios';

// -- 科研成果（论文）
export enum JournalType {
  CSSCI = 'cssci',
  CORE = 'core',
  GENERAL = 'general',
  OTHER = 'other',
}

export interface RDAchievement {
  project_title: string;
  journal_name: string;
  CN_number: string;
  journal_type: JournalType;
  publication_date: string;
  author_rank: number;
  note: string;
}

export function getRDAchievement(): Promise<RDAchievement[]> {
  return axios.get('/api/rd-achievement').then((resp) => resp.data);
}
