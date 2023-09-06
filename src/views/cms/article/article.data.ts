import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { dateUtil } from "/@/utils/DateUtil";
import TableImage from "/@/components/general/Table/src/components/TableImg.vue";
import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 文章
 * @author cgli
 * @date: 2023-05-15
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "标题",
    dataIndex: "title",
    width: 120,
  },
  {
    title: "摘要",
    dataIndex: "summary",
    width: 120,
  },
  {
    title: "作者",
    dataIndex: "author",
    width: 120,
  },
  {
    title: "来源",
    dataIndex: "source",
    width: 120,
  },
  {
    title: "分类",
    dataIndex: "categoryName",
    width: 120,
  },
  {
    title: "图片",
    dataIndex: "coverImg",
    customRender: ({ record }) => {
      const imgList = [record.coverImg];
      return h(TableImage, { size: 40, simpleShow: true, imgList: imgList });
    },
    width: 60,
  },
  {
    title: "倾向性",
    dataIndex: "inclined",
    width: 120,
  },
  {
    title: "产品类型",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "状态",
    dataIndex: "status",
    width: 120,
  },
  {
    title: "是否置顶",
    dataIndex: "isTop",
    width: 120,
  },
  {
    title: "点击数",
    dataIndex: "clickNum",
    width: 120,
  },
  {
    title: "排序",
    dataIndex: "sort",
    width: 120,
  },
  {
    title: "发布开始期",
    dataIndex: "startTime",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "title",
    label: "标题",
    component: "Input",
    colProps: { lg: 8, md: 5 },
  },
  {
    field: "author",
    label: "作者",
    component: "Input",
    colProps: { lg: 8, md: 5 },
  },
  {
    field: "source",
    label: "来源",
    component: "Input",
    colProps: { lg: 8, md: 5 },
  },
  {
    field: "[startTime, endTime]",
    label: "发布时间",
    component: "RangePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: ["开始时间", "结束时间"],
      valueFormat: "YYYY-MM-DD",
      ranges: {
        ["今天"]: [dateUtil().startOf("day"), dateUtil()],
        ["昨天"]: [
          dateUtil().startOf("day").subtract(1, "days"),
          dateUtil().endOf("day").subtract(1, "days"),
        ],
        ["最近一周"]: [dateUtil().subtract(1, "weeks"), dateUtil()],
        ["最近两周"]: [dateUtil().subtract(2, "weeks"), dateUtil()],
        ["最近1个月"]: [dateUtil().subtract(1, "months"), dateUtil()],
        ["最近3个月"]: [dateUtil().subtract(3, "months"), dateUtil()],
      },
    },
    colProps: { lg: 8, md: 8 },
  },
  {
    field: "inclined",
    label: "倾向性",
    component: "ApiSelect",
    componentProps: getDictProps("mk_article_inclined"),
    colProps: { span: 8 },
  },
  {
    field: "status",
    label: "状态",
    component: "ApiSelect",
    componentProps: getDictProps("mk_article_status"),
    colProps: { lg: 9, md: 5 },
  },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 9, md: 5 },
  },
];
export const articleFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "title",
    label: "标题",
    component: "Input",
    required: true,
  },
  {
    field: "summary",
    label: "摘要",
    component: "Input",
    required: false,
  },
  {
    field: "author",
    label: "作者",
    component: "Input",
    required: false,
  },
  {
    field: "source",
    label: "来源",
    component: "Input",
    required: false,
  },
  {
    field: "categoryId",
    label: "分类",
    component: "TreeSelect",
    required: true,
    componentProps: {
      fieldNames: {
        label: "name",
        key: "id",
        value: "id",
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    required: false,
  },
  {
    field: "status",
    label: "状态",
    component: "ApiSelect",
    defaultValue: 1,
    componentProps: getDictProps("mk_article_status"),
    colProps: { span: 12 },
    required: true,
  },
  {
    field: "isTop",
    label: "是否置顶",
    component: "ApiRadioGroup",
    defaultValue: 0,
    componentProps: getDictProps("mk_article_top"),
    colProps: { span: 12 },
    required: true,
  },
  {
    field: "clickNum",
    label: "点击数",
    component: "Input",
  },
  {
    field: "sort",
    label: "排序",
    component: "InputNumber",
    defaultValue: 50,
    required: false,
  },
  {
    field: "startTime",
    label: "发布时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布时间",
      showTime: true,
    },
    colProps: { lg: 12, md: 8 },
    required: true,
  },
  {
    field: "inclined",
    label: "倾向性",
    component: "ApiSelect",
    defaultValue: 2,
    componentProps: getDictProps("mk_article_inclined"),
    colProps: { span: 12 },
    required: false,
  },
];
