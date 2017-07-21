# Lesson 7

## Event Propagation

- 3 phases
  + Capturing
  + Target
  + Bubbling
- You can safely ignore capturing and target phase. Take note of bubbling phase.
- Bubbling means events go through every layer of DOM when target gets activated
- Event delegation: The act of using a parent element to listen for events for children elements.
- `event.preventDefault()` – prevents default event behavior
- `event.stopPropagation()` – prevents events from bubbling further.

## More selectors

- `node.matches('selector')` – check if element would be selected with the specified selector.
- `node.closest('selector')` – searches for the closest ancestor element for the specified selector.
- `node.querySelectorAll('selector')` - selects multiple nodes
  + Results from `document.querySelectorAll` is a `NodeList`. Need to perform a `for` loop over nodes within it before you can `node.addEventListener` or any other method learned last lesson
  + Alternatively, you can use `nodeList.forEach()` (Similar to `array.forEach`) to loop through nodes. Easier.
- `node.parentNode` - selects parent node
- `node.nextSibling` - select next sibling node
- `node.prevSibling` - select prev sibling node
- `node.children` – selects all children nodes (as a NodeList)

## Events

- More event types:
  + keyboard events
    * `keydown`
    * `keypress`
    * `keyup`
  + Form events:
    * `reset`
    * `submit`

## Form

- Input types
  1. `input`
  2. `textarea`
  3. `radio`
  4. `checkbox`
  5. `select`

## What we built:

1. Accordion (Last week's homework)
2. Changing background while scrolling
3. Responsive navigation menu
4. Modal window
5. Add list item