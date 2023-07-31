/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-17 10:24:32
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-17 10:57:48
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\model\MarketStatisticsModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 市场行情统计表
 * @author cgli
 * @date: 2023-07-17
 * @version: V1.0.0
 */
export interface MarketStatistics extends BaseEntity<number> {
  city: string;
  yield: number;
  yieldUnit: string;
  averagePrice: number;
  sales: number;
  deleteFlag: number;
  flag: number;
}

export interface ReqMarketStatistics {
  city: string;
  flag: number;
}

export type MarketStatisticsPageModel = PageResult<MarketStatistics>;
