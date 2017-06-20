# Scroll Data

Get the current scroll direction, position and speed. Both vertically and horizontally.

## Installation

    npm install --save scroll-data
    
## Usage

Require the module first.

    const ScrollData = require('window-scroll-data');

Then set your own scrollListener.

    window.addEventListener('scroll', () => {
        console.log(ScrollData());
    });
    
In case you're only interested in the vertical or horizontal data, just pass in `vertical` or `horizontal` as a parameter.

    window.addEventListener('scroll', () => {
        console.log(ScrollData('vertical'));
    });

## Example output

The direction property in the object can contain `up`, `down` and `unchanged`.

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
     