import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 页面配置
 * @author cgli
 * @date: 2023-05-31
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "报表编码",
    dataIndex: "reportCode",
    width: 120,
  },
  {
    title: "看板标题",
    dataIndex: "title",
    width: 120,
  },
  {
    title: "宽度px",
    dataIndex: "width",
    width: 120,
  },
  {
    title: "高度px",
    dataIndex: "height",
    width: 120,
  },
  {
    title: "背景色",
    dataIndex: "backgroundColor",
    width: 120,
  },
  {
    title: "背景图片",
    dataIndex: "backgroundImage",
    width: 120,
  },
  {
    title: "工作台中的辅助线",
    dataIndex: "presetLine",
    width: 120,
  },
  {
    title: "自动刷新间隔秒",
    dataIndex: "refreshSeconds",
    width: 120,
  },
  {
    title: "0--已禁用 1--已启用  DIC_NAME=ENABLE_FLAG",
    dataIndex: "enableFlag",
    width: 120,
  },
  {
    title: " 0--未删除 1--已删除 DIC_NAME=DEL_FLAG",
    dataIndex: "deleteFlag",
    width: 120,
  },
  {
    title: "排序，降序",
    dataIndex: "sort",
    width: 120,
  },
  {
    title: "版本号",
    dataIndex: "version",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "reportCode",
    label: "报表编码",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "title",
    label: "看板标题",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "width",
    label: "宽度px",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const reportDashboardFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "reportCode",
    label: "报表编码",
    component: "Input",
    required: true,
  },
  {
    field: "title",
    label: "看板标题",
    component: "Input",
  },
  {
    field: "width",
    label: "宽度px",
    component: "Input",
  },
  {
    field: "height",
    label: "高度px",
    component: "Input",
  },
  {
    field: "backgroundColor",
    label: "背景色",
    component: "Input",
  },
  {
    field: "backgroundImage",
    label: "背景图片",
    component: "Input",
  },
  {
    field: "presetLine",
    label: "工作台中的辅助线",
    component: "Input",
  },
  {
    field: "refreshSeconds",
    label: "自动刷新间隔秒",
    component: "Input",
  },
  {
    field: "enableFlag",
    label: "0--已禁用 1--已启用  DIC_NAME=ENABLE_FLAG",
    component: "Input",
  },
  {
    field: "deleteFlag",
    label: " 0--未删除 1--已删除 DIC_NAME=DEL_FLAG",
    component: "Input",
  },
  {
    field: "sort",
    label: "排序，降序",
    component: "Input",
  },
  {
    field: "version",
    label: "版本号",
    component: "Input",
  },
];
