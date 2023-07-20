/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-20 14:31:54
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-20 17:30:39
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\model\ProductBaseDayDataModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品基地每日数据
 * @author cgli
 * @date: 2023-07-20
 * @version: V1.0.0
 */
export interface ProductBaseDayData extends BaseEntity<number> {
  baseId: number;
  time: string;
  flag: number;
  product: string;
  supply: number;
  yield: number;
  yieldUnit: string;
  sales: number;
  salesUnit: string;
  demand: number;
  unit: string;
  deleteFlag: number;
  salesVolume: number;
  salesVolumeUnit: string;
  city: string;
  lat: number;
  lng: number;
  baseName: string;
}

export interface ReqProductBaseDayData {
  baseName: string;
  flag: number;
  startTime: string;
  endTime: string;
}

export type ProductBaseDayDataPageModel = PageResult<ProductBaseDayData>;
