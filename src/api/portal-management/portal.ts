import { defHttp } from '/@/utils/http/axios';

import { GetRotationChartListModel, GetRotationChartListParams } from "./model/portalModel";

enum Api {
  RotationChartList = '/admin/images/getPageImagesList',
}
/**
 * @description: 获取轮播图列表
 */
export const rotationChartListApi = (params: GetRotationChartListParams) =>
  defHttp.get<GetRotationChartListModel>({ url: Api.RotationChartList, params });

