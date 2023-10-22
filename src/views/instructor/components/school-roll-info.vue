<template>
  <a-card id="school-roll-info" title="学籍信息">
    <a-descriptions :data="data" bordered />
    <template #extra>
      <a-button type="text">
        <template #icon>
          <icon-edit />
        </template>
        编辑
      </a-button>
    </template>
  </a-card>
</template>

<script lang="ts" setup>
  const data = [
    {
      label: '院系',
      value: '软件学院',
    },
    {
      label: '专业',
      value: '软件工程',
    },
    {
      label: '班级',
      value: '2001',
    },
    {
      label: '年级',
      value: '2020级',
    },
    {
      label: '校区',
      value: '北京',
    },
    {
      label: '学制',
      value: '4年',
    },
    {
      label: '学生类别',
      value: '本科生',
    },
    {
      label: '就读学历',
      value: '本科生',
    },
    {
      label: '就读学位',
      value: '本科生',
    },
    {
      label: '培养方式',
      value: '全日制',
    },
    {
      label: '在籍状态',
      value: '在籍',
    },
    {
      label: '在校状态',
      value: '在校',
    },
    {
      label: '入学日期',
      value: '2020年9月1日',
    },
    {
      label: '毕业日期',
      value: '2024年7月1日',
    },
  ];
</script>
