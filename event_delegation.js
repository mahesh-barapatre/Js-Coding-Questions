//optimization tech

// Event Delegation

// Event delegation is a technique in JavaScript where a single event listener is added to a parent element to manage events for all its child elements.
//  This leverages the event propagation (bubbling) mechanism, where an event triggered on a child element bubbles up to its parents, allowing the parent to handle the event.

// Advantages --

// Performance:
// Reduces memory consumption by decreasing the number of event listeners.
// Only one event listener is needed on the parent element instead of multiple listeners on child elements.

// Dynamic Handling:
// Automatically handles events for dynamically added child elements without needing to reattach event listeners.
// Simplifies code management by centralizing event handling.

// Code Simplicity:
// Reduces redundancy and keeps the code cleaner and more maintainable.
// Centralizes event handling logic, making it easier to understand and modify.

//example 1 - by nodeName - items in category in e-commerce
{
  /* <ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <!-- more items -->
</ul>; */
}

// Select the common ancestor
const itemList = document.getElementById("itemList");

// Add a single event listener to the common ancestor
itemList.addEventListener("click", function (event) {
  // Check if the clicked element is a list item
  if (event.target && event.target.nodeName === "LI") {
    console.log("List item clicked:", event.target.textContent);
    // Handle the click event
  }
});

//example 2 - making custom attributes
{
  /* <div id="inputContainer">
  <input type="text" data-uppercase="true">
  <input type="text" data-uppercase="true">
  <input type="text">
</div> */
}

// Select the common parent element
const inputContainer = document.getElementById("inputContainer");

// Add an event listener for the 'input' event on the common parent
inputContainer.addEventListener("input", function (event) {
  // Check if the target element has the custom attribute 'data-uppercase'
  if (event.target && event.target.getAttribute("data-uppercase") === "true") {
    // Convert the input value to uppercase
    event.target.value = event.target.value.toUpperCase();
  }
});

// example 3 - event delegation using className
// <div id="container">
//   <button class="child">Button 1</button>
//   <button class="child">Button 2</button>
// </div>

// Select the parent element
const container = document.getElementById("container");

// Add an event listener to the parent element
container.addEventListener("click", function (event) {
  // Check if the clicked element is a child button
  if (event.target && event.target.classList.contains("child")) {
    console.log("Button clicked:", event.target.textContent);
  }
});
