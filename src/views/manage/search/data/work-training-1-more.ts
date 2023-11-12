import { TrainingType, WorkTraining1More } from '@/api/work-training';

const data: WorkTraining1More[] = [
  {
    training_type: TrainingType.LOAD,
    start_time: '2020-01-01',
    end_time: '2020-01-31',
    organizing_dept: '组织部',
    receiving_dept: '人事部',
    job_name: '人事部部长',
    secondment_reason: '人事部部长',
    note: '人事部部长',
  },
];

export default data;
