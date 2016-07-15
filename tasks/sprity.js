/**
 *  webapp
 *  (c) v <v>
 */

var config = require('./.taskconfig');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprity = require('sprity');

// generate sprite.png and _sprite.scss
gulp.task('sprites', function () {
  return sprity.src({
    src: './app/images/icons/**/*.{png,jpg}',
    style: './img-sprite.scss',
    // ... other optional options
    // for example if you want to generate scss instead of css
    processor: 'css', // make sure you have installed sprity-sass
  })
  .pipe(gulpif('*.png', gulp.dest('./app/images/'), gulp.dest('./app/styles/base/')))
});
