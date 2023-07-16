/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-15 17:51:04
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-16 15:27:56
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\model\ProductionStatisticsModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Data } from "ant-design-vue/lib/_util/type";
import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 生产统计
 * @author cgli
 * @date: 2023-07-15
 * @version: V1.0.0
 */
export interface ProductionStatistics extends BaseEntity<number> {
  produceScale: number;
  yield: number;
  flag: number;
  statisticalTime: String;
  month: number;
  year: number;
  yieldUnit: String;
}

export interface ReqProductionStatistics {
  startTime: String;
  endTime: String;
  flag: number;
}

export type ProductionStatisticsPageModel = PageResult<ProductionStatistics>;
