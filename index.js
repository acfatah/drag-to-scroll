// Function to avoid accidently select text while dragging
// https://stackoverflow.com/a/5432363/1866528
const pauseEvent = event => {
  if (event.stopPropagation) event.stopPropagation()
  if (event.preventDefault) event.preventDefault()
  event.cancelBubble = true
  event.returnValue = false

  return false
}

/**
 * Drag to scroll event handler
 * @param {Element} dragArea
 */
export const dragToScroll  = dragArea => {
  const pos = { top: 0, left: 0, x: 0, y: 0 }

  // Handle the mousedown event that's triggered when user drags the element
  const mouseDownHandler = event => {
    // Only handle left mouse button drag
    if (event.button !== 0) return

    // Need to stop click event propagation to prevent accidently select text
    // while scroll dragging
    pauseEvent(event)

    Object.assign(pos, {
      // The current scroll
      left: dragArea.scrollLeft,
      top: dragArea.scrollTop,

      // Get the current mouse position
      x: event.clientX,
      y: event.clientY,
    })

    dragArea.style.cursor = 'grabbing'

    // Attach the listeners to `document` on mousedown
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }

  const mouseMoveHandler = event => {
    pauseEvent(event)

    // How far the mouse has been moved
    const dx = event.clientX - pos.x
    const dy = event.clientY - pos.y

    // Scroll the element
    dragArea.scrollLeft = pos.left - dx
    dragArea.scrollTop = pos.top - dy
  }

  const mouseUpHandler = () => {
    // Remove the listeners on mouseup from `document`
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
    dragArea.style.cursor = 'grab'
  }

  dragArea.addEventListener('mousedown', mouseDownHandler)
}
