/*global module:false*/
/*global require:false*/

/*Generated initially from grunt-init, heavily inspired by yo webapp*/

module.exports = function(grunt) {
  'use strict';

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Project settings
    config: {
      // Configurable paths
      app: 'app',
      dist: 'dist',
      dev: 'dev'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bower']
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['jscs:Gruntfile', 'restart']
      },
      coffee: {
        files: ['<%= config.dev %>/src/**/**.coffee'],
        tasks: ['coffee:compile', 'coffeelint']
      },
      stylus: {
        files: ['<%= config.dev %>/styles/**/**.styl'],
        tasks: ['stylus:compile']
      },
      jade: {
        files: ['<%= config.dev %>/*.jade'],
        tasks: ['jade:compile','processhtml:dev']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/{,*/}*.html',
          '<%= config.app %>/styles/**/**.css',
          '<%= config.app %>/src/**/**.js'
        ]
      }
    },

    jscs: {
      Gruntfile: {
        src: ['Gruntfile.js'],
        options: {
          config: '.jscsrc'
        }
      }
    },

    coffeelint: {
      files: ['<%=config.dev%>/src/**/**.coffee'],
      options: {
        configFile: 'coffeelint.json'
      }
    },

    coffee: {
      compile: {
        options: {
          sourceMap: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dev %>/src/',
          src: ['{,*/}*.coffee'],
          dest: '<%= config.app %>/src/',
          ext: '.js'
        }]
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          flatten: true,
          cwd: '<%=config.dev%>/',
          src: ['*.jade'],
          dest: '<%= config.app %>/',
          ext: '.html'
        }]
      }
    },

    stylus: {
      compile: {
        options: {
          sourceMap: true
        },
        files: [{
          expand: true,
          flatten: false,
          cwd: '<%= config.dev %>/styles/',
          src: ['{,*/}*.styl'],
          dest: '<%= config.app %>/styles/',
          ext: '.css'
        }]
      }
    },

    processhtml: {
      dev: {
        files: {
          '.tmp/index.html': ['<%= config.app %>/index.html']
        }
      },
      dist: {
        files: {
          '<%= config.dist %>/index.html': ['<%= config.app %>/index.html']
        }
      },
      options: {
        commentMarker: 'process'
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, uglify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: '<%= config.dist %>/index.html'
    },

    // Performs reqrite based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
      },
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/css/{,*/}*.css']
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '{,*/}*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    imagemin: { // Task
      static: { // Target
        options: { // Target options
          optimizationLevel: 3 //,
          //use: [mozjpeg()]
        },
        files: { // Dictionary of files
          'dist/img.png': 'src/img.png', // 'destination': 'source'
          'dist/img.jpg': 'src/img.jpg',
          'dist/img.gif': 'src/img.gif'
        }
      },
      dynamic: { // Another target
        files: [{
          expand: true, // Enable dynamic expansion
          cwd: '<%= config.dev %>/content/images/', // Src matches are relative to this path
          src: ['**/**.{png,jpg,gif}'], // Actual patterns to match
          dest: '<%= config.app %>/content/images/' // Destination path prefix
        }]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: grunt.option('port') || 1337,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= config.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= config.dist %>',
          livereload: false
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      all: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.app %>/*',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      app: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.app %>/*',
            '!<%= config.app %>/lib',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Automagically wire-up installed Bower components into your RequireJS config
    bower: {
      target: {
        rjsConfig: 'requireConfig.js'
      }
    },

    rev: {
      dist: {
        files: {
          src: [
            '<%= config.dist %>/src/{,*/}*.js',
            '<%= config.dist %>/css/{,*/}*.css',
            '<%= config.dist %>/css/fonts/{,*/}*.*',
            '<%= config.dist %>/*.{ico,png}'
          ]
        }
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            'content/{,*/}*.*',
            '.htaccess',
            'styles/fonts/{,*/}*.*',
            'lib/famous/**/**.css'
          ]
        }]
      },
      app: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.dev %>',
          dest: '<%= config.app %>',
          src: [
            'content/{,*/}*.*',
            '.htaccess',
            'styles/fonts/{,*/}*.*',
            'lib/famous/**/**.css'
          ]
        }]
      }
    },

    requirejs: {
      compile: {
        options: {
          optimize: 'uglify2',
          uglify2: {
            mangler: {
              toplevel: true
            }
          },
          baseUrl: '<%= config.app %>/src',
          mainConfigFile: '<%= config.app %>/src/requireConfig.js',
          name: 'almond',
          include: 'main',
          insertRequire: ['main'],
          out: '<%= config.dist %>/src/main.js',
          wrap: true
        }
      }
    }
  });

  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'initRequireConfig',
      'copyContent',
      'coffeelint',
      'coffee:compile',
      'stylus:compile',
      'jade:compile',
      'processhtml:dev',
      'imageCompress',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'initRequireConfig',
    'copyContent',
    'coffeelint',
    'coffee:compile',
    'stylus:compile',
    'jade:compile',
    'processhtml:dist',
    'imageCompress',
    'useminPrepare',
    'requirejs',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'rev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('imageCompress', [
    'newer:imagemin:dynamic'
  ]);

  grunt.registerTask('copyContent', [
    'newer:copy:app'
  ]);

  grunt.registerTask('initRequireConfig', function() {
    if (!grunt.file.exists('app/src/requireConfig.js')) {
      grunt.file.copy('requireConfig.js.orig', 'app/src/requireConfig.js');
    }
  });

  grunt.registerTask('restart', function() {
    grunt.task.run(['clean:app', 'serve']);
  });

};
