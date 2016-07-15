/**
 *  webapp
 *  (c) v <v>
 */

var config = require('./.taskconfig');
var svgSprite = require("gulp-svg-sprites");
var filter    = require('gulp-filter');
var svg2png   = require('gulp-svg2png');

gulp.task('svgsprites', function () {
    return gulp.src('./app/images/icons/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest("./app/images/")) // Write the sprite-sheet + CSS + Preview
        .pipe(filter("**/*.svg"))  // Filter out everything except the SVG file
        .pipe(svg2png())           // Create a PNG
        .pipe(gulp.dest("./app/images/"));
});
