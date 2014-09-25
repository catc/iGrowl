var debug = require('debug')('iGrowl');
var app = require('./app');

app.set('port', process.env.PORT || 3000);


// gulp modules
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	// autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'), 
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jade = require('gulp-jade')




var cssDef = __dirname + '/public/stylesheets' 
var css = {
	// initial path
	init : cssDef + '/scss/*.scss',
	// output destination
	dir : cssDef,
	// to watch for livereload
	fin : cssDef + '/*.css',
	// reload watching
	watch : cssDef + '/**/*.scss'
}
// scss task
gulp.task('css', function(){
	return gulp.src( css.init )
		.pipe( sass({
			outputStyle: 'nested'
		}) )
		// .pipe( autoprefixer('last 2 version') )
		.pipe( gulp.dest( css.dir ) )
		
		// minify
/*		.pipe( rename({ suffix: '.min' }) )
		.pipe( minifycss() )
		.pipe( gulp.dest( css.dir ) )*/
})
 
 
// livereload
var tinylr;
gulp.task('livereload', function(){
	tinylr = require('tiny-lr')();
	tinylr.listen(35729)
})
 
function notifyLiveReload(event){
	var fileName = require('path').relative(__dirname, event.path);
	
	tinylr.changed({
		body: {
			files: [fileName]
		}
	})
}
 
// scripts task
var scripts = __dirname + '/public/javascripts' 
gulp.task('scripts', function(){
	return gulp.src( scripts + '/*.js' )
		.pipe( concat('main.js') )
		.pipe( gulp.dest( scripts + '/final/' ) )
 
		// minify
		/*.pipe(rename({ suffix: '.min' }) )
		.pipe( uglify() )
		.pipe( gulp.dest( scripts + '/final/' ) )*/
})
 
// watch (scss for compile, css for livereload)
gulp.task('watch', function(){
	gulp.watch( css.watch, ['css'] )
	gulp.watch( css.fin, notifyLiveReload )
})
 
// start express
gulp.task('express', function(){
	var server = app.listen(app.get('port'), function() {
		debug('Express server listening on port ' + server.address().port);
	});
})
 
 
// -------------- GULP DEFAULT --------------
gulp.task('default', ['css', 'express', 'livereload', 'watch'], function(){
	console.log('gulp successfully started!')
})






// -------------- DISTRIBUTION --------------
var cssDist = {
	init : '.public/stylesheets/scss/igrowl.scss',
	fin : './dist/css/'
}
// igrowl scss
gulp.task('scss-dist', function(){
	return gulp.src( cssDef + '/scss/igrowl.scss' )
		.pipe( sass({
			outputStyle: 'expanded'
		}) )
		.pipe( gulp.dest( cssDist.fin ) )
		
		// minify
		.pipe( rename({ suffix: '.min' }) )
		.pipe( minifycss() )
		.pipe( gulp.dest( cssDist.fin ) )
})

// icon css
gulp.task('icon-css-dist', function(){
	return gulp.src( cssDef + '/icomoon/*.css' )
		.pipe( gulp.dest( cssDist.fin + '/fonts' ) )
})


// scripts
var jsDist = {
	init : './public/javascripts/igrowl.js',
	fin : './dist/js/'
}
gulp.task('js-dist', function(){
	return gulp.src( jsDist.init )
		.pipe( gulp.dest( jsDist.fin ) )
 
		// minify
		.pipe(rename({ suffix: '.min' }) )
		.pipe( uglify({
			preserveComments : 'some'
		}) )
		.pipe( gulp.dest( jsDist.fin ) )
})


// fonts
var fontDist = {
	init : ['./public/fonts/*/*', '!./public/fonts/interface/**'],
	fin : './dist/fonts/'
}
gulp.task('font-dist', function(){
	return gulp.src( fontDist.init )
		.pipe( gulp.dest( fontDist.fin ) )
})


gulp.task('dist', ['scss-dist', 'icon-css-dist', 'js-dist', 'font-dist'], function(){
	console.log( 'done preparing dist' )
})



// -------------- GITHUB PAGE --------------

// jade
var jadeDist = {
	init : './views/index.jade', 
	fin : './public/githubpage/'
}
gulp.task('jade-ghp', function(){
	return gulp.src( jadeDist.init )
		.pipe( jade() )
		.pipe( gulp.dest( jadeDist.fin ) )
})

// concat scripts
gulp.task('js-ghp', function(){
	return gulp.src( [
		'./public/javascripts/jquery.js',
		'./public/javascripts/*.js', 
		] )
		.pipe( concat('all.js') )
		// .pipe( gulp.dest( scripts + '/final/' ) )
 
		// minify
		.pipe(rename({ suffix: '.min' }) )
		.pipe( uglify() )
		.pipe( gulp.dest( './public/githubpage/' ) )
})

// concat main css
gulp.task('css-ghp1', function(){
	return gulp.src([ 
			'./public/stylesheets/*.css',
		])
		.pipe( concat('all.css') )
		
		// minify
		.pipe(rename({ suffix: '.min' }) )
		.pipe( minifycss() )
		.pipe( gulp.dest( './public/githubpage/' ) )
})
// concat icomoon css
gulp.task('css-ghp2', function(){
	return gulp.src([ 
			'./public/stylesheets/icomoon/*.css',
		])
		.pipe( concat('icon.css') )
		
		// minify
		.pipe(rename({ suffix: '.min' }) )
		.pipe( minifycss() )
		.pipe( gulp.dest( './public/githubpage/' ) )
})

gulp.task('css-ghp', ['css', 'css-ghp1', 'css-ghp2'] )
