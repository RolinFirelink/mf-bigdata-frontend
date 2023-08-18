import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { dateUtil } from "/@/utils/DateUtil";
import { getDictProps } from "/@/utils/DictUtils";
import { h } from "vue";
import { Tag } from "ant-design-vue";

/**
 * @description: 热词表
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "热词",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "提及次数",
    dataIndex: "count",
    width: 120,
  },
  {
    title: "情绪",
    dataIndex: "sentiment",
    width: 120,
  },
  {
    title: "产品类型",
    dataIndex: "flags",
    width: 120,
    customRender: ({ record }) => {
      const tags: any = [];
      if (record.flags) {
        if (record.flags.indexOf(1) !== -1) {
          tags.push(h(Tag, { color: "#e6c805" }, () => "肉鸡"));
        }
        if (record.flags.indexOf(2) !== -1) {
          tags.push(h(Tag, { color: "#e6c805" }, () => "柑橘"));
        }
        if (record.flags.indexOf(3) !== -1) {
          tags.push(h(Tag, { color: "#e6c805" }, () => "兰花"));
        }
        if (record.flags.indexOf(4) !== -1) {
          tags.push(h(Tag, { color: "#e6c805" }, () => "对虾"));
        }
        if (record.flags.indexOf(5) !== -1) {
          tags.push(h(Tag, { color: "#e6c805" }, () => "菜心"));
        }
        if (record.flags.indexOf(7) !== -1) {
          tags.push(h(Tag, { color: "#e6c805" }, () => "鸽子"));
        }
      }
      return h("div", tags);
    },
  },
  {
    title: "统计时间",
    dataIndex: "statisticalTime",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "热词",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  // {
  //   field: "flag",
  //   label: "产品类型",
  //   component: "ApiSelect",
  //   componentProps: getDictProps("mk_product_type"),
  // },
  {
    field: "sentiment",
    label: "情绪",
    component: "ApiSelect",
    componentProps: getDictProps("mk_article_inclined"),
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "[startTime, endTime]",
    label: "统计时间",
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
    colProps: { lg: 10, md: 8 },
  },
];
export const hotWordFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "name",
    label: "热词",
    component: "Input",
  },
  {
    field: "count",
    label: "提及次数",
    component: "Input",
  },
  {
    field: "sentiment",
    label: "情绪",
    component: "ApiSelect",
    componentProps: getDictProps("mk_article_inclined"),
  },
  {
    field: "flags",
    label: "产品类型",
    component: "Select",
    componentProps: {
      mode: "multiple",
      fieldNames: {
        label: "dictLabel",
        value: "dictValue",
      },
    },
  },
  {
    field: "statisticalTime",
    label: "统计时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: "记录日期",
      showTime: true,
    },
  },
];
