import { includes } from 'lodash-es'
import { writeFileSync, readFileSync } from 'fs'
import { ssiDir } from './dirs.mjs'

export const removeDoctype = (options) => {
  const paths = options.routes
    .filter(({ pathname }) => includes(pathname, `/${ssiDir}/`))
    .map((v) => `dist${v.pathname}/index.html`)
  try {
    paths.map((target) => {
      const html = readFileSync(target, 'utf-8')
        .replace('<!DOCTYPE html>', '')
        .replace('<head>', '')
        .replace('</head>', '')

      return writeFileSync(target, html)
    })
  } catch (error) {
    console.log(error)
  }
}
