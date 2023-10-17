import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const INSTRUCTOR: AppRouteRecordRaw = {
  path: '/instructor',
  name: 'instructor',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.instructor',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: '',
      name: 'instructor-index',
      component: () => import('@/views/instructor/index.vue'),
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default INSTRUCTOR;
