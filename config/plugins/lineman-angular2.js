module.exports = function(lineman) {
    return {
        config: {
            //loadNpmTasks: lineman.config.application.loadNpmTasks.concat("grunt-angular-templates"),

            /* ********************************************************************************************************************
            * Workflow configuration
            * ********************************************************************************************************************/
            prependTasks: {
                common: "clean:ng2:generated".concat(lineman.config.application.prependTasks.common)
            },

            /* ********************************************************************************************************************
            * Task configuration
            * ********************************************************************************************************************/

            // Note: this task and all its subtasks are executed when a lineman build is run
            clean: {
                generated: {
                    src: "<%= files.ng2.generated %>" + "/*",
                    options: {
                        force: true
                    }
                },
            },

            copy: {
                ng2: {
                    generated: {
                        libs: {

                        },
                        files: {

                        }
                    },
                    dist: {
                        libs: {

                        },
                        files: {

                        }
                    }
                }
            },

            less: {
                ng2: {
                    generated: {

                    },
                    dist: {

                    }
                }
            },

            ts: {
                ng2: {
                    generated: {

                    },
                    dist: {

                    }
                }
            }

            /* ********************************************************************************************************************
            * Watch configuration
            * ********************************************************************************************************************/
            watch: { // TODO
                ngtemplates: {
                    files: "app/templates/**/*.html",
                    tasks: ["ngtemplates", "concat_sourcemap:js"]
                 }
            },
        },

        /* ************************************************************************************************************************
        * Files configuration
        * ************************************************************************************************************************/
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
                // used in conjunction with the CWD option
                css: [
                   "**/*.css"
                ],
                // used in conjunction with the CWD option
                html: [ 
                    "**/*.html"
                ],
                // used in conjunction with the CWD option
                img: [
                    "**/*.img", 
                    "**/*.png"
                ],
                systemjs: {
                    generated: "generated/",
                    dist: "dist/"
                },
                // used in conjunction with the CWD option
                ts: [
                   '**/*.ts' 
                ],
                generated: "generated/ng2",
                dist: "dist/ng2" 
            }
        }
    };
};
