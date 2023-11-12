import { StudyingLevel, SchoolType, StudyInfo } from '@/api/study-info';

const data = [
  {
    studying_level: StudyingLevel.MASTER,
    enroll_date: '2018-09-01',
    studying_country: '中国',
    university: '广东工业大学',
    major: '计算机科学与技术',
    grad_date: '2021-06-30',
    studying_year: 3,
    degree_type: '学术型',
    degree: '硕士',
    degree_date: '2021-06-30',
    studying_type: '全日制',
    school_type: SchoolType.MUNICIPALITY,
  },
  {
    studying_level: StudyingLevel.MASTER,
    enroll_date: '2018-09-01',
    studying_country: '中国',
    university: '广东工业大学',
    major: '计算机科学与技术',
    grad_date: '2021-06-30',
    studying_year: 3,
    degree_type: '学术型',
    degree: '硕士',
    degree_date: '2021-06-30',
    studying_type: '全日制',
    school_type: SchoolType.MUNICIPALITY,
  },
] as StudyInfo[];

export default data;
