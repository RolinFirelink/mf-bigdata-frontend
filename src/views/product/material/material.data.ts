import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 产品表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
<<<<<<< HEAD
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
=======
    title: "产品类型id",
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
    dataIndex: "categoryId",
    width: 120,
  },
  {
<<<<<<< HEAD
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
=======
    title: "产品名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "型号",
    dataIndex: "model",
    width: 120
  },
  {
    title: "规格",
    dataIndex: "standard",
    width: 120
  },
  {
    title: "颜色",
    dataIndex: "color",
    width: 120
  },
  {
    title: "单位",
    dataIndex: "unit",
    width: 120
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 120
  },
  {
    title: "保质期天数",
    dataIndex: "expiryNum",
    width: 120
  },
  {
    title: "基础重量(kg)",
    dataIndex: "weight",
    width: 120
  },
  {
    title: "状态",
    dataIndex: "enabled",
    width: 120
  },
  {
    title: "自定义扩展字段JSON结构",
    dataIndex: "extendField",
    width: 120
  },
  {
    title: "是否开启序列号，0否，1是",
    dataIndex: "enableSerialNumber",
    width: 120
  },
  {
    title: "是否开启批号，0否，1是",
    dataIndex: "enableBatchNumber",
    width: 120
  },
  /*{
    title: "0--未删除 1--已删除 DIC_NAME=DELETE_FLAG",
    dataIndex: "deletedFlag",
    width: 120
  },
  {
    title: "归属组织id",
    dataIndex: "orgId",
    width: 120
  },*/
  {
    title: "种植规模(单位为㎡)",
    dataIndex: "scale",
    width: 120
  },
  {
    title: "区分字段",
    dataIndex: "flag",
    width: 120
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "categoryId",
    label: "产品类型id",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "name",
    label: "产品名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "model",
    label: "型号",
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
<<<<<<< HEAD
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
=======
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
    field: "categoryId",
    label: "产品类型id",
    component: "Input",
    required: true,
  },
  {
    field: "name",
    label: "产品名称",
    component: "Input",
    required: true,
  },
  {
    field: "model",
    label: "型号",
    component: "Input",
<<<<<<< HEAD
    required: true,
=======
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  },
  {
    field: "standard",
    label: "规格",
    component: "Input",
  },
  {
    field: "color",
    label: "颜色",
    component: "Input",
<<<<<<< HEAD
    required: true,
=======
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  },
  {
    field: "unit",
    label: "单位",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
<<<<<<< HEAD
    required: true,
=======
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  },
  {
    field: "expiryNum",
    label: "保质期天数",
    component: "Input",
<<<<<<< HEAD
    required: true,
=======
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  },
  {
    field: "weight",
    label: "基础重量(kg)",
    component: "Input",
<<<<<<< HEAD
    required: true,
=======
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  },
  {
    field: "enabled",
    label: "启用 0-禁用  1-启用",
    component: "Input",
<<<<<<< HEAD
    required: true,
=======
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  },
  {
    field: "extendField",
    label: "自定义扩展字段JSON结构",
    component: "Input",
<<<<<<< HEAD
    required: true,
=======
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  },
  {
    field: "enableSerialNumber",
    label: "是否开启序列号，0否，1是",
    component: "Input",
<<<<<<< HEAD
    required: true,
=======
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  },
  {
    field: "enableBatchNumber",
    label: "是否开启批号，0否，1是",
    component: "Input",
<<<<<<< HEAD
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
=======
  },
  /*{
    field: "deletedFlag",
    label: "0--未删除 1--已删除 DIC_NAME=DELETE_FLAG",
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
    component: "Input",
  },
  {
    field: "orgId",
    label: "归属组织id",
    component: "Input",
  },*/
  {
    field: "scale",
    label: "种植规模(单位为㎡)",
    component: "Input",
<<<<<<< HEAD
    required: true,
=======
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  },
  {
    field: "flag",
    label: "区分字段",
    component: "Input",
  },
];
