/***************************************************\
|              Required all plugins                 |
\***************************************************/
const
	del          = require("del"),
	gulp         = require("gulp"),
	webp         = require("gulp-webp"),
	minify       = require("gulp-csso"),
	sass         = require("gulp-sass"),
	uglify       = require('gulp-uglify'),
	rename       = require("gulp-rename"),
	run          = require("run-sequence"),
	plumber      = require("gulp-plumber"),
	htmlmin      = require('gulp-htmlmin'),
	csscomb      = require("gulp-csscomb"),
	posthtml     = require("gulp-posthtml"),
	svgstore     = require("gulp-svgstore"),
	imagemin     = require("gulp-imagemin"),
	ttf2woff     = require("gulp-ttf2woff"),
	ttf2woff2    = require('gulp-ttf2woff2'),
	include      = require("posthtml-include"),
	autoprefixer = require("gulp-autoprefixer"),
	resizer      = require("gulp-images-resizer"),
	server       = require("browser-sync").create();

/***************************************************\
|                 Gulp settings                     |
\***************************************************/
const retinaOpts = {};

/***************************************************\
|                    Gulp style                     |
\***************************************************/
gulp.task("style", function() {
	gulp.src("src/sass/style.scss")
		.pipe(plumber())
		.pipe(sass().on('error', function (err) {
      console.log('\x1b[31m%s\x1b[0m', "'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
      console.log('\x1b[31m%s\x1b[0m', "''' " + err.toString() + " '''");
      console.log('\x1b[31m%s\x1b[0m', "'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
      gulp.start('style');
    }))
		.pipe(autoprefixer({
		  browsers: ['last 2 versions'],
		  cascade: false
		}))
		.pipe(csscomb())
		.pipe(gulp.dest("build/css"))
		.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

/***************************************************\
|                   Gulp script                     |
\***************************************************/
gulp.task("script", function() {
	gulp.src("src/js/script.js")
		.pipe(gulp.dest("build/js"))
		.pipe(server.stream());
});

/***************************************************\
|                    Gulp fonts                     |
\***************************************************/
gulp.task("fonts", function() {
	gulp.src(["src/fonts/ttf/*.ttf"])
		.pipe(ttf2woff2())
		.pipe(gulp.dest("src/fonts/woff2/"))
		.pipe(ttf2woff())
		.pipe(gulp.dest("src/fonts/woff/"));
});

/***************************************************\
|                    Gulp html                      |
\***************************************************/
gulp.task("html", function() {
	return gulp.src("src/*.html")
		.pipe(posthtml([
			include()
		]))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest("build"))
		.pipe(server.stream());;
});

/***************************************************\
|                    Gulp sprite                     |
\***************************************************/
gulp.task("sprite", function() {
	return gulp.src("src/img/**/icon-*.svg")
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest("build/img"));
});

/***************************************************\
|               Gulp retina @2x                     |
\***************************************************/
gulp.task("retina@2x", function() {
	return gulp.src("src/img/**/*.{png,jpg,jpeg}")
		.pipe(gulp.dest("build/img"))
		.pipe(resizer({
			width: "200%"
		}))
		.pipe(rename({ suffix: "@2x" }))
		.pipe(gulp.dest("build/img"))
});

/***************************************************\
|               Gulp retina @3x                     |
\***************************************************/
// gulp.task("retina@3x", function() {
// 	return gulp.src("src/img/**/*.{png,jpg,jpeg}")
// 		.pipe(gulp.dest("build/img"))
// 		.pipe(resizer({
// 			width: "300%"
// 		}))
// 		.pipe(rename({ suffix: "@3x" }))
// 		.pipe(gulp.dest("build/img"))
// });

/***************************************************\
|               Gulp retina FULL                    |
\***************************************************/
gulp.task("retina", function(done) {
	run(
		"retina@2x",
		// "retina@3x",
		done
	)
});

/***************************************************\
|               Gulp convert .webp                  |
\***************************************************/
gulp.task("webp", function() {
	return gulp.src(["!build/img/background/*.{png,jpg,jpeg}", "build/img/**/*.{png,jpg,jpeg}"])
		.pipe(webp({ quality: 90 }))
		.pipe(gulp.dest("build/img"))
});

/***************************************************\
|              Gulp minify img                      |
\***************************************************/
gulp.task("images", function() {
	return gulp.src("build/img/**/*.{png,jpg,jpeg,svg}")
		.pipe(imagemin([imagemin.optipng({ optimizationLevel: 3 }),
			imagemin.jpegtran({ progressive: true }),
			imagemin.svgo()
		]))
		.pipe(gulp.dest("build/img"))
});

/***************************************************\
|           Gulp imageFullCycle                     |
\***************************************************/
gulp.task("imageFullCycle", function(done) {
	run(
		"retina",
		"webp",
		"images",
		"sprite",
		done
	)
});

/***************************************************\
|           Gulp copy all to build                  |
\***************************************************/
gulp.task("copy", function() {
	return gulp.src([
			"src/fonts/**/*.{woff,woff2}",
			"src/img/**",
		], {
			base: "src"
		})
		.pipe(gulp.dest("build"));
});


/***************************************************\
|                 Gulp clean build                  |
\***************************************************/
gulp.task("clean", function() {
	return del("build");
});

/***************************************************\
|                 Gulp del images                   |
\***************************************************/
gulp.task("delImg", function () {
	return del("build/img");
});

/***************************************************\
|                 Gulp copy images                   |
\***************************************************/
gulp.task("copyImg", function () {
	return gulp.src([
			"src/img/**"
		], {
			base: "src"
		})
		.pipe(gulp.dest("build"));
});

/***************************************************\
|                 Gulp copy images                   |
\***************************************************/
gulp.task("newImg", function (done) {
	run(
		"delImg",
		"copyImg",
		"sprite",
		"webp",
		done
	);
	console.log('\x1b[31m%s\x1b[0m', "'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
	console.log('\x1b[31m%s\x1b[0m', "''' YOU NEED RESTART GULP FOR RETINA AND OPTIMIZED IMAGES '''");
	console.log('\x1b[31m%s\x1b[0m', "'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
});

/***************************************************\
|                    Gulp BUILD                     |
\***************************************************/
gulp.task("build", function(done) {
	run(
		"clean",
		"copy",
		"style",
		"script",
		"imageFullCycle",
		"html",
		done
	);
});

/***************************************************\
|                    Gulp SERVER                     |
\***************************************************/
gulp.task("serve", function() {
	server.init({
		server: "build/"
	});

	gulp.watch("src/sass/**/*.scss", ["style"]);
	gulp.watch("src/*.html", ["html"]);
	gulp.watch("src/js/**/*.js", ["script"]);
	gulp.watch("src/img/**", ["newImg"]);});
