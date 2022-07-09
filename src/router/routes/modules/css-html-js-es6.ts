/*
 * @Author: Chen.Junior
 * @LastEditTime: 2022-07-09 14:35:17
 * @Description:
 */
import { DEFAULT_LAYOUT } from '@/router/constants';

export default {
  path: '/css-html-js-es6',
  name: 'css-html-js-es6',
  component: DEFAULT_LAYOUT,
  redirect: '/css-html-js-es6/es6',
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    // icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'es6',
      name: 'es6',
      component: () => import('@/views/css-html-js-es6/es6/index.vue'),
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
            name: '值类型与引用类型',
            herf: '#value-and-reference',
          },
          {
            name: '原型与原型链',
            herf: '#prototype',
          },
          {
            name: '作用域和闭包',
            herf: '#scope-and-closures',
          },
        ],
      },
    },
  ],
};
