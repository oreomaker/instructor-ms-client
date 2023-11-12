import { CourseType, CourseCharacter, TeachingInfo } from '@/api/teaching-info';

const teachingInfo: TeachingInfo[] = [
  {
    course_name: '课程名称',
    course_type: CourseType.SITUATION_POLICY,
    course_character: CourseCharacter.REQUIRED,
    course_period: 1,
    course_volumn: 0,
    start_time: '2020-01-01',
    end_time: '2020-01-01',
    note: '备注',
  },
];

export default teachingInfo;
