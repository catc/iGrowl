iGrowl
======

iGrowl is a lightweight jQuery plugin that generates growl-like notifications with an emphasis on icons. Alerts are fully responsive and CSS animations are used to provide optimal performance.The plugin also includes [4 optional icon packs](http://catc.github.io/iGrowl/#ss-installation).

For **full documentation**, see [iGrowl](http://catc.github.io/iGrowl/).

### Features
* Elegant, clean look
* Highly customizable:
    * includes [numerous options](http://catc.github.io/iGrowl/#ss-properties), styles and animations
    * can change defaults
    * includes animation callbacks
* CSS animations - smooth performance on all devices
* Responsive - media queries for alert size
* Icon packs included

## Dependencies
iGrowl has 3 dependencies:

1. jQuery
2. animate.css
3. **Optional:** one or more of the 4 icon packs included - each includes its respective css and font files
  * [Vicons](https://dribbble.com/shots/1663443-60-Vicons-Free-Icon-Set) by [Victor Erixon](http://victorerixon.com/)
  * [Feather](http://colebemis.com/feather/) by [Cole Bemis](http://colebemis.com/)
  * [Steadysets](https://dribbble.com/shots/929153-Steady-set-of-icons) by [Tommy Sähl](http://tommysahl.com/)
  * [Linecons](http://designmodo.com/linecons-free/) by [Sergey Shmidt](http://shmidt.in/)
  * You can use your own icon font - see docs for more info
  * Icons are completely optional; iGrowl functions perfectly fine without icons

All icon packs have been compiled using [Icomoon](https://icomoon.io/) app.

## Installation
To install, grab the necessary iGrowl files from `dist`.
```HTML
<!-- dependencies: jQuery + animate.css --> 
<link rel="stylesheet" href="stylesheets/animate.min.css">
<script src="javascript/jquery.min.js">

<!-- iGrowl CSS + JS --> 
<link rel="stylesheet" href="stylesheets/igrowl.min.css">
<script src="javascript/igrowl.min.js">

<!-- at least one of the following icon stylesheets: --> 
<link rel="stylesheet" href="stylesheets/font css/vicons.css">
<link rel="stylesheet" href="stylesheets/font css/feather.css">
<link rel="stylesheet" href="stylesheets/font css/steadysets.css">
<link rel="stylesheet" href="stylesheets/font css/linecons.css">
```
Also, include the respective font files (eg: `igrowl-feather.eot`, `igrowl-feather.svg`, `igrowl-feather.ttc`, etc.).

**Note:** you may need to change the icon css paths to the font files depending on how your project is organized.

To install via **Bower**: 
```bash
$ bower install igrowl
```

## Usage
To generate an iGrowl alert, simply call it by:
```javascript
$.iGrowl({
  message: "Hello world!",
  // other options
})
```
For a full list of properties and methods, demos and examples, see [iGrowl](http://catc.github.io/iGrowl/) official documentation.

### Browser support
* Chrome & Firefox
* Safari 4+
* IE 10+ **or** 9+ if you don't require animations


## Features to come
Features I plan on adding:
* max number of notifications
   * queue system - eg: if max number of notifications is 4, new notifications are queued until the current disappear

If you have any suggestions or requests, open a ticket or feel free to send me an email.

## License
iGrowl is licensed under the MIT license (http://opensource.org/licenses/MIT).

## Contributing
If you find any bugs, have feature requests, or would like to contribute - either send me a pull request or open a ticket and I'll do my best to address it.

Contributors:
- [Curtis Maddalozzo](https://github.com/cmaddalozzo)
