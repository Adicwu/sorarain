import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Sorarain',
  description: '这是我的第一个 VuePress 站点',
  // head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    logo: '/images/favicon.ico',
    repo: 'https://github.com/Adicwu/sorarain-cli/tree/master/packages/sorarain',
    docsRepo: '',
    navbar: [
      {
        text: '指南',
        link: '/foo/'
      },
      {
        text: '组件',
        link: '/foo/'
        // children: ['/group/foo.md', '/group/bar.md'],
      }
    ],
    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: []
          },
          // 字符串 - 页面文件路径
          '/foo/bar.md'
        ]
      },
      // 字符串 - 页面文件路径
      '/bar/README.md'
    ]
  }),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    // '/': {
    //   lang: 'en-US',
    //   title: 'VuePress',
    //   description: 'Vue-powered Static Site Generator',
    // },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@src/, path.resolve(__dirname, 'path/to/src'))
    }
  }
})
