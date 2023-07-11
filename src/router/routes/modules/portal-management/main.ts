import type {AppRouteModule} from '/@/router/types';

import {LAYOUT} from '/@/router/constant';

const permission: AppRouteModule = {
  path: '/portal-management',
  name: 'Portal-management',
  component: LAYOUT,
  meta: {
    orderNo: 10000,
    icon: 'ion:build-outline',
    title: '门户管理',
  },
  children: [
    {
      path: 'RotationChart',
      name: 'RotationChart',
      meta: {
        title: '轮播图管理',
      },
      component: () => import('/@/views/portal-management/index.vue'),
    },
  ],
};

export default permission;
