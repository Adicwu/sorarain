# 安装



## 环境支持

::: danger
Sorarain 部分组件具有严重且毁灭性的兼容性问题（以Chromium内核开发），请注意组件内部文档提示。此库只推荐个人爱好者使用，切勿用于公司商业用途。

由于 Vue 3 不再支持 IE11，Sorarain  也不再支持 IE 浏览器
:::


## 使用包管理器

由于npm不支持workspace的导入（或者说我不知道怎么修改包），故推荐使用[Yarn](https://classic.yarnpkg.com/lang/en/)，然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev/) 和 [webpack](https://webpack.js.org/)

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash:no-line-numbers
$ yarn add Sorarain
```

  </CodeGroupItem>
</CodeGroup>



## 浏览器直接引入

暂不支持