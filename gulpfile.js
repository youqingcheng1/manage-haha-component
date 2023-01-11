const gulp = require('gulp')
const gulpLess = require('gulp-less')
const minifycss = require('gulp-minify-css')
const flatten = require('gulp-flatten')
const rename = require('gulp-rename')
const path = require('path')
const nameTransform = (str) => {
  let newStr = str.replace(/([A-Z])/g, (macth, p1, offset) => {
    return (offset > 0 ? '-' : '') + p1.toLowerCase()
  })
  return newStr
}
gulp.task('default', async function () {
  return gulp.src(path.join(__dirname, 'src/components/**/style.less')).pipe(gulpLess()).pipe(minifycss())
    .pipe(rename(function (path) {
      path.basename = 'HaUi-' + path.dirname.split('\\')[0]
      path.extname = '.css'
    }))
    .pipe(flatten())
    .pipe(rename(function (path) {
      path.basename = nameTransform(path.basename)
      path.extname = '.css'
    }))
    .pipe(gulp.dest('lib/theme-chunk'))
})
