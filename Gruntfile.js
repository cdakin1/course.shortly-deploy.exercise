module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['public/client/**/*.js'],
        dest: 'public/dist.js'
      },
      mochaTest: {
        test: {
          options: {
            reporter: 'spec'
          },
          sr: ['test/**/*.js']
        }
      },
      nodemon: {
        dev: {
          script: 'server.js'
        }
      },
      uglify: {
        my_target: {
          files: {
            'public/client/**/*.js': 'public/dist.js'
          }
        }
      },
      eslint: {
        target: [
          'public/client/**/*.js'
        ]
      },
      cssmin: {
      },
      watch: {
        scripts: {
          files: [
            'public/client/**/*.js',
            'public/lib/**/*.js',
          ],
          tasks: [
            'concat',
            'uglify'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['nodemon']);

};

