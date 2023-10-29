import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const MANAGE: AppRouteRecordRaw = {
  path: '/manage',
  name: 'manage',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.manage',
    requiresAuth: true,
    icon: 'icon-desktop',
    order: 0,
  },
  children: [
    {
      path: 'search',
      name: 'manege-search',
      component: () => import('@/views/manage/search/index.vue'),
      meta: {
        locale: 'menu.manage.search',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default MANAGE;
