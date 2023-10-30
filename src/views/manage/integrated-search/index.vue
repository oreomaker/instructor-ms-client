<template>
  <div class="container">
    <a-card title="模块选择" class="general-card">
      <a-select
        v-model="value"
        style="width: 400px; margin-bottom: 16px"
        placeholder="选择查找模块"
      >
        <a-option
          v-for="item of optionData"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        />
      </a-select>
      {{ value }}

      <a-form :model="form">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-item field="value1" label="Value 1" label-col-flex="100px">
              <a-input v-model="form.value1" placeholder="please enter..." />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="value2" label="Value 2" label-col-flex="80px">
              <a-input v-model="form.value2" placeholder="please enter..." />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="value3" label="Value 3" label-col-flex="80px">
              <a-input v-model="form.value3" placeholder="please enter..." />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="16">
            <a-form-item field="value4" label="Value 4" label-col-flex="100px">
              <a-input v-model="form.value4" placeholder="please enter..." />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="value5" label="Value 5" label-col-flex="80px">
              <a-input v-model="form.value5" placeholder="please enter..." />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-card>

    <div class="content">
      <a-card title="搜索结果" class="general-card">
        <a-table :columns="columns" :data="data" />

        <template #extra>
          <a-button type="outline" size="small">
            <template #icon>
              <icon-export />
            </template>
            导出
          </a-button>
        </template>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import optionData from './data/optionData';

  const value = ref();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
  const data = reactive([
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
  ]);

  const form = reactive({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
  });
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px;
    width: 100%;
  }

  .content {
    display: flex;
  }

  .general-card {
    margin-top: 16px;
    width: 100%;
  }
</style>
