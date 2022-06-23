/*
 * @Author: Chen.Junior
 * @LastEditTime: 2022-06-20 15:54:26
 * @Description:
 */
import { DEFAULT_LAYOUT } from '@/router/constants';

export default {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'),
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'welcome',
      name: 'welcome',
      component: () => import('@/views/welcome/index.vue'),
      meta: {
        locale: 'menu.welcome',
        // icon: 'icon-question-circle',
        requiresAuth: true,
        order: 1,
        roles: ['*'],
      },
    },
  ],
};
