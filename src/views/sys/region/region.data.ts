import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 行政区域
 * @author cgli
 * @date: 2023-05-06
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "归属ID",
    dataIndex: "pid",
    width: 120
  },
  {
    title: "组合编码",
    dataIndex: "pids",
    width: 120
  },
  {
    title: "组合名称",
    dataIndex: "pidsName",
    width: 120
  },
  {
    title: "区划名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "英文名称",
    dataIndex: "englishName",
    width: 120
  },
  {
    title: "区划代码",
    dataIndex: "code",
    width: 120
  },
  {
    title: "层次数",
    dataIndex: "level",
    width: 120
  },
  {
    title: "级别名称",
    dataIndex: "levelName",
    width: 120
  },
  {
    title: "国家代码",
    dataIndex: "countryId",
    width: 120
  },
  {
    title: "备注信息",
    dataIndex: "remarks",
    width: 120
  },
/*  {
    title: "删除标记",
    dataIndex: "deletedFlag",
    width: 120
  },*/
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
    {
        field: "code",
        label: "编码",
        component: "Input",
        colProps: { lg: 4, md: 5 }
    },
/*  {
    field: "pid",
        label: "归属父类ID",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },*/
 
  {
    field: "name",
    label: "名称",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
];
export const regionFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "pid",
    label: "父id",
    component: "Input",
    required: true
  },
  {
    field: "pids",
    label: "IDS组合",
      component: "Input",
      show: false
  },
  {
    field: "pidsName",
    label: "组合名称",
      component: "Input",
      show: false
  },
  {
    field: "name",
    label: "区域名称",
    component: "Input",
    required: true
  },
  {
    field: "englishName",
    label: "英文名称",
    component: "Input",
  },
  {
    field: "code",
    label: "区域代码",
    component: "Input",
    required: true
  },
  {
    field: "level",
    label: "层次数",
    component: "Input",
  },
  {
    field: "levelName",
    label: "层次名称",
    component: "Input",
  },
  {
    field: "countryId",
    label: "国家ID",
    component: "Input",
  },
  {
    field: "remarks",
    label: "备注信息",
    component: "Input",
  },
  {
    field: "deletedFlag",
    label: "删除标记",
      component: "Input",
      required: false,
      show: false
  },
];
