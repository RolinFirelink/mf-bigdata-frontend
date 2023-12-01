/**
 * @description: 统计数据
 * @author zsj
 * @date: 2023-11-15
 * @version: V1.0.0
 */
import { List } from "echarts";
import { defHttp } from "/@/utils/http/axios";

enum Api {
  Statistics = "/web/statistics",
}

/**
 * 分页列表查询
 *
 * @return
 */
export const getStatisticsInfo = () => {
  return defHttp.get<List>({
    url: Api.Statistics,
  });
};
