module.exports = {
  title: '吱吱前端面试',
  description: '前端手撕题  leetcode 八股文',
  theme: 'reco',
  themeConfig: {
    author: "Shark Xu",
    authorAvatar: "",
    logo:"",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "吱吱前端面试",
        items: [
          { text: "博客圆", link: "https://www.cnblogs.com/zhangzizi/" },
          { text: "Github", link: "https://github.com/amaris10" }
        ]
      }
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客", // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    },
  },
  plugins: [
    [
      "cursor-effects",
      {
        size: 4, // size of the particle, default: 2
        shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
  ]
}