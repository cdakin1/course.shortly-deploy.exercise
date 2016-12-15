
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['public/client/**/*.js'],
        dest: 'public/dist/build.js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    uglify: {
      target: {
        files: {
          'public/dist/build.min.js': ['public/client/**/*.js']
        }
      }
    },

    eslint: {
      target: [
        'public/**/*.js',
        'app/**/*.js',
        'lib/**/*.js',
        'test/**/*.js',
        './*.js'
      ]
    },

    cssmin: {
      dist: {
        files: {
          'public/dist/build': 'public/style.css'
        }
      }
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
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');


  // 'reg test for build';
  // 'test';
  // 'upload';
  // 'deploy';
  grunt.registerTask('server-dev', function (target) {
    grunt.task.run([ 'nodemon', 'watch' ]);
  });
  grunt.registerTask('test', function (target) {
    grunt.task.run([ 'mochaTest' ]);
  });
  grunt.registerTask('deploy', function (target) {
    grunt.task.run([ '', 'watch' ]);
  });
  grunt.registerTask('upload', function (target) {
    grunt.task.run([ '' ]);
  });
  grunt.registerTask('build', function (target) {
    grunt.task.run([ '' ]);
  });
};
