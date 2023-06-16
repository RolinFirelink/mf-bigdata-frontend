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
    title: "货运编号",
    dataIndex: "freightNumber",
    width: 120,
  },
  {
    title: "运输状态",
    dataIndex: "transportState",
    width: 120,
  },
  {
    title: "运输路线",
    dataIndex: "transportLocation",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "freightNumber",
    label: "货运编号",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "transportState",
    label: "运输状态",
    component: "Select",
    componentProps: {
      options: [
        {
          label: "待运输",
          value: "待运输",
        },
        {
          label: "运输中",
          value: "运输中",
        },
        {
          label: "转运中",
          value: "转运中",
        },
        {
          label: "完成",
          value: "完成",
        },
      ],
    },
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
    component: "Select",
    required: true,
    componentProps: {
      options: [
        {
          label: "待运输",
          value: "待运输",
        },
        {
          label: "运输中",
          value: "运输中",
        },
        {
          label: "转运中",
          value: "转运中",
        },
        {
          label: "完成",
          value: "完成",
        },
      ],
    },
  },
  {
    field: "transportLocation",
    label: "运输路线",
    component: "Input",
  },
  {
    field: "freightNumber",
    label: "货运编号",
    component: "Input",
    required: true,
  },
];
