"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var util = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');

var config = {
	port: 9025,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './app/*.html',
		js: './app/**/*.js',
		sass: './src/sass/**/*.scss',
		css: './app/styles/',
		dist: './dist',
		mainJs: './app/main.js'
	}
}

//Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['app'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('app/index.html')
		.pipe(open({ 
			app: 'Google Chrome',
			uri: config.devBaseUrl + ':' + config.port + '/'
		}));
});

// Input file.
var debugFlag = true;
var bundler = browserify(config.mainJs, debugFlag);

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(babelify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('html', function() {
	log('html task starts');

	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());

	log('html task ends');
});

gulp.task('sass', function () {
	log('sass task starts');

  gulp.src([config.paths.sass])
	  .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix())
    .pipe(sourcemaps.write())
		.pipe(gulp.dest(config.paths.css))
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());

	log('sass task ends');
});

gulp.task('js', function() {
	log('js task starts');

	gulp.src(config.paths.js)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());

	log('js task starts');
});

gulp.task('watch', function() {
	gulp.watch(config.paths.sass, ['sass']);
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['sass', 'html', 'js', 'open', 'watch']);

///////////
function log(msg) {
	if (typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				util.log(util.colors.blue(msg[item]));
			}
		}
	}
	else {
		util.log(util.colors.blue(msg));
	}
}
