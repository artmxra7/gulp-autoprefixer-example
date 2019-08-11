const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require ('browser-sync').create();
const autoprefixer = require ('gulp-autoprefixer');

gulp.task("sass", function(){
  return gulp.src("./sass/**/*.scss")
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest("./assets/css"))
})

gulp.task("serve", function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
  gulp.watch("./sass/**/*.scss", gulp.series ('sass'));
  gulp.watch("./assets/css/**/*.css").on("change", browserSync.reload);
  gulp.watch("./*.html").on("change", browserSync.reload);
})