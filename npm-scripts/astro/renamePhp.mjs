import { includes } from 'lodash-es'
import { renameSync } from 'fs'
import { ssiDir } from './dirs.mjs'

export const renamePhp = (options) => {
  // SSIを除き拡張子はphpに変更
  const paths = options.routes
    .filter(({ pathname }) => !includes(pathname, `/${ssiDir}/`))
    .map((v) => `dist${v.pathname}/index.html`)
  try {
    paths.map((target) => {
      const phpPath = target.replace('.html', '.php')
      return renameSync(target, phpPath)
    })
  } catch (error) {
    console.log(error)
  }
}
