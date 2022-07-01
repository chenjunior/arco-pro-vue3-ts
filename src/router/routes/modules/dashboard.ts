/*
 * @Author: Chen.Junior
 * @LastEditTime: 2022-07-01 18:20:19
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
      path: 'es6',
      name: 'es6',
      component: () => import('@/views/es6/index.vue'),
      meta: {
        locale: 'menu.es6',
        // icon: 'icon-question-circle',
        requiresAuth: true,
        order: 1,
        roles: ['*'],
        anchorList: [
          {
            name: '变量类型',
            herf: '#variable',
          },
          {
            name: '原型与原型链',
            herf: '#prototype',
          },
        ],
      },
    },
  ],
};
