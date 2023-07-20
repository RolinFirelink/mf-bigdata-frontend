/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-16 20:53:10
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-16 21:25:00
 * @FilePath: \mf-bigdata-frontend\src\api\analyse\model\HotWordModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 热词表
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
export interface HotWord extends BaseEntity<number> {
  name: string;
  count: number;
  sentiment: number;
  flag: number;
  statisticalTime: string;
  deleteFlag: number;
}

export interface ReqHotWord {
  name: string;
  flag: number;
  startTime: string;
  endTime: string;
}

export type HotWordPageModel = PageResult<HotWord>;
