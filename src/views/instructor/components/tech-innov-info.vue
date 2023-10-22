<template>
  <a-card id="tech-innov-info" title="科创信息">
    <a-card title="科研信息">
      <a-table
        :columns="researchColumn"
        :data="researchData"
        :pagination="false"
      />
    </a-card>
    <a-card title="大学生创新创业项目">
      <a-table
        :columns="collegeInnovColumn"
        :data="collegeInnovData"
        :pagination="false"
      />
    </a-card>
    <a-card title="论文发表信息">
      <a-table :columns="paperColumn" :data="paperData" :pagination="false" />
    </a-card>
    <a-card title="著作">
      <a-table
        :columns="publicationColumn"
        :data="publicationData"
        :pagination="false"
      />
    </a-card>
    <a-card title="专利获取情况">
      <a-table :columns="patentColumn" :data="patentData" :pagination="false" />
    </a-card>
  </a-card>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';

  const researchColumn = ref([
    {
      title: '日期',
      dataIndex: 'date',
    },
    {
      title: '项目名称',
      dataIndex: 'project_name',
    },
    {
      title: '是否主持',
      dataIndex: 'is_principal',
    },
    {
      title: '项目来源',
      dataIndex: 'project_source',
    },
    {
      title: '负责人',
      dataIndex: 'project_leader',
    },
    {
      title: '参加人',
      dataIndex: 'participants',
    },
  ]);
  const researchData = reactive([]);

  const collegeInnovColumn = ref([
    {
      title: '学院',
      dataIndex: 'department',
    },
    {
      title: '项目名称',
      dataIndex: 'project_name',
    },
    {
      title: '项目级别',
      dataIndex: 'project_level',
    },
    {
      title: '项目人数',
      dataIndex: 'team_size',
    },
    {
      title: '指导教师',
      dataIndex: 'faculty_advisor',
    },
    {
      title: '参与类别',
      dataIndex: 'participation_category',
    },
    {
      title: '立项时间',
      dataIndex: 'approval_date',
    },
  ]);
  const collegeInnovData = reactive([]);

  const paperColumn = ref([
    {
      title: '出版时间',
      dataIndex: 'publication_date',
    },
    {
      title: '论文名称',
      dataIndex: 'paper_title',
    },
    {
      title: '发表物名称',
      dataIndex: 'publication_name',
    },
    {
      title: '期号/卷号',
      dataIndex: 'issue_volume_number',
    },
    {
      title: '刊号',
      dataIndex: 'ISSN',
    },
    {
      title: '语种码',
      dataIndex: 'language_code',
    },
  ]);
  const paperData = reactive([]);

  const publicationColumn = ref([
    {
      title: '出版时间',
      dataIndex: 'publication_date',
    },
    {
      title: '著作名称',
      dataIndex: 'book_title',
    },
    {
      title: '出版社',
      dataIndex: 'publisher',
    },
    {
      title: '书号',
      dataIndex: 'ISBN',
    },
    {
      title: '本人排名',
      dataIndex: 'author_rank',
    },
    {
      title: '著作类别',
      dataIndex: 'book_category',
    },
  ]);
  const publicationData = reactive([]);

  const patentColumn = ref([
    {
      title: '公开日',
      dataIndex: 'publication_date',
    },
    {
      title: '专利名称',
      dataIndex: 'patent_title',
    },
    {
      title: '本人排名',
      dataIndex: 'author_rank',
    },
    {
      title: '专利类型',
      dataIndex: 'patent_type',
    },
    {
      title: '专利申请号',
      dataIndex: 'patent_application_number',
    },
    {
      title: '当前法律状态',
      dataIndex: 'current_legal_status',
    },
  ]);
  const patentData = reactive([]);
</script>
