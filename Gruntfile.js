module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/igrowl.js',
        dest: 'dist/js/igrowl.min.js'
      }
    },
    sass: {
      dist: {
        files: [{
          'dist/css/igrowl.css' : 'scss/igrowl.scss'
        }]
      }
    },
    cssmin: {
      dist: {
        files: [
          {
            expand: true,
            src: ['dist/css/*.css', 'dist/css/!*.min.css'],
            dest: '.',
            ext: '.min.css'
          },
          {
            expand: true,
            src: ['css/font/*.css'],
            dest: 'dist',
            ext: '.min.css'
          }
        ]
      }
    },
    copy: {
      dist: {
        src: ['js/*', 'fonts/**'],
        dest: 'dist/',
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'copy']);
};
