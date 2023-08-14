/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-10 22:26:15
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-30 15:56:05
 * @FilePath: \mf-bigdata-frontend\src\views\product\material-storage\materialStorage.data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
// import { h } from "vue";
// import { Tag } from "ant-design-vue";
import { getDictProps } from "/@/utils/DictUtils";
/**
 * @description: 产品库存表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "关联产品",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "产品名称",
    dataIndex: "materialName",
    width: 120,
  },
  {
    title: "库存数量",
    dataIndex: "number",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "flag",
    label: "产品类别",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "materialName",
    label: "产品名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const materialStorageFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "flag",
    label: "产品类别",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "materialId",
    label: "产品",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "number",
    label: "库存数量",
    component: "InputNumber",
  },
];
