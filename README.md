# drag-to-scroll

A JavaScript library that enables scrolling using mouse dragging.

## Installation

### Npm Installation

```bash
npm i @acfatah/drag-to-scroll
```

### [jsDelivr](https://www.jsdelivr.com) CDN Service

```javascript
import { dragToScroll } from 'https://cdn.jsdelivr.net/gh/acfatah/drag-to-scroll@1.0.0/index.min.js'
```

## Usage

Create the class instance using the element you want to enable dragging-based scrolling. 

```javascript
import { dragToScroll } from '@acfatah/drag-to-scroll';

const container = document.querySelector('.container');
dragToScroll(container);
```

## License

[MIT](./LICENSE)
