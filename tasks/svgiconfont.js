/**
 *  webapp
 *  (c) v <v>
 */

var config = require('./.taskconfig');
var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var fontName = 'iconfont';

gulp.task('svgiconfont', function () {
 gulp.src(['./app/images/icons/*.svg'])
     .pipe(iconfontCss({
         path: 'app/styles/base/_icons_template.scss',
         fontName: fontName,
         targetPath: '../../../app/styles/base/svgicons.scss',
         fontPath: 'fonts/svgicons/',
         svg: true
     }))
     .pipe(iconfont({
         fontName: fontName,
         svg: true,
         formats: ['svg','eot','woff','ttf']
     }))
     .pipe(gulp.dest('app/fonts/svgicons/'));
});

