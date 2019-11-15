const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('minifyJS', () => {
    gulp.src('src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'))
})


gulp.task('minifyCSS', () => {
    return gulp.src('src/styles/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('build/styles'));
  });

gulp.task('watch', () => {
    gulp.watch('src/styles/*.css', gulp.series('minifyCSS'));
    gulp.watch('src/scripts/*.js', gulp.series('minifyJS'));
})

