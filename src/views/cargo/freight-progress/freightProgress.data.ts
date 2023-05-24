import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 货运进度表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "运输状态",
    dataIndex: "transportState",
    width: 120,
  },
  {
    title: "进度地点,各个地点之间用,分隔",
    dataIndex: "transportLocation",
    width: 120,
  },
  {
    title: "货运编号",
    dataIndex: "freightNumber",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "transportState",
    label: "运输状态",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "transportLocation",
    label: "进度地点,各个地点之间用,分隔",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "freightNumber",
    label: "货运编号",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const freightProgressFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "transportState",
    label: "运输状态",
    component: "Input",
    required: true,
  },
  {
    field: "transportLocation",
    label: "进度地点,各个地点之间用,分隔",
    component: "Input",
  },
  {
    field: "freightNumber",
    label: "货运编号",
    component: "Input",
    required: true,
  },
];
