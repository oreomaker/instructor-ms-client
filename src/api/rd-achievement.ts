import axios from 'axios';

// -- 科研成果（论文）
export enum JournalType {
  CSSCI = 'CSSCI',
  CORE = '核心期刊',
  GENERAL = '普通期刊',
  OTHER = '其他',
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

export function getRDAchievement(userId: number): Promise<RDAchievement[]> {
  return axios.get(`/api/users/${userId}/research-achievements`);
}
