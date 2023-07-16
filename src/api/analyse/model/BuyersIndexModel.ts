/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-16 12:05:28
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-16 14:44:17
 * @FilePath: \mf-bigdata-frontend\src\api\analyse\model\BuyersIndexModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 采购商指数
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
export interface BuyersIndex extends BaseEntity<number> {
  year: number;
  month: number;
  temp: number;
  flag: number;
  deleteFlag: number;
}

export interface ReqBuyersIndex {
  year: number;
  month: number;
  flag: number;
}

export type BuyersIndexPageModel = PageResult<BuyersIndex>;
