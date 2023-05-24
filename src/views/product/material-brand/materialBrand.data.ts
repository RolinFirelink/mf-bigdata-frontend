import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { dateUtil } from "/@/utils/DateUtil";
/**
 * @description: 产品品牌表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "品牌名",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "品牌描述",
    dataIndex: "description",
    width: 120,
  },
  {
    title: "品牌价值观",
    dataIndex: "companyValue",
    width: 120,
  },
  {
    title: "品牌官网",
    dataIndex: "companyWebsite",
    width: 120,
  },
  {
    title: "品牌创立时间",
    dataIndex: "establishedDate",
    width: 120,
  },
  {
    title: "区分字段",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "品牌归属公司名",
    dataIndex: "companyName",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "品牌名",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "description",
    label: "品牌描述",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const materialBrandFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "name",
    label: "品牌名",
    component: "Input",
  },
  {
    field: "description",
    label: "品牌描述",
    component: "Input",
  },
  {
    field: "companyValue",
    label: "品牌价值观",
    component: "Input",
  },
  {
    field: "companyWebsite",
    label: "品牌官网",
    component: "Input",
  },
  {
    field: "establishedDate",
    label: "品牌创立时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布时间",
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dateUtil("00:00:00")],
      },
      ranges: {
        ["今天"]: [dateUtil().startOf("day"), dateUtil()],
        ["昨天"]: [
          dateUtil().startOf("day").subtract(1, "days"),
          dateUtil().endOf("day").subtract(1, "days"),
        ],
        ["最近一周"]: [dateUtil().subtract(1, "weeks")],
        ["最近两周"]: [dateUtil().subtract(2, "weeks")],
        ["最近1个月"]: [dateUtil().subtract(1, "months")],
        ["最近3个月"]: [dateUtil().subtract(3, "months")],
      },
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "flag",
    label: "区分字段",
    component: "Input",
  },
  {
    field: "companyName",
    label: "品牌归属公司名",
    component: "Input",
  },
  {
    field: "companyId",
    label: "品牌归属公司id",
    component: "Input",
  },
];
