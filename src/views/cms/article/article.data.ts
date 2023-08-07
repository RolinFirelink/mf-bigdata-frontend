import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { dateUtil } from "/@/utils/DateUtil";
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
    title: "封面图片地址",
    dataIndex: "coverImg",
    width: 120,
  },
  {
    title: "倾向",
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
    customRender: ({ record }) => {
      let text = "";
      let color = "";
      switch (record.status) {
        case 0:
          text = "草稿箱";
          color = "grey";
          break;
        case 1:
          text = "审核中";
          color = "yellow";
          break;
        case 2:
          text = "发布";
          color = "green";
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "是否置顶",
    dataIndex: "isTop",
    width: 120,
    customRender: ({ record }) => {
      const status = record.isTop;
      const enable = ~~status === 1;
      const color = enable ? "green" : "grey";
      const text = enable ? "置顶" : "不置顶";
      return h(Tag, { color: color }, () => text);
    },
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
  {
    title: "发布结束期",
    dataIndex: "endTime",
    width: 120,
  },
  // {
  //   title: "信息类型",
  //   dataIndex: "mediaType",
  //   width: 120,
  // },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "title",
    label: "标题",
    component: "Input",
    colProps: { lg: 9, md: 5 },
  },
  {
    field: "author",
    label: "作者",
    component: "Input",
    colProps: { lg: 9, md: 5 },
  },
  {
    field: "source",
    label: "来源",
    component: "Input",
    colProps: { lg: 9, md: 5 },
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
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "status",
    label: "状态",
    component: "Select",
    componentProps: {
      options: [
        { label: "草稿箱", value: 0 },
        { label: "审核中", value: 1 },
        { label: "发布", value: 2 },
      ],
    },
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
    required: true,
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
    field: "coverImg",
    label: "封面图片地址",
    component: "Input",
    required: false,
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
    component: "Select",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "草稿箱", value: 0 },
        { label: "审核中", value: 1 },
        { label: "发布", value: 2 },
      ],
    },
    colProps: { span: 12 },
    required: true,
  },
  {
    field: "isTop",
    label: "是否置顶",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "否", value: 0 },
        { label: "是", value: 1 },
      ],
    },
    colProps: { span: 12 },
    required: true,
  },
  // {
  //   field: "contentModel",
  //   label: "内容模式",
  //   component: "RadioButtonGroup",
  //   defaultValue: 0,
  //   componentProps: {
  //     options: [
  //       { label: "标准", value: 0 },
  //       { label: "定制", value: 1 },
  //     ],
  //   },
  //   colProps: { span: 12 },
  // },
  {
    field: "clickNum",
    label: "点击数",
    component: "InputNumber",
    defaultValue: 0,
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
    field: "endTime",
    label: "发布结束时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布时间",
      showTime: true,
    },
    colProps: { lg: 12, md: 8 },
  },
  // {
  //   field: "mediaType",
  //   label: "信息类型",
  //   component: "Select",
  //   componentProps: {
  //     options: [
  //       { label: "文本", value: "文本" },
  //       { label: "图片", value: "图片" },
  //       { label: "视频", value: "视频" },
  //     ],
  //   },
  //   colProps: { span: 12 },
  // },
];
