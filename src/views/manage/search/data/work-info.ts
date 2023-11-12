import { PositionType, WorkInfo } from '@/api/work-info';

const data = [
  {
    start_time: '2018-09-01',
    end_time: '2019-06-30',
    country: '中国',
    province: '广东省',
    workplace: '广东工业大学',
    department: '计算机学院',
    position: '教师',
    duty: '教学',
    position_type: PositionType.FULL_TIME_TEACHER,
  },
  {
    start_time: '2018-09-01',
    end_time: '2019-06-30',
    country: '中国',
    province: '广东省',
    workplace: '广东工业大学',
    department: '计算机学院',
    position: '教师',
    duty: '教学',
    position_type: PositionType.FULL_TIME_TEACHER,
  },
] as WorkInfo[];

export default data;
