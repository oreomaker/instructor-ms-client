import {
  AdministrativeLevel,
  AdministrationInfo,
} from '@/api/administration-info';

const data = [
  {
    start_time: '2018-09-01',
    end_time: '2019-06-30',
    administration_level: AdministrativeLevel.A_5,
    administration_dept: '计算机学院',
    administration_name: '院长',
    administration_number: '0000000001',
    note: '这是一段备注',
  },
  {
    start_time: '2018-09-01',
    end_time: '2019-06-30',
    administration_level: AdministrativeLevel.A_5,
    administration_dept: '计算机学院',
    administration_name: '院长',
    administration_number: '0000000001',
    note: '这是一段备注',
  },
] as AdministrationInfo[];

export default data;
