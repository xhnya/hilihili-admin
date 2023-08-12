export interface GetRotationChartListModel {
  email: string;
  name: string;
  introduction: string;
  phone: string;
  address: string;
}

export interface GetRotationChartListParams {
  showStatus?: number;
  type: number;
  des?: string;
}
