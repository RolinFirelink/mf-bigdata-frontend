import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 惠农网产量数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
export interface ProduceData extends BaseEntity<number> {
  dateYear: number;
  startArea: string;
  flag: number;
  starQty: number;
  statUnit: string;
  deleteFlag: number;
}

export interface ReqProduceData {

}

export type ProduceDataPageModel = PageResult<ProduceData>;
