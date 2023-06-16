import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
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
    title: "描述",
    dataIndex: "description",
    width: 120,
  },
  {
    title: "品牌创立时间",
    dataIndex: "establishedDate",
    width: 120,
  },
  {
    title: "品牌归属公司",
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
    field: "companyName",
    label: "归属公司",
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
    required: true,
  },
  {
    field: "description",
    label: "品牌描述",
    component: "Input",
  },
  {
    field: "establishedDate",
    label: "品牌创立时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布时间",
      showTime: true,
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "companyId",
    label: "品牌归属公司",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "companyName",
        value: "id",
      },
      getPopupContainer: () => document.body,
    },
  },
];
