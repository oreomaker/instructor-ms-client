<template>
  <a-descriptions :data="data" title="基本信息" bordered />
</template>

<script lang="ts" setup>
  const data = [
    {
      label: '姓名',
      value: '测试',
    },
    {
      label: '民族',
      value: '汉族',
    },
    {
      label: '姓名拼音',
      value: 'ceshi',
    },
    {
      label: '曾用名',
      value: '',
    },
    {
      label: '出生日期',
      value: '2000年1月1日',
    },
    {
      label: '婚姻状态',
      value: '未婚',
    },
    {
      label: '国籍',
      value: '中国',
    },
    {
      label: '籍贯',
      value: '河北',
    },
    {
      label: '政治面貌',
      value: '团员',
    },
    {
      label: '证件类型',
      value: '身份证',
    },
    {
      label: '证件号码',
      value: '123456789',
    },
    {
      label: '生源地',
      value: '北京',
    },
    {
      label: '宗教信仰',
      value: '无',
    },
    {
      label: '身高(cm)',
      value: '170',
    },
    {
      label: '健康状况',
      value: '良好',
    },
    {
      label: '体重(kg)',
      value: '70',
    },
  ];
</script>
