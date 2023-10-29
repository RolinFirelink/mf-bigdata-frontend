import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 惠农网产品信息表
 * @author cgli
 * @date: 2023-09-26
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "月份",
    dataIndex: "dateMonth",
    width: 120,
  },
  {
    title: "一级分类ID",
    dataIndex: "cate1Id",
    width: 120,
  },
  {
    title: "一级分类名称",
    dataIndex: "cate1Name",
    width: 120,
  },
  {
    title: "二级分类ID",
    dataIndex: "cate2Id",
    width: 120,
  },
  {
    title: "二级分类名称",
    dataIndex: "cate2Name",
    width: 120,
  },
  {
    title: "三级分类ID",
    dataIndex: "cate3Id",
    width: 120,
  },
  {
    title: "三级分类名称",
    dataIndex: "cate3Name",
    width: 120,
  },
  {
    title: "搜索热度",
    dataIndex: "searchDegree",
    width: 120,
  },
  {
    title: "购买热度",
    dataIndex: "purchaseDegree",
    width: 120,
  },
  {
    title: "销售热度",
    dataIndex: "saleDegree",
    width: 120,
  },
  {
    title: "交易热度",
    dataIndex: "tradeDegree",
    width: 120,
  },
  {
    title: "总热度",
    dataIndex: "totalDegree",
    width: 120,
  },
  {
    title: "搜索热度比值",
    dataIndex: "searchDegreeRatio",
    width: 120,
  },
  {
    title: "购买热度比值",
    dataIndex: "purchaseDegreeRatio",
    width: 120,
  },
  {
    title: "销售热度比值",
    dataIndex: "saleDegreeRatio",
    width: 120,
  },
  {
    title: "交易热度比值",
    dataIndex: "tradeDegreeRatio",
    width: 120,
  },
  {
    title: "总热度比值",
    dataIndex: "totalDegreeRatio",
    width: 120,
  },
  {
    title: "搜索热度同比",
    dataIndex: "searchDegreeTongRatio",
    width: 120,
  },
  {
    title: "购买热度同比",
    dataIndex: "purchaseDegreeTongRatio",
    width: 120,
  },
  {
    title: "销售热度同比",
    dataIndex: "saleDegreeTongRatio",
    width: 120,
  },
  {
    title: "交易热度同比",
    dataIndex: "tradeDegreeTongRatio",
    width: 120,
  },
  {
    title: "总热度同比",
    dataIndex: "totalDegreeTongRatio",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "dateMonth",
    label: "月份",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "cate3Name",
    label: "三级分类名",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const marketInfoFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "dateMonth",
    label: "月份",
    component: "Input",
  },
  {
    field: "cate1Id",
    label: "一级分类ID",
    component: "Input",
  },
  {
    field: "cate1Name",
    label: "一级分类名",
    component: "Input",
  },
  {
    field: "cate2Id",
    label: "二级分类ID",
    component: "Input",
  },
  {
    field: "cate2Name",
    label: "二级分类名",
    component: "Input",
  },
  {
    field: "cate3Id",
    label: "三级分类ID",
    component: "Input",
  },
  {
    field: "cate3Name",
    label: "三级分类名",
    component: "Input",
  },
  {
    field: "searchDegree",
    label: "搜索热度",
    component: "Input",
  },
  {
    field: "purchaseDegree",
    label: "购买热度",
    component: "Input",
  },
  {
    field: "saleDegree",
    label: "销售热度",
    component: "Input",
  },
  {
    field: "tradeDegree",
    label: "交易热度",
    component: "Input",
  },
  {
    field: "totalDegree",
    label: "总热度",
    component: "Input",
  },
  {
    field: "searchDegreeRatio",
    label: "搜索热度比值",
    component: "Input",
  },
  {
    field: "purchaseDegreeRatio",
    label: "购买热度比值",
    component: "Input",
  },
  {
    field: "saleDegreeRatio",
    label: "销售热度比值",
    component: "Input",
  },
  {
    field: "tradeDegreeRatio",
    label: "交易热度比值",
    component: "Input",
  },
  {
    field: "totalDegreeRatio",
    label: "总热度比值",
    component: "Input",
  },
  {
    field: "searchDegreeTongRatio",
    label: "搜索热度同比",
    component: "Input",
  },
  {
    field: "purchaseDegreeTongRatio",
    label: "购买热度同比",
    component: "Input",
  },
  {
    field: "saleDegreeTongRatio",
    label: "销售热度同比",
    component: "Input",
  },
  {
    field: "tradeDegreeTongRatio",
    label: "交易热度同比",
    component: "Input",
  },
  {
    field: "totalDegreeTongRatio",
    label: "总热度同比",
    component: "Input",
  },
];
