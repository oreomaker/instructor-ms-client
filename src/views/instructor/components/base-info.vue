<template>
  <a-card id="base-info" title="基本信息">
    <a-descriptions :data="data" layout="inline-vertical" />
    <template #extra>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>
    <a-modal
      :visible="visible"
      width="auto"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 基本信息编辑 </template>
      <a-form ref="baseInfoFormRef" layout="vertical" :model="baseInfo">
        <a-row :gutter="80">
          <a-col :span="8">
            <a-form-item label="联系人姓名" name="contactName">
              <a-input :value="baseInfo.contactName" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="预计到岗时间" name="estimateTime">
              <a-date-picker :value="baseInfo.estimateTime" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="预计到岗时间" name="estimateTime">
              <a-date-picker :value="baseInfo.estimateTime" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </a-card>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { BaseInfo, getBaseInfo } from '@/api/base-info';

  let baseInfoData = reactive({} as BaseInfo);
  const fetchData = async () => {
    const data = await getBaseInfo();
    baseInfoData = data.data;
  };
  fetchData();

  const data = reactive([
    {
      label: '在职标识',
      value: baseInfoData.in_position_status ? '在职' : '离职',
    },
    {
      label: '辅导员标识',
      value: baseInfoData.instuctor_type,
    },
    {
      label: '岗位标识',
      value: baseInfoData.position_type,
    },
    {
      label: '聘用类型',
      value: baseInfoData.employee_type,
    },
    {
      label: '工号',
      value: baseInfoData.job_number.toString(),
    },
    {
      label: '姓名',
      value: baseInfoData.name,
    },
    {
      label: '单位',
      value: baseInfoData.workplace,
    },
    {
      label: '性别',
      value: baseInfoData.gender,
    },
    {
      label: '民族',
      value: baseInfoData.ethnicity,
    },
    {
      label: '身份证号',
      value: baseInfoData.ID_number,
    },
    {
      label: '出生年月',
      value: baseInfoData.birth_date,
    },
    {
      label: '年龄',
      value: baseInfoData.age.toString(),
    },
    {
      label: '办公电话',
      value: baseInfoData.office_place,
    },
    {
      label: '手机号',
      value: baseInfoData.phone,
    },
    {
      label: '工作邮箱',
      value: baseInfoData.work_email,
    },
    {
      label: '宿舍楼及宿舍号',
      value: baseInfoData.dormitory_info,
    },
    {
      label: '户籍所在地',
      value: baseInfoData.household_location,
    },
    {
      label: '生源地',
      value: baseInfoData.origin_place,
    },
    {
      label: '婚姻状况',
      value: baseInfoData.marital_status,
    },
    {
      label: '籍贯',
      value: baseInfoData.hometown,
    },
    {
      label: '党派',
      value: baseInfoData.party,
    },
    {
      label: '入党时间',
      value: baseInfoData.join_party_date,
    },
    {
      label: '参加工作时间',
      value: baseInfoData.join_work_date,
    },
    {
      label: '进入我校工作时间',
      value: baseInfoData.join_campus_date,
    },
    {
      label: '进入我校工作时间备注',
      value: baseInfoData.join_campus_date_note,
    },
    {
      label: '行政级别',
      value: baseInfoData.administrate_level,
    },
    {
      label: '行政级别时间',
      value: baseInfoData.administrate_level_date,
    },
    {
      label: '行政职务',
      value: baseInfoData.administrate_roll,
    },
    {
      label: '行政职务时间',
      value: baseInfoData.administrate_roll_time,
    },
    {
      label: '职称等级',
      value: baseInfoData.job_title_level,
    },
    {
      label: '职称',
      value: baseInfoData.job_title,
    },
    {
      label: '职称时间',
      value: baseInfoData.job_title_date,
    },
    {
      label: '管理岗位',
      value: baseInfoData.management_info,
    },
    {
      label: '管理岗位时间',
      value: baseInfoData.management_info_date,
    },
    {
      label: '教师岗位',
      value: baseInfoData.teaching_info,
    },
    {
      label: '教师岗位时间',
      value: baseInfoData.teaching_info_date,
    },
    {
      label: '专技岗位',
      value: baseInfoData.technical_position,
    },
    {
      label: '专技岗位时间',
      value: baseInfoData.technical_position_date,
    },
    {
      label: '本科毕业学校',
      value: baseInfoData.undergrad_school,
    },
    {
      label: '本科毕业专业',
      value: baseInfoData.undergrad_major,
    },
    {
      label: '本科时间段',
      value: baseInfoData.undergrad_time,
    },
    {
      label: '硕士毕业学校',
      value: baseInfoData.grad_school,
    },
    {
      label: '硕士毕业专业',
      value: baseInfoData.grad_major,
    },
    {
      label: '硕士时间段',
      value: baseInfoData.grad_time,
    },
    {
      label: '博士毕业学校',
      value: baseInfoData.postgrad_school,
    },
    {
      label: '博士毕业专业',
      value: baseInfoData.postgrad_major,
    },
    {
      label: '博士时间段',
      value: baseInfoData.postgrad_time,
    },
    {
      label: '最高学历毕业学校',
      value: baseInfoData.final_school,
    },
    {
      label: '最高学历专业',
      value: baseInfoData.final_major,
    },
    {
      label: '最高学位',
      value: baseInfoData.final_degree,
    },
    {
      label: '最高学位时间',
      value: baseInfoData.final_degree_time,
    },
    {
      label: '最高学历',
      value: baseInfoData.final_studying,
    },
    {
      label: '最高学历时间',
      value: baseInfoData.final_studying_time,
    },
    {
      label: '学历学位统',
      value: 'TODO',
    },
    {
      label: '是否在读博士',
      value: baseInfoData.is_doctor_candidate ? '是' : '否',
    },
    {
      label: '在读博士所在高校名称',
      value: baseInfoData.doctor_university,
    },
    {
      label: '辅导员岗位类别',
      value: baseInfoData.instructor_position_type,
    },
    {
      label: '专职/兼职',
      value: baseInfoData.work_type,
    },
    {
      label: '首次入职辅导员时间',
      value: baseInfoData.first_entry_date,
    },
    {
      label: '最近一次入职辅导员时间',
      value: baseInfoData.latest_entry_date,
    },
    {
      label: '年限核增',
      value: baseInfoData.additional_year,
    },
    {
      label: '担任辅导员年限',
      value: baseInfoData.at_work_year,
    },
    {
      label: '何时起任职现岗位（精确到年月）',
      value: baseInfoData.current_entry_time,
    },
    {
      label: '现岗位任职年限',
      value: baseInfoData.current_at_work_year,
    },
    {
      label: '当前所带年级',
      value: baseInfoData.instructing_grade,
    },
    {
      label: '现在所带学生人数',
      value: baseInfoData.instructing_number.toString(),
    },
    {
      label: '所带班级',
      value: baseInfoData.instructing_class,
    },
    {
      label: '学院内承担的其他工作（简写）',
      value: baseInfoData.other_work,
    },
    {
      label: '现阶段是否在外借调（挂职）',
      value: baseInfoData.is_secondment ? '是' : '否',
    },
    {
      label: '借调/挂职单位及岗位名称、起止时间',
      value: baseInfoData.secondment_period,
    },
    {
      label: '已获取的职业资格名称',
      value: baseInfoData.qualification_name,
    },
    {
      label: '获取校级以上奖励（限填近五年最高级别的三项）',
      value: baseInfoData.awards,
    },
    {
      label:
        '个人感兴趣的学生工作领域（没有可填写“无”，若多项请按兴趣浓厚排序）',
      value: baseInfoData.work_intrests,
    },
  ]);

  const visible = ref(false);
  const handleClick = () => {
    visible.value = true;
  };
  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };

  const baseInfoFormRef = ref<FormInstance>();
  const baseInfo = ref({
    contactName: '',
    estimateTime: '',
  });
</script>
