module.exports = function(grunt) {

    var javascript = [
        // Vendors
        'app_dev/libraries/vendors/jquery.min.js',
        'app_dev/libraries/vendors/hammer.js',
        'app_dev/libraries/vendors/handlebars.js',
        'app_dev/libraries/vendors/fastclick.js',
        // App
        'app_dev/libraries/app.js',
        // Classes
        'app_dev/libraries/classes/segues.js',
        'app_dev/libraries/classes/statusbar.js',
        // Animations
        'app_dev/libraries/animations/segues.js',
        'app_dev/libraries/animations/alerts.js'
    ];

    // On configure les taches
    grunt.initConfig({
        // On concatene les fichiers javascript
        concat: {
            dev: {
                src: javascript,
                dest: 'cordova/www/libraries/app.min.js'
            }
        },

        // On minifie le code javascript
        // On desactive le changement des noms de variable
        uglify: {
            options: {
                mangle: false
            },
            dev: {
                src: 'cordova/www/libraries/app.min.js',
                dest: 'cordova/www/libraries/app.min.js'
            }
        },

        // On minifie les images si il y en a
        imagemin: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'app_dev/resources/images',
                    src: '**/*.{png,gif,jpg}',
                    dest: 'cordova/www/resources/images'
                }]
            }
        },

        // On remplace les liens des javascript dans le code html
        'string-replace': {
            dev: {
                options: [
                    {
                        pattern: '',
                        replacement: '<script type="text/javascript" src="libraries/app.min.js"></script>'
                    }
                ],
                files: [{
                    src: 'cordova/www/index.html',
                    dest: 'cordova/www/index.html'
                }]
            }
        },

        // On minifie le code html
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            dist: {
                src: 'app_dev/index.html',
                dest: 'cordova/www/index.html'
            }
        },

        // On compile COMPASS
        compass: {
            dist: {
                options: {
                    sassDir: 'app_dev/resources/styles/',
                    cssDir: 'cordova/www/resources/styles/',
                    raw: 'preferred_syntax = :sass\n'
                }
            }
        },

        // On copie les fonts sur l'environement de distribution
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: "app_dev/resources/fonts",
                        src: ['**'],
                        dest: 'cordova/www/resources/fonts/'
                    },
                    {
                        expand: true,
                        cwd: "app_dev/templates",
                        src: ['**'],
                        dest: 'cordova/www/templates/'
                    },
                    {
                        expand: true,
                        cwd: "app_dev/resources/images",
                        src: ['**'],
                        dest: 'cordova/www/resources/images/'
                    },
                    {
                        expand: true,
                        cwd: "app_dev/libraries",
                        src: ['**'],
                        dest: 'cordova/www/libraries/'
                    },
                    {
                        expand: true,
                        cwd: "app_dev/",
                        src: "index.html",
                        dest: "cordova/www/"
                    },
                    {
                        expand: true,
                        src: "config.xml",
                        dest: "cordova/"
                    }
                ]
            }
        }

    });

    // On charge les modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // On enregistre les taches
    grunt.registerTask('dev', [
        'copy',
        'compass'
    ]);

    grunt.registerTask('dist', [
        'copy',
        'compass',
        //'concat',
        //'uglify',
        'htmlmin',
        'string-replace'
    ]);

};
