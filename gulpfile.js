var gulp = require("gulp");
var sass = require("gulp-sass"); //编译scss
var auto = require("gulp-autoprefixer"); //自动添加前缀
var clean = require("gulp-clean-css") //压缩css
var server = require("gulp-webserver") //拦截

gulp.task("devScss", function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(auto({
            browsers: ['last 2 versions'],
        }))
        .pipe(gulp.dest('./src/css'))
})

gulp.task("watch", function() {
    return gulp.src("./src/scss/*.scss", serise("devScss"))
})