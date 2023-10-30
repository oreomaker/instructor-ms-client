import axios from 'axios';
import { AnnualAssessResult } from './annual-assess';

// -- 辅导员考核
export interface InstructorAssess {
  assess_year: string;
  annual_assess_result: AnnualAssessResult;
  note: string;
}

export function getInstructorAssess(): Promise<InstructorAssess[]> {
  return axios.get('/api/instructor-assess').then((resp) => resp.data);
}
