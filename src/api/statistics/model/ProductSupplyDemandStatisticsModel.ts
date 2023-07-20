/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-17 11:28:42
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-17 11:50:47
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\model\ProductSupplyDemandStatisticsModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品供需统计表
 * @author cgli
 * @date: 2023-07-17
 * @version: V1.0.0
 */
export interface ProductSupplyDemandStatistics extends BaseEntity<number> {
  product: string;
  supply: number;
  demand: number;
  unit: string;
  flag: number;
  deleteFlag: number;
}

export interface ReqProductSupplyDemandStatistics {
  product: string;
  flag: number;
}

export type ProductSupplyDemandStatisticsPageModel = PageResult<ProductSupplyDemandStatistics>;
