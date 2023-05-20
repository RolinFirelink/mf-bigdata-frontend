import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 产品表
 * @author cgli
 * @date: 2023-05-18
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
    title: "分类id",
    dataIndex: "categoryId",
    width: 120,
  },
  {
    title: "封面图片地址",
    dataIndex: "coverImg",
    width: 120,
  },
  {
    title: "状态,0->草稿箱,1->发布",
    dataIndex: "status",
    width: 120,
  },
  {
    title: "是否置顶,0->不置顶,1->置顶",
    dataIndex: "isTop",
    width: 120,
  },
  {
    title: "内容模式,0->标准模式,1->定制模式",
    dataIndex: "contentModel",
    width: 120,
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
  },
  {
    title: "是否允许订阅",
    dataIndex: "allowSubscribe",
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
  {
    title: "信息类型,分为,article:文本;picture:图片类;vidio:视频类",
    dataIndex: "mediaType",
    width: 120,
  },
  {
    title: "扩展属性 JSON结构",
    dataIndex: "extendAttribute",
    width: 120,
  },
  {
    title: "多租户组织ID",
    dataIndex: "orgId",
    width: 120,
  },
  {
    title: "0--未删除 1--已删除 DIC_NAME=DELETE_FLAG",
    dataIndex: "deleteFlag",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "title",
    label: "标题",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "summary",
    label: "摘要",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "author",
    label: "作者",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const materialFormSchema: FormSchema[] = [
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
    required: true,
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
    component: "Input",
    required: true,
  },
  {
    field: "coverImg",
    label: "封面图片地址",
    component: "Input",
    required: true,
  },
  {
    field: "status",
    label: "状态,0->草稿箱,1->发布",
    component: "Input",
    required: true,
  },
  {
    field: "isTop",
    label: "是否置顶,0->不置顶,1->置顶",
    component: "Input",
  },
  {
    field: "contentModel",
    label: "内容模式,0->标准模式,1->定制模式",
    component: "Input",
    required: true,
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
    required: true,
  },
  {
    field: "commentNum",
    label: "评论数",
    component: "Input",
    required: true,
  },
  {
    field: "likeNum",
    label: "点赞数",
    component: "Input",
    required: true,
  },
  {
    field: "downloadNum",
    label: "下载量",
    component: "Input",
    required: true,
  },
  {
    field: "shareNum",
    label: "分享数",
    component: "Input",
    required: true,
  },
  {
    field: "allowComment",
    label: "是否允许评论",
    component: "Input",
    required: true,
  },
  {
    field: "allowSubscribe",
    label: "是否允许订阅",
    component: "Input",
    required: true,
  },
  {
    field: "sort",
    label: "排序",
    component: "Input",
    required: true,
  },
  {
    field: "startTime",
    label: "发布开始期",
    component: "Input",
    required: true,
  },
  {
    field: "endTime",
    label: "发布结束期",
    component: "Input",
    required: true,
  },
  {
    field: "mediaType",
    label: "信息类型,分为,article:文本;picture:图片类;vidio:视频类",
    component: "Input",
  },
  {
    field: "extendAttribute",
    label: "扩展属性 JSON结构",
    component: "Input",
  },
  {
    field: "orgId",
    label: "多租户组织ID",
    component: "Input",
    required: true,
  },
  {
    field: "deleteFlag",
    label: "0--未删除 1--已删除 DIC_NAME=DELETE_FLAG",
    component: "Input",
  },
];
