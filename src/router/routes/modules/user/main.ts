import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const permission: AppRouteModule = {
  path: '/user',
  name: 'userIndex',
  component: LAYOUT,
  meta: {
    orderNo: 10000,
    icon: 'ion:build-outline',
    title: '用户管理',
  },
  children: [
    {
      path: 'user',
      name: 'user',
      meta: {
        title: '用户管理',
      },
      component: () => import('/@/views/user/user/index.vue'),
    },
  ],
};

export default permission;
