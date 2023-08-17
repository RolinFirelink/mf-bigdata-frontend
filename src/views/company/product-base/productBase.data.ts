import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { getDictProps } from "/@/utils/DictUtils";
import TableImage from "/@/components/general/Table/src/components/TableImg.vue";
/**
 * @description: 产品基地
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "基地名称",
    dataIndex: "baseName",
    width: 120,
  },
  {
    title: "企业",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "联系人",
    dataIndex: "contacts",
    width: 120,
  },
  {
    title: "联系电话",
    dataIndex: "contactPhone",
    width: 120,
  },
  {
    title: "电子邮箱",
    dataIndex: "email",
    width: 120,
  },
  {
    title: "基地详细地址",
    dataIndex: "address",
    width: 120,
  },
  {
    title: "基地面积",
    dataIndex: "area",
    width: 120,
    customRender: ({ record }) => {
      return record.area ? record.area + "亩" : "";
    },
  },
  {
    title: "主要产物",
    dataIndex: "mainProduct",
    width: 120,
  },
  {
    title: "年产量",
    dataIndex: "annualOutput",
    width: 120,
  },
  {
    title: "认证情况",
    dataIndex: "attestation",
    width: 120,
    customRender: ({ record }) => {
      const tags: any = [];
      if (record.attestation) {
        if (record.attestation.indexOf(1) !== -1) {
          tags.push(h(Tag, { color: "#05a42d" }, () => "绿色"));
        }
        if (record.attestation.indexOf(2) !== -1) {
          tags.push(h(Tag, { color: "#00b2ff" }, () => "无公害"));
        }
        if (record.attestation.indexOf(3) !== -1) {
          tags.push(h(Tag, { color: "#F43067" }, () => "地理标志"));
        }
        if (record.attestation.indexOf(4) !== -1) {
          tags.push(h(Tag, { color: "#e6c805" }, () => "其他"));
        }
      }
      return h("div", tags);
    },
  },
  {
    title: "图片",
    customRender: ({ record }) => {
      const imgList = [record.img];
      return h(TableImage, { size: 40, simpleShow: true, imgList: imgList });
    },
    width: 60,
  },
  {
    title: "官网地址",
    dataIndex: "websiteAddress",
    width: 120,
  },
  {
    title: "产品分类",
    dataIndex: "flag",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.flag) {
        case 1:
          text = "肉鸡";
          break;
        case 2:
          text = "柑橘";
          break;
        case 3:
          text = "兰花";
          break;
        case 4:
          text = "对虾";
          break;
        case 5:
          text = "菜心";
          break;
        case 7:
          text = "鸽子";
          break;
      }
      const color = "#FF9800";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "城市",
    dataIndex: "city",
    width: 120,
  },
  {
    title: "经度",
    dataIndex: "lat",
    width: 120,
  },
  {
    title: "维度",
    dataIndex: "lng",
    width: 120,
  },
  {
    title: "产量单位",
    dataIndex: "outputUnit",
    width: 120,
  },
  {
    title: "所在的区",
    dataIndex: "region",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "baseName",
    label: "基地名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "产品分类",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
];
export const productBaseFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "baseName",
    label: "基地名称",
    component: "Input",
    required: true,
  },
  {
    field: "contacts",
    label: "联系人",
    component: "Input",
  },
  {
    field: "contactPhone",
    label: "联系电话",
    component: "Input",
  },
  {
    field: "email",
    label: "电子邮箱",
    component: "Input",
  },
  {
    field: "country",
    label: "国家",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "province",
    label: "省份",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "city",
    label: "城市",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "area",
    label: "地区",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "street",
    label: "街道",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "detail",
    label: "基地详细地址",
    component: "Input",
  },
  {
    field: "websiteAddress",
    label: "公司网址",
    component: "Input",
  },
  {
    field: "companyId",
    label: "企业",
    component: "Select",
    required: true,
    componentProps: {
      fieldNames: {
        label: "companyName",
        value: "id",
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: "extendField",
    label: "自定义拓展字段JSON 结构",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
  },
  {
    field: "area",
    label: "基地面积",
    component: "Input",
  },
  {
    field: "mainProduct",
    label: "主要产品",
    component: "Input",
  },
  {
    field: "annualOutput",
    label: "年产量",
    component: "Input",
  },
  {
    field: "attestation",
    label: "认证情况",
    component: "Select",
    componentProps: {
      mode: "multiple",
      fieldNames: {
        label: "dictLabel",
        value: "dictValue",
      },
    },
  },
  // {
  //   field: "img",
  //   label: "封面图片",
  //   component: "Input",
  // },
  // {
  //   field: "img",
  //   label: "封面图片",
  //   component: "Input",
  // },
  {
    field: "flag",
    label: "产品分类",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "city",
    label: "城市",
    component: "Input",
  },
  {
    field: "lat",
    label: "经度",
    component: "Input",
    componentProps: {
      disabled: true,
    },
  },
  {
    field: "lng",
    label: "维度",
    component: "Input",
    componentProps: {
      disabled: true,
    },
  },
  {
    field: "outputUnit",
    label: "产量单位",
    component: "Input",
  },
  {
    field: "region",
    label: "所在的区",
    component: "Input",
  },
];
