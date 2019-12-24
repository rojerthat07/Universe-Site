const gulp = require('gulp');
const uglify = require('gulp-uglify');
var concat = require('gulp-concat');
const terser = require('gulp-terser');

gulp.task('scripts', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/scripts'));
});


gulp.task('compress', () => {
          return gulp.src('build/scripts/all.js')
          .pipe(uglify())
          .pipe(gulp.dest('build/scripts'));
  });



function es(){
    return gulp.src('build/scripts/all.js')
      .pipe(terser())
      .pipe(gulp.dest('build/scripts'));
  }
   
  exports.default = es;

  