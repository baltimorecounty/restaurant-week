const babel = require('gulp-babel');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const coveralls = require('gulp-coveralls');
const cssnano = require('gulp-cssnano');
const fs = require('fs');
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const path = require('path');
const rename = require('gulp-rename');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const stripCode = require('gulp-strip-code');
const stylish = require('jshint-stylish');
const uglify = require('gulp-uglify');
const util = require('gulp-util');

const DIST_FOLDER = 'public/dist';

gulp.task('clean', () => gulp.src(`${DIST_FOLDER}`).pipe(clean()));

gulp.task('process-scss', () =>
	gulp
		.src(['stylesheets/restaurant-week.scss'])
		.pipe(sass())
		.pipe(cssnano({ autoprefixer: false, zindex: false }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(`${DIST_FOLDER}/css`)));

gulp.task(
	'minify-js',
	[
		'process-master-js',
		'process-homepage-js',
		'process-app-js',
		'move-page-specific-js',
	],
	() =>
		gulp
			.src([`${DIST_FOLDER}/js/**/*.js`])
			.pipe(uglify())
			.on('error', (err) => {
				util.log(util.colors.red('[Error]'), err.toString());
			})
			.pipe(rename({ suffix: '.min' }))
			.pipe(gulp.dest(`${DIST_FOLDER}/js`)),
);

gulp.task('process-app-js', () => {
	const srcFiles = [
		'js/app/*.js',
		'js/app/**/*.constants.js',
		'js/app/**/*.model.js',
		'js/app/**/*.provider.js',
		'js/app/**/*.service.js',
		'js/app/**/*.filter.js',
		'js/app/**/*.directive.js',
		'js/app/**/*.controller.js',
	];

	gulp.src(srcFiles)
		.pipe(babel({
			presets: ['es2015'],
		}))
		.pipe(stripCode({
			start_comment: 'test-code',
			end_comment: 'end-test-code',
		}))
		.pipe(concat('restaurant-week.app.js'))
		.pipe(gulp.dest(`${DIST_FOLDER}/js`));
});

gulp.task('move-app-directive-templates', () => {
	const appRootFolder = 'js/app';
	const appFolders = fs.readdirSync(appRootFolder)
		.filter(file => fs.statSync(path.join(appRootFolder, file)).isDirectory());
	appFolders.forEach((folder) => {
		gulp.src(`js/app/${folder}/*.template.html`)
			.pipe(gulp.dest(`${DIST_FOLDER}/templates/${folder}`));
	});
});

gulp.task('process-master-js', () =>
	gulp
		.src(['tests/lib/bc-utils.min.js', 'js/*.js', '!js/app/*', '!js/home-page.js'])
		.pipe(babel({
			presets: ['es2015'],
		}))
		.pipe(stripCode({
			start_comment: 'test-code',
			end_comment: 'end-test-code',
		}))
		.pipe(concat('restaurant-week.js'))
		.pipe(gulp.dest(`${DIST_FOLDER}/js`)));

gulp.task('process-homepage-js', () =>
	gulp
		.src(['js/home-page.js'])
		.pipe(jshint.reporter(stylish))
		.pipe(babel({
			presets: ['es2015'],
		}))
		.pipe(stripCode({
			start_comment: 'test-code',
			end_comment: 'end-test-code',
		}))
		.pipe(concat('restaurant-week.homepage.js'))
		.pipe(gulp.dest(`${DIST_FOLDER}/js`)));

gulp.task('move-page-specific-js', () =>
	gulp
		.src('js/page-specific/**/*.js')
		.pipe(jshint({
			esversion: 6,
		}))
		.pipe(jshint.reporter(stylish))
		.pipe(babel({
			presets: ['es2015'],
		}))
		.pipe(gulp.dest(`${DIST_FOLDER}/js/page-specific`)));

gulp.task('move-vendor-js', () => {
	gulp.src('js/vendor/**/*.js').pipe(gulp.dest(`${DIST_FOLDER}/js`));
});

gulp.task('move-images', () =>
	gulp.src('images/**/*').pipe(gulp.dest(`${DIST_FOLDER}/images`)));

gulp.task('move-fonts', () =>
	gulp.src('fonts/**.*').pipe(gulp.dest(`${DIST_FOLDER}/fonts`)));

gulp.task('move-html', () =>
	gulp.src('mockups/html/*.html').pipe(gulp.dest(`${DIST_FOLDER}`)));

gulp.task('code-coverage', () =>
	gulp.src('tests/coverage/**/lcov.info').pipe(coveralls()));

gulp.task('rewrite', () => {
	gulp
		.src('rewrite.config')
		.pipe(rename('web.config'))
		.pipe(gulp.dest(`${DIST_FOLDER}`));
});

gulp.task('move-data', () => {
	gulp.src('data/**/*').pipe(gulp.dest(`${DIST_FOLDER}/data`));
});

gulp.task('default', ['clean'], callback =>
	runSequence(
		[
			'move-html',
			'process-scss',
			'minify-js',
			'move-app-directive-templates',
			'move-vendor-js',
			'move-images',
			'move-fonts',
			'rewrite',
			'move-data',
		],
		'code-coverage',
		callback,
	));

gulp.task('watcher', () => {
	gulp.watch('**/*.html', ['default']);
	gulp.watch('**/*.scss', ['default']);
	gulp.watch('js/*.js', ['default']);
	gulp.watch('js/page-specific/*.js', ['default']);
	gulp.watch('js/utility/*.js', ['default']);
});
