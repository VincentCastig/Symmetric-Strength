const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', function () {
    console.log('Hello Gulp!')
});

gulp.task('imageMin', () =>
  gulp.src('public/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
  )
