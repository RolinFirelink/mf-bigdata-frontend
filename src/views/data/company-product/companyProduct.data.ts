import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 公司产品
 * @author cgli
 * @date: 2023-10-29
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产品类别",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "公司名称",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "产品名称",
    dataIndex: "productName",
    width: 120,
  },
  {
    title: "产品价格",
    dataIndex: "productValue",
    width: 120,
  },
  {
    title: "产品销量",
    dataIndex: "productSales",
    width: 120,
  },
  {
    title: "生产日期",
    dataIndex: "dateOfManufacture",
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
    field: "companyName",
    label: "公司名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "product",
    label: "产品名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const companyProductFormSchema: FormSchema[] = [
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
    required: true,
  },
  {
    field: "companyName",
    label: "公司名称",
    component: "Input",
  },
  {
    field: "productName",
    label: "产品名称",
    component: "Input",
  },
  {
    field: "productValue",
    label: "产品价格",
    component: "Input",
  },
  {
    field: "productSales",
    label: "产品销量",
    component: "Input",
  },
  {
    field: "dateOfManufacture",
    label: "生产日期",
    component: "DatePicker",
  },
];
