import { dest, src } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import less from 'gulp-less'
import { resolve } from 'path'

export const componentPath = resolve(__dirname, '../../')

/**
 * less转css
 * @returns
 */
export const lessTranspile = () => {
  return src(`${componentPath}/src/**/style/**.less`) // 匹配项目指定目录结构下less文件
    .pipe(less()) // less转css
    .pipe(autoprefixer()) // css兼容前缀补充
    .pipe(dest(`${componentPath}/dist/lib/src`)) // 放入lib包
    .pipe(dest(`${componentPath}/dist/es/src`)) // 放入es包
}
