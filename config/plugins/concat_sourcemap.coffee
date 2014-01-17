module.exports = (lineman) ->
  config:
    concat_sourcemap:
      js:
        src: [
          "<%= files.js.vendor %>"
          "<%= files.js.app %>"
          "<%= files.coffee.generated %>"
          "<%= files.template.generated %>"
        ]
