const
	gulp = require("gulp"),
	del = require("del"),
	webp = require("gulp-webp"),
	minify = require("gulp-csso"),
	sass = require("gulp-sass"),
	run = require("run-sequence"),
	rename = require("gulp-rename"),
	plumber = require("gulp-plumber"),
	postcss = require("gulp-postcss"),
	csscomb = require("gulp-csscomb"),
	autoprefixer = require("autoprefixer"),
	posthtml = require("gulp-posthtml"),
	imagemin = require("gulp-imagemin"),
	resizer = require("gulp-images-resizer"),
	imgRetina = require("gulp-img-retina"),
	svgstore = require("gulp-svgstore"),
	include = require("posthtml-include"),
	server = require("browser-sync").create();

const retinaOpts = {
	suffix: { 2: '@2x', 3: '@3x' }
};

gulp.task("style", function() {
	gulp.src("src/sass/style.scss")
		.pipe(plumber())
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(csscomb())
		.pipe(gulp.dest("build/css"))
		.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("build/css"))
		.pipe(server.stream());
});

gulp.task("sprite", function() {
	return gulp.src("src/img/svg/icon-*.svg")
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest("build/img"));
});

gulp.task("html", function() {
	return gulp.src("src/*.html")
		.pipe(posthtml([
			include()
		]))
		.pipe(imgRetina(retinaOpts))
		.pipe(gulp.dest("build"));
});

gulp.task("images", function() {
	return gulp.src("src/img/**/*.{png,jpg,svg}")
		.pipe(imagemin([imagemin.optipng({ optimizationLevel: 3 }),
			imagemin.jpegtran({ progressive: true }),
			imagemin.svgo()
		]))
		.pipe(gulp.dest("src/img"))
});

gulp.task("retina@2x", function() {
	return gulp.src("src/img/**/*.{png,jpg,jpeg}")
		.pipe(gulp.dest("build/img"))
		.pipe(resizer({
			width: "200%"
		}))
		.pipe(rename({ suffix: "@2x"}))
		.pipe(gulp.dest("build/img"))
});

gulp.task("retina@3x", function() {
	return gulp.src("src/img/**/*.{png,jpg,jpeg}")
		.pipe(gulp.dest("build/img"))
		.pipe(resizer({
			width: "300%"
		}))
		.pipe(rename({ suffix: "@3x"}))
		.pipe(gulp.dest("build/img"))
});

gulp.task("retina", function(done) {
	run (
		"retina@2x",
		"retina@3x",
		done
	)
});

gulp.task("webp", function() {
	return gulp.src("build/img/**/*.{png,jpg}")
		.pipe(webp({ quality: 90 }))
		.pipe(gulp.dest("build/img"))
});

gulp.task("clean", function() {
	return del("build");
});

gulp.task("copy", function() {
	return gulp.src([
			"src/fonts/**/*.{woff,woff2}",
			"src/img/**",
			"src/js/**"
		], {
			base: "src"
		})
		.pipe(gulp.dest("build"));
});

gulp.task("imageFullCycle", function(done) {
	run (
		"sprite",
		"retina",
		"webp",
		"images",
		done
	)
});

gulp.task("build", function(done) {
	run(
		"clean",
		"copy",
		"style",
		"imageFullCycle",
		"html",
		done
	);
});

gulp.task("serve", function() {
	server.init({
		server: "build/"
	});

	gulp.watch("src/sass/**/*.scss", ["style"]);
	gulp.watch("src/*.html", ["html"]);
	gulp.watch("src/js/*.js").on("change", server.reload);
});
