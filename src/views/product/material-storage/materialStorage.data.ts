import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 产品库存表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "区分字段",
    dataIndex: "flag",
    width: 120
  },
  {
    title: "自定义拓展JSON结构数据",
    dataIndex: "data",
    width: 120
  },
  {
    title: "逻辑删除",
    dataIndex: "deletedFlag",
    width: 120
  },
  {
    title: "归属组织id",
    dataIndex: "ownerId",
    width: 120
  },
  {
    title: "产品id",
    dataIndex: "materialId",
    width: 120
  },
  {
    title: "产品名字",
    dataIndex: "materialName",
    width: 120
  },
  {
    title: "库存数量",
    dataIndex: "number",
    width: 120
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "flag",
    label: "区分字段",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "data",
    label: "自定义拓展JSON结构数据",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "deletedFlag",
    label: "逻辑删除",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
];
export const materialStorageFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "flag",
    label: "区分字段",
    component: "Input",
  },
  {
    field: "data",
    label: "自定义拓展JSON结构数据",
    component: "Input",
  },
  {
    field: "deletedFlag",
    label: "逻辑删除",
    component: "Input",
  },
  {
    field: "ownerId",
    label: "归属组织id",
    component: "Input",
  },
  {
    field: "materialId",
    label: "产品id",
    component: "Input",
  },
  {
    field: "materialName",
    label: "产品名字",
    component: "Input",
  },
  {
    field: "number",
    label: "库存数量",
    component: "Input",
  },
];
