import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const INSTRUCTOR: AppRouteRecordRaw = {
  path: '/instructor',
  name: 'instructor',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.instructor',
    requiresAuth: true,
    icon: 'icon-user',
    order: 0,
  },
  children: [
    {
      path: '',
      name: 'instructor-index',
      component: () => import('@/views/instructor/index.vue'),
      meta: {
        locale: 'menu.instructor.info',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default INSTRUCTOR;
