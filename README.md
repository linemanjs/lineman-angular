# lineman-angular2

## Introduction
This is a plugin to get started with Angular.js using [Lineman](http://linemanjs.com). This plugin started as a fork of [lineman-angular](https://github.com/linemanjs/lineman-angular) lineman plugin for Angular 1. Its goal is to enhance its parent to include support for [Angular 2](https://angular.io/). 

Using this plugin, in combination with the [lineman-angular](https://github.com/linemanjs/lineman-angular), you can build pure Angular 1, or a hybrid [Angular 1](https://angularjs.org/)/ [Angular 2](https://angular.io/), and pure [Angular 2](https://angular.io/) applications.

We recommend you look at a [Angular 2 template project](https://github.com/RodrigoMattosoSilveira/lineman-angular2-template/)  as a starting point.


[Angular 2](https://angular.io/) is quite different from [Angular 1](https://angularjs.org/), with some of these differences having a direct impact on how hybrid Angular 1/ Angular 2, and pure Angular 2 applications are built:

* **TypeScript**: [Angular 2](https://angular.io/) introduced support for one additional language, [TypeScript](https://www.typescriptlang.org/). This plugin adds support for TypeScript transpilation.
* **Module Management** - Angular 2 adopted the [ES6 module architecture](http://exploringjs.com/es6/ch_modules.html), introducing a third party module manager - this plugin uses [SystemJS](https://github.com/systemjs/systemjs), leading to changes in how files are managed during development and at runtime. As a result it became necessary to carefully re-factor the configuration to support the development of hybrid Angular 1/ Angular 2, and pure Angular 2 applications while still fully preserving the Angular 1 support.
* **Component Architecture** - Angular 2 introduces a more sophisticated [component architecture](https://angular.io/docs/ts/latest/guide/architecture.html), offering the developer the ability to consolidate all of a component’s artifacts - css / html / img, png, ts, into the same filesystem folder, leaving it up to the module manager to worry about loading them as necessary. As a result it became necessary to carefully re-factor the configuration to support this paradigm while still supporting Angular 1 fully.

## What's this plugin do?

This plugin will configure your lineman project to incorporate:

 * **files** definitions to support NG2 specific task management.
 * **grunt-ts** to compile Typescript (ts)files.
 * **Tasks** to manage NG2 files.
 * **Workflow** to execute NG2 build / run tasks.
 * **Watch** to watch NG2 files and trigger NG2 tasks.
 
## Assumptions
This plugin assumes:

 * That your Angular 2 files will be placed in the app/ng2 folder. The Angular 2 tutorials use app and app/ts for the host folder for Angular 1 / Angular 2 hybrid applications, and app as the host folder for pure Angular 2 applications. This plugin has been written to support Angular 1 / Angular 2 hybrid applications. Some time the future this plugin will be re-factored to support pure Angular 2 applications.
 
## Sample application
See the [lineman-angular2-template project](https://github.com/RodrigoMattosoSilveira/lineman-angular2-template) for a sample application of this plugin. 


