// 概况管理
const Home = () => import("@/views/home/Home.vue");
const Chat =()=>import('@/views/home/Chat.vue')

// 商品管理
const Cate = () => import("@/views/good/Cate.vue");
const Add = () => import("@/views/good/Add.vue");
const List=()=>import('@/views/good/List.vue')

export default [
  {
    id: 1,
    title: "概况管理",
    icon: "el-icon-s-home",
    children: [
      {
        id: 11,
        path: "/home",
        title: "首页管理",
        icon: "el-icon-tickets",
        comm: Home,
      },
      {
        id:12,
        path:'/chat',
        title:'聊天室',
        icon:'el-icon-headset',
        comm:Chat,
      }
    ],
  },
  {
    id: 2,
    title: "商品管理",
    icon: "el-icon-office-building",
    children: [
      {
        id: 21,
        path: "/cate",
        title: "添加品类",
        icon: "el-icon-edit-outline",
        comm: Cate,
      },
      {
        id: 22,
        path: "/goodadd/:id",
        title: "商品新增",
        icon: "el-icon-circle-plus-outline",
        comm: Add,
      },
      {
        id:23,
        path:'/goodlist',
        title:'商品列表',
        icon:'el-icon-tickets',
        comm:List,
      }
    ],
  },
];
