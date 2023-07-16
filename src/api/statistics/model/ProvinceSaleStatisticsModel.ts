/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-15 18:53:54
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-16 15:29:41
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\model\ProvinceSaleStatisticsModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Data } from "ant-design-vue/lib/_util/type";
import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 省份销售数据
 * @author cgli
 * @date: 2023-07-15
 * @version: V1.0.0
 */
export interface ProvinceSaleStatistics extends BaseEntity<number> {
  province: string;
  averagePrice: number;
  sales: string;
  deleteFlag: number;
  statisticalTime: string;
  flag: number;
  priceUnit: String;
  saleUnit: String;
}

export interface ReqProvinceSaleStatistics {
  province: string;
  flag: number;
  startTime: String;
  endTime: String;
}

export type ProvinceSaleStatisticsPageModel = PageResult<ProvinceSaleStatistics>;
