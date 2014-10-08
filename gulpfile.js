var debug = require('debug')('iGrowl');
var app = require('./app');

app.set('port', process.env.PORT || 3000);


// gulp modules
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'), 
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jade = require('gulp-jade'),
	livereload = require('gulp-livereload');


var css = __dirname + '/public/stylesheets',
	js = __dirname + '/public/javascripts',
	fonts = __dirname + '/public/fonts',
	images = __dirname + '/public/images';



// -------------- development --------------
var dev = {
	scssInit  : css + '/scss/*.scss', 		// initial scss processing
	cssDest   : css, 						// css destination
	scssWatch : css + '/**/*.scss', 		// scss watch
	cssReload : css + '/*.css', 			// live-reload watch
};

// compile 
gulp.task('scss', function(){
	gulp.src( dev.scssInit )
		.pipe( sass({errLogToConsole: true}) )
		.pipe( gulp.dest( dev.cssDest ) );
});
   
// watch (scss for compile, css for livereload)
gulp.task('watch', function(){
	// watch scss
	gulp.watch( dev.scssWatch, ['scss'] );

	// watch css
	livereload.listen();
	gulp.watch( dev.cssReload ).on('change', livereload.changed);
});
 
// start express
gulp.task('express', function(){
	var server = app.listen(app.get('port'), function() {
		debug('Express server listening on port ' + server.address().port);
	});
});
 
 
gulp.task('dev', ['scss', 'express', 'watch'], function(){
	console.log('gulp successfully started!');
});



// -------------- dist --------------
var dist = {
	dest : __dirname + '/dist/',

	cssInit : css + '/igrowl.css',
	get cssDest (){ return this.dest + '/css'; },

	jsInit : js + '/igrowl.js',
	get jsDest (){ return this.dest + '/js'; },

	fontInit : fonts,
	get fontDest (){ return this.dest + '/fonts'; }
};

// igrowl.css + icon font css
gulp.task('dist-css', function(){
	// igrowl.css
	gulp.src( dist.cssInit )
		.pipe( gulp.dest( dist.cssDest ) )
		.pipe( rename({ suffix: '.min' }) )
		.pipe( minifycss() )
		.pipe( gulp.dest( dist.cssDest ) );

	// icon font css
	gulp.src( css + '/icomoon/*.css' )
		.pipe( gulp.dest( dist.cssDest + '/fonts/' ) );
});

// scripts
gulp.task('dist-scripts', function(){
	gulp.src( dist.jsInit )
		.pipe( gulp.dest( dist.jsDest ) )
		.pipe( rename({ suffix: '.min' }) )
		.pipe( uglify({ preserveComments : 'some' }) )
		.pipe( gulp.dest( dist.jsDest) );
});

// fonts
gulp.task('dist-fonts', function(){
	gulp.src( [ dist.fontInit + '/*/*', '!' + dist.fontInit+ '/interface/**'] )
		.pipe( gulp.dest( dist.fontDest ) );
});


gulp.task('dist', ['scss', 'dist-css', 'dist-scripts', 'dist-fonts'], function(){
	console.log( 'successfully set up dist' );
});




// -------------- github page --------------
var gh = {
	dest : __dirname + '/gh-pages/',

	jadeInit : 'views/index.jade',

	get cssDest (){ return this.dest + '/stylesheets/'; },
	get jsDest (){ return this.dest + '/javascripts/'; },
	get fontDest (){ return this.dest + '/fonts/'; },
	get imageDest (){ return this.dest + '/images/'; },
};

// jade to index.html
gulp.task('gh-jade', function(){
	gulp.src( gh.jadeInit )
		.pipe( jade() )
		.pipe( gulp.dest( gh.dest ) );
});

// main css files + icon font css
gulp.task('gh-css', function(){
	// main css files
	gulp.src( css + '/*.css' )
		.pipe( concat('style.css') )
		.pipe( minifycss() )
		.pipe( gulp.dest( gh.cssDest ) );

	// icomoon css fonts
	gulp.src( css +  '/icomoon/*.css' )
		.pipe( concat('icons.css') )
		.pipe( minifycss() )
		.pipe( gulp.dest( gh.cssDest + '/icomoon/' ) );
});

// all scripts + animate.json
gulp.task('gh-scripts', function(){
	gulp.src([
			js + '/jquery.js',
			js + '/*.js'
		])
		.pipe( concat('main.js') )
		.pipe( uglify() )
		.pipe( gulp.dest( gh.jsDest ) );

	// for animate.json (list of animations)
	gulp.src( js + '/*.json' )
		.pipe( gulp.dest( gh.jsDest ) );
});

// fonts + images
gulp.task('gh-other', function(){
	gulp.src( fonts + '/*/*' )
		.pipe( gulp.dest( gh.fontDest ) );

	gulp.src( images + '/*' )
		.pipe( gulp.dest( gh.imageDest ) );
});


gulp.task('gh-page', ['gh-jade', 'scss', 'gh-css', 'gh-scripts', 'gh-other'], function(){
	console.log( 'successfully updated github page' );
});

