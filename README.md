# lineman-angular

This is a plugin to get started with Angular.js using
[Lineman](http://linemanjs.com). We recommend you look at our
[Angular template project](https://github.com/linemanjs/lineman-angular-template/)
as a starting point.

## What's this plugin do?

This plugin will configure your lineman project to incorporate:

 * **grunt-ngmin** to handle minification, replacing uglify, in order to deal with Angular's fucntion#toString()'ing to figure out what to inject into your methods.
 * **grunt-angular-templates** to compile the client-side `*.html` templates you add to `app/templates`

## Notes

Keep in mind that `grunt-angular-templates` assumes that your module is named app. You'll need to override that in your lineman project if you'd like your templates on some other module, like so:

```
 ngtemplates: {
   options: {
     module: "myModuleName"
   }
 }
```
