iGrowl
======

iGrowl is a jQuery plugin that generates growl-like notifications with an emphasis on icons. Alerts are fully responsive and CSS animations are used to provide optimal performance.The plugin also includes <a href="#ss-installation">4 optional icon packs</a>.

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

All icon packs have been compiled using [Icomoon](https://icomoon.io/) app

## Usage
To generate an iGrowl alert, simply call it by:
```javascript
$.iGrowl({
  message: "Hello world!",
  // other options
})
```
For a full list of properties and methods, demos and examples, see [iGrowl](http://catc.github.io/iGrowl/).

## Features to come
Features I plan on adding:
* better link integration
* more styles + options to customize styles

## License
iGrowl is licensed under the MIT license (http://opensource.org/licenses/MIT).

## Contributing
If you find any bugs, have feature requests, or would like to contribute - either send me a pull request or open a ticket and I'll do my best to address it.
