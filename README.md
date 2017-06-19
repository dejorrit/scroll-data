# Scroll Data

An npm module to help getting the vertical and horizontal scroll direction

## Installation

    npm install --save scroll-data
    
## Usage

Require the module first.

    var ScrollData = require('window-scroll-data');

Then set your own scrollListener.

    window.addEventListener('scroll', function () {
        console.log(ScrollData());
    });
    
In case you're only interested in the vertical data, just pass in `vertical` as a parameter. This goes for `horizontal` as well off course.

    window.addEventListener('scroll', function () {
        console.log(ScrollData('vertical'));
    });

## Example output

    {
        horizontal: {
            direction: "up",
            position: 100
            speed: 12
        },
        vertical: {
            direction: "right",
            position: 80,
            speed: 64
        },
    }
    
The direction property in the object can contain `up`, `down` and `unchanged`. 