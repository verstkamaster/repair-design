const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync');
//подключаем cssmin
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
// подключаем gulp-sass
const sass = require('gulp-sass');
//autoprefixer
const autoprefixer = require('gulp-autoprefixer');

// Static server
function bs() {
   browserSync.init({
       server: {
           baseDir: "./"
       }
   });
   };

//  Minify CSS
// function mincss() {
//         .src('./css/*.css')
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(dest('./css'));
//         };

// используем GULP-SASS
// gulp.task('sass', function(done){
//      gulp.src('./sass/**/*.scss')
//      .pipe(sass().on('error', sass.logError)) 
//      // используем gulp-sass
//      .pipe(gulp.dest('./css'))
//      done();
// });
watch("./*.html").on('change', browserSync.reload);
watch('./sass/**/*.scss', serveSass);
watch("./*.js/*.js").on('change', browserSync.reload);
 // используем autoprefixer
function serveSass() { 
   return src('./sass/*.sass') 
       .pipe(sass()) 
      //  .pipe(autoprefixer())
       .pipe(dest('./css')) 
       .pipe(browserSync.stream());
      };
exports.serve = bs;      