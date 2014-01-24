_ = require('underscore')

# Removes the template and re-appends it to the end.
# This is to avoid thrashing with other plugins which also want to affect
# the concat bundle.
module.exports = (lineman) ->
  config:
    concat_sourcemap:
      js:
        src: _(lineman.config.application.concat_sourcemap.js.src).
          without("<%= files.template.generated %>").
          concat("<%= files.template.generated %>")
