import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { dateUtil } from "/@/utils/DateUtil";
import TableImage from "/@/components/general/Table/src/components/TableImg.vue";
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
    title: "倾向性",
    dataIndex: "inclined",
    width: 120,
    customRender: ({ record }) => {
      let color = "";
      let text = "";
      const inclined = record.inclined;
      const inclinedList = [
        { value: 1, text: "正面", color: "green" },
        { value: 2, text: "中性", color: "yellow" },
        { value: 3, text: "负面", color: "red" },
      ];
      inclinedList.forEach((item) => {
        if (inclined === item.value) {
          color = item.color;
          text = item.text;
          return;
        }
      });
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
    field: "flag",
    label: "产品分类",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "鸽子", value: 7 },
      ],
    },
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
    component: "Select",
    componentProps: {
      options: [
        { label: "正面", value: 1 },
        { label: "中性", value: 2 },
        { label: "负面", value: 3 },
      ],
    },
    colProps: { span: 8 },
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
    required: true,
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
    field: "status",
    label: "状态",
    component: "Select",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "草稿", value: 0 },
        { label: "审核中", value: 1 },
        { label: "发布", value: 2 },
      ],
    },
    colProps: { span: 12 },
    required: true,
  },
  {
    field: "flag",
    label: "产品分类",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "鸽子", value: 7 },
      ],
    },
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
  {
    field: "clickNum",
    label: "点击数",
    component: "Input",
  },
  {
    field: "sort",
    label: "排序",
    component: "InputNumber",
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
    component: "Select",
    defaultValue: 2,
    componentProps: {
      options: [
        { label: "正面", value: 1 },
        { label: "中性", value: 2 },
        { label: "负面", value: 3 },
      ],
    },
    colProps: { span: 12 },
    required: true,
  },
];
