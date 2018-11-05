var gulp = require("gulp");
var sass = require("gulp-sass"); //编译scss
var auto = require("gulp-autoprefixer"); //自动添加前缀
var clean = require("gulp-clean-css"); //压缩css
var server = require("gulp-webserver"); //拦截

var path = require("path");
var url = require("url");
var fs = require("fs")

// gulp.task("devScss", function() {
//     return gulp.src("./src/scss/*.scss")
//         .pipe(sass())
//         .pipe(auto({
//             browsers: ['last 2 versions'],
//         }))
//         .pipe(gulp.dest('./src/css'))
// });

// gulp.task("watch", function() {
//     return gulp.src("./src/scss/*.scss", serise("devScss"))
// });

gulp.task("devServer", function() {
    return gulp.src('./src')
        .pipe(server({
            livereload: true,
            open: true,
            middleware: (function(req, res, next) {
                pathname = url.parse(req.url).pathname;
                pathname = pathname === "index.html" ? pathname : pathname;
                res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))
            })
        }));
});