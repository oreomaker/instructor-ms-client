import { TrainingLevel, WorkTraining1Less } from '@/api/work-training';

const data: WorkTraining1Less[] = [
  {
    start_time: '2021-01-01',
    end_time: '2022-01-01',
    training_level: TrainingLevel.NATIONAL,
    organizing_dept: '组织部',
    training_name: '人力资源管理',
    training_type: '培训',
    training_location: '北京',
    note: '',
  },
];

export default data;
