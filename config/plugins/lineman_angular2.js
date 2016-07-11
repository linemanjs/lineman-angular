module.exports = function(lineman) {
    return {
        files: {
            ng2: {
                libs: [
                    "systemjs.config.js",
                    "node_modules/@angular/**",
                    "node_modules/systemjs/**",
                    "node_modules/core-js/**",
                    "node_modules/reflect-metadata/**",
                    "node_modules/rxjs/**",
                    "node_modules/zone.js/**",
                    "node_modules/angular2-in-memory-web-api/**"
                ],
                css: [
                    // used in conjunction with the CWD option
                    "**/*.css"
                ],
                html: [
                    // used in conjunction with the CWD option
                    "**/*.html"
                ],
                "systemjs": {
                    generated: "generated/",
                    dist: "dist/"
                },
                ts: [
                    // used in conjunction with the CWD option
                    "**/*.ts"
                ],
                generated: "generated/ng2",
                dist: "dist/ng2"
            },
        },
        config: {
            /*
             * Load grunt modules used by this plugin
             */

            loadNpmTasks: lineman.config.application.loadNpmTasks.concat("grunt-contrib-copy", "grunt-ts"),

            /*
             * Task Configuration
             */
            copy: {
                ng2_css_generated: {
                    // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                    // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                    expand: true,
                    cwd: "app/ng2",
                    src: "<%= files.ng2.css %>",
                    dest: "<%= files.ng2.generated %>"
                },
                 ng2_html_generated: {
                     // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                     // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                     expand: true,
                     cwd: "app/ng2",
                     src: "<%= files.ng2.html %>",
                     dest: "<%= files.ng2.generated %>"
                 },
                ng2_libs_generated: {
                    files: [
                        {expand: true, src: "<%= files.ng2.libs %>", dest: "generated/" }
                    ]
                },
                ng2_other_generated: {
                   // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                    // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                    expand: true,
                    cwd: "app/ng2",
                    src: ["<%= files.ng2.css %>", "<%= files.ng2.html %>"], //todo consolidate
                    dest: "<%= files.ng2.generated %>"
                },
                ng2_libs_dist: {
                    files: [
                        {expand: true, src: "<%= files.ng2.libs %>", dest: "dist/" }
                    ]
                },
                ng2_other_dist: {
                   // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                    // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                    expand: true,
                    cwd: "app/ng2",
                    src: ["<%= files.ng2.css %>", "<%= files.ng2.html %>"], //todo consolidate
                    dest: "<%= files.ng2.dist %>"
                },
                systemjs_dist: {
                    src: "systemjs.config.js",
                    dest: "<%= files.ng2.systemjs.dist %>"
                },
                systemjs_generated: {
                    src: "systemjs.config.js",
                    dest: "<%= files.ng2.systemjs.generated %>"
                }
            },

            // Added this to fix the following error:
            // Warning: Path must be a string. Received null Use --force to continue.
            // found out about this error here: https://github.com/jshint/jshint/issues/2922
            jshint: {
                options: {
                    reporterOutput: ""
                }
            },

            // Task to compile typescript files
            // Look here for config options: https://www.npmjs.com/package/grunt-ts
            ts: {
                development: {
                    "src": "app/ng2/**/*.ts",
                    "outDir": "<%= files.ng2.generated %>",
                    "options": {
                        "emitDecoratorMetadata": true,
                        "module": "system",
                        "moduleResolution": "node",
                        "noImplicitAny": false,
                        "removeComments": false,
                        "sourceMap": true,
                        // using es5 is problematic with NG2-beta
                        // http://stackoverflow.com/questions/33332394/angular-2-typescript-cant-find-names
                        "target": "es6"
                    }
                },
                production: {
                    "src": "app/ng2/**/*.ts",
                    "outDir": "<%= files.ng2.dist %>",
                    "options": {
                        "emitDecoratorMetadata": true,
                        "module": "system",
                        "moduleResolution": "node",
                        "noImplicitAny": false,
                        "removeComments": false,
                        "sourceMap": false,
                        // using es5 is problematic with NG2-beta
                        // http://stackoverflow.com/questions/33332394/angular-2-typescript-cant-find-names
                        "target": "es6"
                    }
                }
            },

            /*
            * Watch configuration
            */
            watch: {
                   ng2_systemjs: {
                        "files": "systemjs.config.js",
                        "tasks": ["copy:systemjs_generated"]
                    },
                    // renamed & deleted files remain in place, restarting lineman run will fix it
                    ng2_css: {
                        "files": "<%= files.ng2.css %>",
                        "tasks": ["copy:ng2_css_generated"]
                    },
                    // renamed & deleted files remain in place, restarting lineman run will fix it
                    ng2_html: {
                        "files": "<%= files.ng2.html %>",
                        "tasks": ["copy:ng2_html_generated"]
                    },
                    // renamed & deleted files remain in place, restarting lineman run will fix it
                    ng2_ts: {
                        "files": "<%= files.ng2.ts %>",
                        "tasks": ["ts:development"]
                    }
            },

            /*
            * Workflow configuration
            */
            prependTasks: {
                common: lineman.config.application.prependTasks.common.concat(["ts:development"]),
                dev: ["copy:ng2_other_generated", "copy:ng2_libs_generated"].concat(lineman.config.application.prependTasks.dev),
                dist: ["copy:ng2_other_dist", "copy:ng2_libs_dist"].concat(lineman.config.application.prependTasks.dev)
            }
        }
    };
};