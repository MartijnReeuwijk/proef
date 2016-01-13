'use strict';

var gulp = require('gulp'),
    notify = require('gulp-notify'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    stylish = require('gulp-jscs-stylish'),
    scsslint = require('gulp-scss-lint'),
    tar = require('gulp-tar'),
    sources;

sources = [
    'gulpfile.js',
    'src/**/*.js',
    '!node_modules/**/*.js',
    '!src/**/*.min.js'
];

gulp.task('default', function() {
    return gulp.src(sources)
        .pipe(jshint())
        .pipe(jscs())
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
    return gulp.src(sources)
        .pipe(jscs())
        .pipe(stylish());
});

gulp.task('scss', function() {
    return gulp.src([
            'src/**/*.scss',
            '!src/sass/bourbon/**'
        ])
        .pipe(scsslint({
            'config': 'scss.yml',
            'maxBuffer': 1307200
        }));
});

gulp.task('lint', function() {
    return gulp.src(sources)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function() {
    return sass('src/sass/**/style.scss', {style: 'compressed'})
        .on('error', sass.logError)
        .pipe(gulp.dest('src/stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('compress', ['sass'], function() {
    gulp.src([
            'src/**/*',
            '!src/sass/',
            '!src/sass/**/*'
        ])
        .pipe(tar('archive.zip'))
        .pipe(gulp.dest('build'));
});
