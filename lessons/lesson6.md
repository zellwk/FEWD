# Lesson 6

## DOM and JavaScript

- Selecting nodes: `document.querySelector('selector')`
  + Select by ID with `#`
  + Select by classes with `.`
  + Select by attribute with `[]`
  + Select by tags
- Changing CSS with JavaScript: `node.style.cssProperty = 'new property value'`
- Changing classes:
  + `node.classList.add('class')`
  + `node.classList.remove('class')`
  + `node.classList.toggle('class')`
- Getting attributes:
  + `node.dataset.attributeName`

## Events
- Event = things that happen.
  + User clicks mouse
  + User types a key
  + User scrolls
  + [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- addEventListener: `node.addEventListener('event', callback)`
- Callbacks: functions that are called after something is done. (example, after an event is triggered). More info on [callbacks](https://zellwk.com/blog/callbacks/)

## CSS Transitions

- Properties learned:
  + `transform`
  + `transition`
  + `opacity`
  + `visibility`

## What we did in class

- Sidebar navigation (like the one on [nowness.com](nowness.com))
- Scissors paper stone game

## Homework

- Make an accordion with JavaScript. Example: [Bootstrap accordion](https://v4-alpha.getbootstrap.com/components/collapse/#accordion-example). (Note: don't use Bootstrap. This example is here to show you what it looks like)

### Readings:

1. [Event Bubbling and capturing](https://www.sitepoint.com/event-bubbling-javascript/)
2. [Selecting multiple elements with `document.querySelectorAll`](https://zellwk.com/blog/js-in-dom/)
3. [Basic Form elements](http://htmldog.com/guides/html/beginner/forms/)
