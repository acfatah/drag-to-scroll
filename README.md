# drag-to-scroll

A JavaScript library that enables scrolling using mouse dragging.

## Installation

```bash
npm i @acfatah/drag-to-scroll
```

## Usage

Create the class instance using the element you want to enable dragging-based scrolling. 

```javascript
import { DragToScroll } from '@acfatah/drag-to-scroll';

const container = document.querySelector('.container');
const dragToScroll = new DragToScroll(container);
```

## License

[MIT](./LICENSE) License.
