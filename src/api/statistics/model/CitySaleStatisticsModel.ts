/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-17 10:52:22
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-17 11:18:34
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\model\CitySaleStatisticsModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 城市销售量表
 * @author cgli
 * @date: 2023-07-17
 * @version: V1.0.0
 */
export interface CitySaleStatistics extends BaseEntity<number> {
  city: string;
  sales: number;
  unit: string;
  deleteFlag: number;
  flag: number;
}

export interface ReqCitySaleStatistics {
  city: string;
  flag: number;
}

export type CitySaleStatisticsPageModel = PageResult<CitySaleStatistics>;
