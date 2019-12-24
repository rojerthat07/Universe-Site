const gulp = require('gulp');
const uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('scripts', function() {
  return gulp.src('src/scripts/app.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/scripts'));
});


gulp.task('compress', () => {
          return gulp.src('src/scripts/particles.js')
          .pipe(uglify())
          .pipe(gulp.dest('build/scripts'));
  });




  