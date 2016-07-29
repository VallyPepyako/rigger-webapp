/**
 *  webapp
 *  (c) v <v>
 */

var config = require('./.taskconfig');
var gulp = require('gulp');
var rename = require("gulp-rename");
var imageResize = require('gulp-image-resize');

// resize img for desktop
gulp.task('imgresize_dt', function () {
  gulp.src('./app/images/tr_*.{jpg,jpeg,png}')
    .pipe(imageResize({
        width : 1300,
    }))
    .pipe(rename(function (path) { path.basename += "_dt"; }))
    .pipe(gulp.dest('./app/images'));
});

gulp.task('imgresize_md', function () {
  gulp.src('./app/images/tr_*.{jpg,jpeg,png}')
    .pipe(imageResize({
        exclude: ['./app/images/*_dt.{jpg,jpeg,png}'],
        width : 991,
    }))
    .pipe(rename(function (path) { path.basename += "_md"; }))
    .pipe(gulp.dest('./app/images'));
});

gulp.task('imgresize_xs', function () {
  gulp.src('./app/images/tr_*.{jpg,jpeg,png}')
    .pipe(imageResize({
        exclude: ['./app/images/{*_dt, *_md}.{jpg,jpeg,png}'],
        width : 481,
    }))
    .pipe(rename(function (path) { path.basename += "_xs"; }))
    .pipe(gulp.dest('./app/images'));
});

gulp.task('imgresize', ['imgresize_dt', 'imgresize_md', 'imgresize_xs']);
