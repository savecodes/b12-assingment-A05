## Question 1

## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1-Selects one single element by id and its Fastest because IDs are unique.
2-Selects all elements with the given class name.
Needs loop/iteration to access multiple elements.
3-Selects the first element matching the CSS selector (id, class, tag, attribute, etc.). it's flexible.
4-Selects all matching elements. Returns a NodeList.

## Question 2

## How do you create and insert a new element into the DOM?

document.createElement("div") → creates a new empty <div> element in memory (not yet visible in the page).

newDiv.textContent = "Programming Hero" → sets the inner text of that <div>.

document.body.appendChild(newDiv) → inserts the <div> into the DOM at the end of the <body>.

let newDiv = document.createElement("div");
newDiv.textContent = "Programming Hero";
document.body.appendChild(newDiv);  

## Question 3

## What is Event Bubbling and how does it work?

Event Bubbling refers to the process where, when an event takes place on a child element, it is executed on that element first, and then it "bubbles up" to its parent, and then to the grandparent, continuing until it arrives at the document root.

If you press a located within a” → looks like incomplete text (maybe meant “If you press a button located within a div)

## Question 4

## What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a method in which you attach an event listener to a shared parent instead of numerous child elements, utilizing event bubbling to identify which child initiated it.

Beneficial for:

Improved efficiency (reduced event listeners).

Elements added dynamically function automatically as well

## Question 5

## What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()

Stops the default browser action.

Example: Clicking a link (<a>) won’t go to the URL, submitting a form won’t reload page.

stopPropagation()

Stops the event bubbling (or capturing).

The event won’t propagate to parent elements.

