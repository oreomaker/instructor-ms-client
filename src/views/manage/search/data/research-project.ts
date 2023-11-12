import { ProjectLevel, ResearchProject } from '@/api/research-project';

const ResearchProject: ResearchProject[] = [
  {
    project_level: ProjectLevel.NATIONAL,
    project_name: '国家自然科学基金项目',
    project_id: '123456789',
    start_time: '2020-01-01',
    end_time: '2020-01-01',
    actual_funding: 100000,
    author_rank: 1,
    approve_dept: '国家自然科学基金委员会',
    note: '备注',
  },
];

export default ResearchProject;
