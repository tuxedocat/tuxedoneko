var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task("default", function () {
  gulp.src('sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('static/css/'));
});

gulp.task("watch", function () {
  gulp.watch('sass/style.scss', function() {
    gulp.src('sass/style.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(autoprefixer())
      .pipe(gulp.dest('static/css/'));
  });
});
