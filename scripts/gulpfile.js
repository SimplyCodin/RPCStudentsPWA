var gulp = require('gulp');
var flatten = require('gulp-flatten');
var svgstore = require('gulp-svgstore');
var path = require('path')
var rename = require('gulp-rename')

gulp.task('pull', [], function () {
    gulp.src("node_modules/material-design-icons/**/svg/design/*_24px.svg")
        .pipe(rename(path => {
            var string = path.basename;
            string = string.replace("ic_", "");
            string = string.replace("_24px", "");
            console.log(string);
            path.basename = string
        }))
        .pipe(flatten())
        .pipe(gulp.dest('icons'));
});

gulp.task('pkg', function () {
    return gulp
        .src('icons/*.svg')
        .pipe(svgstore())
        .pipe(gulp.dest('icons/out'));
});