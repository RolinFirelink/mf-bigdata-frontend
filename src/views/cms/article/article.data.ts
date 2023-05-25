import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { dateUtil } from "/@/utils/DateUtil";
import { Tag } from "ant-design-vue";
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
    title: "状态",
    dataIndex: "status",
    width: 120,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 1;
      const color = enable ? "green" : "grey";
      const text = enable ? "发布" : "草稿箱";
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
    title: "内容模式",
    dataIndex: "contentModel",
    width: 120,
    customRender: ({ record }) => {
      const status = record.contentModel;
      const enable = ~~status === 1;
      const color = enable ? "green" : "grey";
      const text = enable ? "定制模式" : "标准模式";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "点击数",
    dataIndex: "clickNum",
    width: 120,
  },
  {
    title: "收藏量",
    dataIndex: "collectNum",
    width: 120,
  },
  {
    title: "评论数",
    dataIndex: "commentNum",
    width: 120,
  },
  {
    title: "点赞数",
    dataIndex: "likeNum",
    width: 120,
  },
  {
    title: "下载量",
    dataIndex: "downloadNum",
    width: 120,
  },
  {
    title: "分享数",
    dataIndex: "shareNum",
    width: 120,
  },
  {
    title: "是否允许评论",
    dataIndex: "allowComment",
    width: 120,
    customRender: ({ record }) => {
      const status = record.allowComment;
      const enable = ~~status === 1;
      const color = enable ? "green" : "grey";
      const text = enable ? "允许" : "不允许";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "是否允许订阅",
    dataIndex: "allowSubscribe",
    width: 120,
    customRender: ({ record }) => {
      const status = record.allowSubscribe;
      const enable = ~~status === 1;
      const color = enable ? "green" : "grey";
      const text = enable ? "允许" : "不允许";
      return h(Tag, { color: color }, () => text);
    },
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
  {
    title: "信息类型",
    dataIndex: "mediaType",
    width: 120,
  },
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
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dateUtil("00:00:00", "HH:mm:ss"), dateUtil("23:59:59", "HH:mm:ss")],
      },
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
    required: false,
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
  },
  {
    field: "source",
    label: "来源",
    component: "Input",
  },
  {
    field: "categoryId",
    label: "分类id",
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
    field: "status",
    label: "状态",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "草稿箱", value: 0 },
        { label: "发布", value: 1 },
      ],
    },
    colProps: { span: 12 },
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
  },
  {
    field: "contentModel",
    label: "内容模式",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "标准", value: 0 },
        { label: "定制", value: 1 },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: "clickNum",
    label: "点击数",
    component: "Input",
  },
  {
    field: "collectNum",
    label: "收藏量",
    component: "Input",
    required: false,
  },
  {
    field: "commentNum",
    label: "评论数",
    component: "Input",
    required: false,
  },
  {
    field: "likeNum",
    label: "点赞数",
    component: "Input",
    required: false,
  },
  {
    field: "downloadNum",
    label: "下载量",
    component: "Input",
    required: false,
  },
  {
    field: "shareNum",
    label: "分享数",
    component: "Input",
    required: false,
  },
  {
    field: "allowComment",
    label: "是否允许评论",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "否", value: 0 },
        { label: "是", value: 1 },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: "allowSubscribe",
    label: "是否允许订阅",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "否", value: 0 },
        { label: "是", value: 1 },
      ],
    },
    colProps: { span: 12 },
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
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dateUtil("00:00:00")],
      },
      ranges: {
        ["今天"]: [dateUtil().startOf("day"), dateUtil()],
        ["昨天"]: [
          dateUtil().startOf("day").subtract(1, "days"),
          dateUtil().endOf("day").subtract(1, "days"),
        ],
        ["最近一周"]: [dateUtil().subtract(1, "weeks")],
        ["最近两周"]: [dateUtil().subtract(2, "weeks")],
        ["最近1个月"]: [dateUtil().subtract(1, "months")],
        ["最近3个月"]: [dateUtil().subtract(3, "months")],
      },
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "endTime",
    label: "发布结束时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布结束时间",
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dateUtil("00:00:00")],
      },
      ranges: {
        ["今天"]: [dateUtil().startOf("day"), dateUtil()],
        ["昨天"]: [
          dateUtil().startOf("day").subtract(1, "days"),
          dateUtil().endOf("day").subtract(1, "days"),
        ],
        ["最近一周"]: [dateUtil().subtract(1, "weeks")],
        ["最近两周"]: [dateUtil().subtract(2, "weeks")],
        ["最近1个月"]: [dateUtil().subtract(1, "months")],
        ["最近3个月"]: [dateUtil().subtract(3, "months")],
      },
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "mediaType",
    label: "信息类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "文本", value: "文本" },
        { label: "图片", value: "图片" },
        { label: "视频", value: "视频" },
      ],
    },
    colProps: { span: 12 },
  },
];
