var gulp = require('gulp');
var webserver = require('gulp-webserver');
var less = require('gulp-less');
//css
var concat = require("gulp-concat");
var minifycss = require('gulp-minify-css');
gulp.task('css', function() {
    return gulp.src(['./css/**/*.css'])
        .pipe(less())
        .pipe(concat("all.css"))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
});
//js
var Uglify = require('gulp-uglify');
gulp.task('js', function() {
    gulp.src(['./js/*'])
        .pipe(Uglify())
        .pipe(concat("all.js"))
        .pipe(gulp.dest('dist/js'))
});
//html
var Html = require('gulp-minify-html');
gulp.task('html', function() {
    gulp.src(['./shujuxuanran/index.html'])
        .pipe(Html())
        .pipe(gulp.dest('dist'))
});
gulp.task('server', function() {
    gulp.src('.').pipe(webserver({
        host: 'localhost',
        port: 9898
    }))
})
gulp.task('default', ['css', 'js', 'html', 'server'])