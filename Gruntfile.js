module.exports = function(grunt) {

    grunt.initConfig({

        copy : {
            dist :{
                flatten: false,
                expand:true,
                cwd: 'src/templates/',
                src: ['**'],
                dest: 'dist'
            }
        },
        concat :{
            dist:{
                src: ['src/**/*.js'],
                dest: 'dist/js/scripts.js'
            }/*,
            vendors:{
                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'],
                dest: 'dist/css/vendors.css'
            }*/
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/script.min.js': ['dist/js/scripts.js']
                }
            }
        },
        less: {
            development: {
                files: {
                    "dist/css/styles.css": "src/less/**.less"
                }
            },
            production: {
                options: {
                    yuicompress: true
                },
                files: {

                    "dist/css/styles.css": "src/less/**.less"

                }
            }
        },
        exec: {
            rsyncalex: {
                cmd: "rsync -v -rlt --password-file E:/utils/rsyncpass.txt --exclude-from E:/utils/excludes.txt . alex@dev.nadrox.com::workspace_alex/angularjs-facebook"
            },
            rsyncalexlaptop: {
                cmd: "rsync -v -rlt --password-file C:/utils/rsyncpass.txt --exclude-from C:/utils/excludes.txt . alex@dev.nadrox.com::workspace_alex/angularjs-facebook"
            },
            rsyncalexlaptopssh: {
                cmd: 'rsync -avz -e "ssh -i C:/Users/alexandre/Documents/sshkeys/alex@atlantis.ppk" --exclude-from C:/utils/excludes.txt . alex@dev.nadrox.com::workspace_alex/angularjs-facebook'
            },
            rsyncstephane:{
                //todo:update paths for rsyncpass.txt and excludes.txt
                cmd: "rsync -v -rlt --password-file E:/utils/rsyncpass.txt --exclude-from E:/utils/excludes.txt . stephane@dev.nadrox.com::workspace_stephane/angularjs-facebook"
            }
        },
        watch: {
            dev : {
                files: ["src/**"],
                tasks: ['dev'],
                options: {
                    spawn: false
                }
            },
            alex : {
                files: ["src/**"],
                tasks: ['dev-alex'],
                options: {
                    spawn: false
                }
            },
            "alex-laptop" : {
                files: ["src/**"],
                tasks: ['dev-alex-laptop'],
                options: {
                    spawn: false
                }
            },
            stephane : {
                files: ["src/**"],
                tasks: ['dev-stephane'],
                options: {
                    spawn: false
                }
            }

        }

    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['copy', 'concat','less:development','uglify','watch:dev']);
    grunt.registerTask('dev-alex', ['copy', 'concat','less:development','uglify','exec:rsyncalex','watch:alex']);
    grunt.registerTask('dev-alex-laptop', ['copy', 'concat','less:development','uglify','exec:rsyncalexlaptop','watch:alex-laptop']);
    grunt.registerTask('dev-stephane', ['copy', 'concat','less:development','uglify','exec:rsyncstephane','watch:stephane']);
    grunt.registerTask('prod', ['copy', 'concat','less:production','uglify']);
};