var gulp = require('gulp'),
    htmlMin = require('gulp-htmlmin');

gulp.task('minify-html', function() {
  return gulp.src('*.html')
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify-html'], function () {
});