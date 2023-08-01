/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-16 12:56:24
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-16 14:47:15
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\model\ProvinceSupplyModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 省份供应表
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
export interface ProvinceSupply extends BaseEntity<number> {
  province: string;
  upplyUnit: string;
  flag: number;
  upply: string;
  product: string;
}

export interface ReqProvinceSupply {
  province: string;
  flag: number;
}

export type ProvinceSupplyPageModel = PageResult<ProvinceSupply>;
