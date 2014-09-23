iGrowl
======

iGrowl is a jQuery plugin that generates growl-like notifications with an emphasis on icons. Alerts are fully responsive and CSS animations are used to provide optimal performance.The plugin also includes [4 optional icon packs](http://catc.github.io/iGrowl/#ss-installation).

For full documentation, see [iGrowl](http://catc.github.io/iGrowl/).

## Dependencies
iGrowl has 3 dependencies:

1. jQuery
2. animate.css
3. at least one of the 4 icon packs included - each includes its respective css and font files
  * [Vicons](https://dribbble.com/shots/1663443-60-Vicons-Free-Icon-Set) by [Victor Erixon](http://victorerixon.com/)
  * [Feather](http://colebemis.com/feather/) by [Cole Bemis](http://colebemis.com/)
  * [Steadysets](https://dribbble.com/shots/929153-Steady-set-of-icons) by [Tommy Sähl](http://tommysahl.com/)
  * [Linecons](http://designmodo.com/linecons-free/) by [Sergey Shmidt](http://shmidt.in/)

All icon packs have been compiled using [Icomoon](https://icomoon.io/) app.

## Installation
To install:
```HTML
<-- dependencies: jQuery + animate.css --> 
<link rel="stylesheet" href="stylesheets/animate.min.css">
<script src="javascript/jquery.min.js">

<-- iGrowl CSS + JS --> 
<link rel="stylesheet" href="stylesheets/igrowl.min.css">
<script src="javascript/igrowl.min.js">

<-- at least one of the following icon stylesheets: --> 
<link rel="stylesheet" href="stylesheets/font css/vicons.css">
<link rel="stylesheet" href="stylesheets/font css/feather.css">
<link rel="stylesheet" href="stylesheets/font css/steadysets.css">
<link rel="stylesheet" href="stylesheets/font css/linecons.css">
```
Also, include the respective font files (eg: `igrowl-feather.eot`, `igrowl-feather.svg`, `igrowl-feather.ttc`, etc.).

Note: you may need to change the icon css paths to the font files depending on how your project is organized.


## Usage
To generate an iGrowl alert, simply call it by:
```javascript
$.iGrowl({
  message: "Hello world!",
  // other options
})
```
For a full list of properties and methods, demos and examples, see [iGrowl](http://catc.github.io/iGrowl/) official documentation.

## Features to come
Features I plan on adding:
* better link integration
* more styles + options to customize styles
* add [alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role)

## License
iGrowl is licensed under the MIT license (http://opensource.org/licenses/MIT).

## Contributing
If you find any bugs, have feature requests, or would like to contribute - either send me a pull request or open a ticket and I'll do my best to address it.
