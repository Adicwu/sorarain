import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'
import sidebar from '../../src/sidebar'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
  theme: defaultTheme({
    logo: '/images/favicon.png',
    repo: 'https://github.com/Adicwu/sorarain-cli/tree/master/packages/sorarain',
    docsRepo: 'https://github.com/Adicwu/sorarain-cli/tree/master/site',
    docsBranch: 'master',
    notFound: ['李在淦神魔？'],
    navbar: [
      {
        text: '设计',
        link: '/zh/guide/base-design'
      },
      {
        text: '组件',
        link: '/zh/component/keep-alives'
      }
    ],
    sidebar
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
      title: 'Sorarain',
      description: '基于Vue3的功能性组件库'
    }
  },
  // markdown: {
  //   importCode: {
  //     handleImportPath: (str) =>
  //       str.replace(/^@src/, path.resolve(__dirname, 'path/to/src'))
  //   }
  // },
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
      componentsPatterns: [
        '**/*.vue',
      ]
    })
  ],
  port: 2444
})
