/**
 * Created by daniiltserin on 04.12.2016.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
    return gulp.src("src/app.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});