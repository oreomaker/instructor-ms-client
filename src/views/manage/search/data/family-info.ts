import { Gender } from '@/api/base-info';
import { FamilyRelationship, FamilyInfo } from '@/api/family-info';

const data = [
  {
    relationship: FamilyRelationship.Paranet,
    name: '张三',
    gender: Gender.FEMALE,
    birthday: '1999-01-01',
    education_degree: '本科',
    ethnicity: '汉族',
    political_status: '中国共产党',
    workplace: '计算机学院',
    position: '教授',
    note: '无',
  },
  {
    relationship: FamilyRelationship.Paranet,
    name: '张三',
    gender: Gender.FEMALE,
    birthday: '1999-01-01',
    education_degree: '本科',
    ethnicity: '汉族',
    political_status: '中国共产党',
    workplace: '计算机学院',
    position: '教授',
    note: '无',
  },
] as FamilyInfo[];

export default data;
