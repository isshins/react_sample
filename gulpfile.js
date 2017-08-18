'use strict';

/**************************************************
 * modules load
 *************************************************/
const gulp       = require( 'gulp' );
const watch      = require( 'gulp-watch' );
const sass       = require( 'gulp-sass' );
const browserify = require( 'browserify' );
const watchify   = require( 'watchify' );
const uglify     = require( 'gulp-uglify' );
const source     = require( 'vinyl-source-stream' );
const buffer     = require( 'vinyl-buffer' );
const babelify   = require( 'babelify' );
const webserver  = require( 'gulp-webserver' );

/**************************************************
 * path
 *************************************************/
const cssSrcPath        = './src/sass';
const cssDestPath       = './dist/css';
const jsSrcPath         = './src/js';
const jsDestPath        = './dist/js';
const scssPath          = './src/sass';
const jsSrcFile         = '/app.js';

/**************************************************
 * tasks
 *************************************************/
/**
 * sass
 */
gulp.task( 'sass', function() {
    return gulp.src( cssSrcPath + '/**/*.scss' )
        .pipe( sass( {
            outputStyle : 'compressed',
            includePaths: [
                cssSrcPath,
            ]
        } ) )
        .pipe( gulp.dest( cssDestPath ) );
} );


/**
 * browserify
 */
gulp.task( 'browserify', function() {
    return jscompile( false );
} );

/**
 * watchify
 */
gulp.task( 'watchify', function() {
    return jscompile( true );
} );

function jscompile( is_watch ) {
    let bundler;
    let props = {
      entries: jsSrcPath + jsSrcFile,
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: true
    };
    if ( is_watch ) {
        bundler = watchify( browserify( props ) );
    } else {
        bundler = browserify( props );
    }

    function rebundle() {
        return bundler
            .transform(babelify, {
              "presets": ["react", "stage-1", "es2015"],
              "plugins": [ "transform-class-properties" ]
            })
            .bundle()
            .pipe( source( 'app.js' ) )
            .pipe( buffer() )
            .pipe( uglify() )
            .pipe( gulp.dest( jsDestPath ) );
    }
    bundler.on( 'update', function() {
        rebundle();
    } );
    bundler.on( 'log', function( message ) {
        console.log( message );
    } );
    return rebundle();
}

/**
 * watch
 */
gulp.task( 'watch', ['sass', 'watchify'], function() {
    gulp.watch( scssPath + '/**/*.scss', ['sass'] );
} );

/**
 * dev-build
 */
gulp.task( 'hot-build', ['sass', 'browserify', 'watchify']);

gulp.task( 'build', ['sass', 'browserify']);
