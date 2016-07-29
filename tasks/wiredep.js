/**
 *  webapp
 *  (c) v <v>
 */

var config = require('./.taskconfig');
var gulp = require('gulp');

var wiredep = require('wiredep').stream;

// inject bower components
gulp.task('bower', function() {

  gulp.src('app/templates/*.html')
    .pipe(wiredep({
      directory: 'bower_components',
      exclude: ['bootstrap-sass', 'jquery', 'modernizr'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app/templates/'));
});
