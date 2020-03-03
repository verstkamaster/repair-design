const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('hello', function(done) {
   console.log('Привет мир!');
   done();
});

// Static server
gulp.task('server', function() {
   browserSync.init({
       server: {
           baseDir: "./"
       }
   });
});
gulp.watch("./*.html").on('change', browserSync.reload);
//  Minify CSS
gulp.task('mincss', function () {
   return gulp.src('./*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
});

// gulp.watch("./*.css");
