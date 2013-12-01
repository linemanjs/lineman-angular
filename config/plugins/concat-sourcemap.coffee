module.exports = (lineman) ->
  config:
    loadNpmTasks: lineman.config.application.loadNpmTasks.concat("grunt-concat-sourcemap")

    removeTasks:
      common: lineman.config.application.removeTasks.common.concat("concat")

    appendTasks:
      common: lineman.config.application.appendTasks.common.concat("concat_sourcemap")

    concat_sourcemap:
      options:
        sourcesContent: true

      js:
        src: [
          "<%= files.js.vendor %>"
          "<%= files.js.app %>"
          "<%= files.coffee.generated %>"
          "<%= files.ngtemplates.dest %>"
        ]
        dest: "<%= files.js.concatenated %>"

      spec:
        src: [
          "<%= files.js.specHelpers %>"
          "<%= files.coffee.generatedSpecHelpers %>"
          "<%= files.js.spec %>"
          "<%= files.coffee.generatedSpec %>"
        ]
        dest: "<%= files.js.concatenatedSpec %>"

      css:
        src: [
          "<%= files.less.generatedVendor %>"
          "<%= files.sass.generatedVendor %>"
          "<%= files.css.vendor %>"
          "<%= files.less.generatedApp %>"
          "<%= files.sass.generatedApp %>"
          "<%= files.css.app %>"
        ]
        dest: "<%= files.css.concatenated %>"

    watch:
      js:
        files: ["<%= files.js.vendor %>", "<%= files.js.app %>"]
        tasks: ["concat_sourcemap:js"]
      coffee:
        files: "<%= files.coffee.app %>"
        tasks: ["coffee", "concat_sourcemap:js"]
      jsSpecs:
        files: ["<%= files.js.specHelpers %>", "<%= files.js.spec %>"]
        tasks: ["concat_sourcemap:spec"]
      coffeeSpecs:
        files: ["<%= files.coffee.specHelpers %>", "<%= files.coffee.spec %>"]
        tasks: ["coffee", "concat_sourcemap:spec"]
      css:
        files: ["<%= files.css.vendor %>", "<%= files.css.app %>"]
        tasks: ["concat_sourcemap:css"]
      less:
        files: ["<%= files.less.vendor %>", "<%= files.less.app %>"]
        tasks: ["less", "concat_sourcemap:css"]
      sass:
        files: ["<%= files.sass.vendor %>", "<%= files.sass.app %>"]
        tasks: ["sass", "concat_sourcemap:css"]

