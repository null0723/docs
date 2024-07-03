import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/docs/",
  title: "九洲通达",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: '/logo.png',
    outlineTitle: "目录",
    outline:[2,6],

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
      { text: '所有文档', link: '/article/' }
    ],

    sidebar:{
      "/article":set_sidebar("/article"),
    },

    // sidebar: [
    //   {
    //     text: '目录',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //       { text: '测试', link: '/article/test' },
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    //底部配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Jztda'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }

})
