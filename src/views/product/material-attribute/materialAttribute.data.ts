/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-10 22:26:15
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-30 15:59:02
 * @FilePath: \mf-bigdata-frontend\src\views\product\material-attribute\materialAttribute.data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
// import { h } from "vue";
// import { Tag } from "ant-design-vue";
/**
 * @description: 产品属性表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "属性字段",
    dataIndex: "attributeField",
    width: 120,
  },
  {
    title: "属性名",
    dataIndex: "attributeName",
    width: 120,
  },
  {
    title: "属性值",
    dataIndex: "attributeValue",
    width: 120,
  },
  {
    title: "关联产品",
    dataIndex: "flag",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "attributeField",
    label: "属性字段",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "attributeName",
    label: "属性名",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "attributeValue",
    label: "属性值",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const materialAttributeFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "attributeField",
    label: "属性字段",
    component: "Input",
  },
  {
    field: "attributeName",
    label: "属性名",
    component: "Input",
  },
  {
    field: "attributeValue",
    label: "属性值",
    component: "Input",
  },
  {
    field: "flag",
    label: "产品类别",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
];
