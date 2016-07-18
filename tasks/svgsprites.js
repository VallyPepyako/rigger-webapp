/**
 *  webapp
 *  (c) v <v>
 */

var config = require('./.taskconfig');
var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var svgmin = require('gulp-svgmin');
var cheerio = require('gulp-cheerio');
var replace = require('gulp-replace');

gulp.task('svgsprites', function () {
 return gulp.src('./app/images/icons/*.svg')
    // minify svg
     .pipe(svgmin({
         js2svg: {
             pretty: true
         }
     }))
     // remove all fill and style declarations in out shapes
     .pipe(cheerio({
         run: function ($) {
             $('[fill]').removeAttr('fill');
             $('[stroke]').removeAttr('stroke');
             $('[style]').removeAttr('style');
         },
        // parserOptions: {xmlMode: true}
     }))
     // cheerio plugin create unnecessary string '&gt;', so replace it.
     .pipe(replace('&gt;', '>'))
     // build svg sprite
     .pipe(svgSprite({
        mode: {
            symbol: {
                sprite: "../images/sprite.svg",
                render: {
                    scss: {
                         dest:'../styles/base/svgsprite.scss',
                         template:"./app/styles/base/_svgsprite_template.scss"
                    }
                }
            }
        }
     }))
     .pipe(gulp.dest('./app'));
});
