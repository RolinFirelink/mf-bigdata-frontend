import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: sh_data_import
 * @author cgli
 * @date: 2023-06-05
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: " 表名",
    dataIndex: "tableName",
    width: 120,
  },
  {
    title: "列1",
    dataIndex: "column1",
    width: 120,
  },
  {
    title: "列2",
    dataIndex: "column2",
    width: 120,
  },
  {
    title: "列3",
    dataIndex: "column3",
    width: 120,
  },
  {
    title: "列4",
    dataIndex: "column4",
    width: 120,
  },
  {
    title: "列5",
    dataIndex: "column5",
    width: 120,
  },
  {
    title: "列6",
    dataIndex: "column6",
    width: 120,
  },
  {
    title: "列7",
    dataIndex: "column7",
    width: 120,
  },
  {
    title: "列8",
    dataIndex: "column8",
    width: 120,
  },
  {
    title: "列9",
    dataIndex: "column9",
    width: 120,
  },
  {
    title: "列10",
    dataIndex: "column10",
    width: 120,
  },
  {
    title: "列11",
    dataIndex: "column11",
    width: 120,
  },
  {
    title: "列12",
    dataIndex: "column12",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "tableName",
    label: " 表名",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "column1",
    label: "列1",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "column2",
    label: "列2",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const dataImportFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "tableName",
    label: " 表名",
    component: "Input",
  },
  {
    field: "column1",
    label: "列1",
    component: "Input",
  },
  {
    field: "column2",
    label: "列2",
    component: "Input",
  },
  {
    field: "column3",
    label: "列3",
    component: "Input",
  },
  {
    field: "column4",
    label: "列4",
    component: "Input",
  },
  {
    field: "column5",
    label: "列5",
    component: "Input",
  },
  {
    field: "column6",
    label: "列6",
    component: "Input",
  },
  {
    field: "column7",
    label: "列7",
    component: "Input",
  },
  {
    field: "column8",
    label: "列8",
    component: "Input",
  },
  {
    field: "column9",
    label: "列9",
    component: "Input",
  },
  {
    field: "column10",
    label: "列10",
    component: "Input",
  },
  {
    field: "column11",
    label: "列11",
    component: "Input",
  },
  {
    field: "column12",
    label: "列12",
    component: "Input",
  },
];
