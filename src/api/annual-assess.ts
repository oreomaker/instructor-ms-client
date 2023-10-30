import axios from 'axios';

// -- 年度考核
export enum AnnualAssessResult {
  EXCELLENT = 'excellent',
  QUALIFIED = 'qualified',
  BASICALLY_QUALIFIED = 'basically_qualified',
  UNQUALIFIED = 'unqualified',
}

export interface AnnualAssess {
  assess_year: string;
  annual_assess_result: AnnualAssessResult;
  note: string;
}

export function getAnnualAssess(): Promise<AnnualAssess[]> {
  return axios.get('/api/annual-assess').then((resp) => resp.data);
}
