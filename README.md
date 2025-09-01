# JavaScript DOM & Event Handling – Q&A

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById(id)** → Returns a single element with the given ID. Works only with IDs.
- **getElementsByClassName(className)** → Returns a live HTMLCollection of all elements with the given class name.
- **querySelector(selector)** → Returns the first element matching a CSS selector.
- **querySelectorAll(selector)** → Returns a static NodeList of all elements matching a CSS selector.

---

## 2. How do you create and insert a new element into the DOM?

- Use `document.createElement()` to create the element.
- Set content with `textContent` or `innerHTML`.
- Add classes or attributes with `className` or `setAttribute()`.
- Insert into DOM using `appendChild()`, `prepend()`, or `insertBefore()`.

Example:

```javascript
let div = document.createElement("div");
div.textContent = "Hello World";
document.body.appendChild(div);
```

---

## 3. What is Event Bubbling and how does it work?

- Event bubbling is when an event starts from the target element and propagates up through its parent elements until it reaches the `document`.
- Example: Clicking a button inside a div triggers the button’s click event, then the div’s click event.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

- Event delegation is attaching a single event listener to a parent element to manage events for its child elements using `event.target`.
- Useful for:
  - Handling dynamically added elements.
  - Reducing the number of event listeners.
  - Better performance.

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

- **preventDefault()** → Stops the browser’s default behavior (e.g., prevents link navigation or form submission).
- **stopPropagation()** → Stops the event from bubbling up or capturing further in the DOM.
