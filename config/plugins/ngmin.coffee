module.exports = (lineman) ->

  config:
    loadNpmTasks: lineman.config.application.loadNpmTasks.concat("grunt-ngmin")

    prependTasks:
      dist: lineman.config.application.prependTasks.dist.concat("ngmin")

    ngmin:
      js:
        src: "<%= files.js.concatenated %>"
        dest: "<%= files.js.concatenated %>"
