# Scroll Data

Get the current scroll direction, position and speed. Both vertically and horizontally.

Very useful for showing/hiding a top navbar based on the scroll direction and speed.

## Installation

```bash
npm install --save scroll-data
```
    
## Usage

Require the module first.

```javascript
const ScrollData = require('window-scroll-data');
```

Then set your own scrollListener.

```javascript
window.addEventListener('scroll', () => {
    console.log(ScrollData());
});
```
    
In case you're only interested in the vertical or horizontal data, just pass in `vertical` or `horizontal` as a parameter.

```javascript
window.addEventListener('scroll', () => {
    console.log(ScrollData('vertical'));
});
```

## Example output

The direction property in the object can contain `up`, `down` and `unchanged`.

```json
{
    vertical: {
        direction: "up",
        position: 100
        speed: 12
    },
    horizontal: {
        direction: "right",
        position: 80,
        speed: 64
    },
}
```
     
## Example usage

```javascript
const myNavbar = document.querySelector('.navbar');
    
window.addEventListener('scroll', () => {
    let data = ScrollData('vertical');
    
    if (data.direction === 'up' && data.speed > 10 && !myNavbar.classList.contains('is-visible')) {
        myNavbar.classList.add('is-visible');
    }
    
    if (data.direction === 'down' && data.speed > 10 && myNavbar.classList.contains('is-visible')) {
        myNavbar.classList.remove('is-visible');
    }
});
```