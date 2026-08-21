# JavaScript Advanced Concepts — Lab Two

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)
![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![REST API](https://img.shields.io/badge/REST%20API-JSONPlaceholder-0A66C2?style=for-the-badge)
![NTI](https://img.shields.io/badge/NTI-Lab%20Two-0057B8?style=for-the-badge)

A collection of three practical exercises developed as part of **NTI — JavaScript Lab Two**. The lab focuses on working with JavaScript dates, DOM manipulation, event handling, random color generation, asynchronous programming, Fetch API, and dynamic content rendering.

---

## Table of Contents

- [Overview](#overview)
- [Learning Objectives](#learning-objectives)
- [Project Structure](#project-structure)
- [Tasks](#tasks)
  - [Task One — Get Day Name](#task-one--get-day-name)
  - [Task Two — Clone Elements with Random Colors](#task-two--clone-elements-with-random-colors)
  - [Task Three — Fetch and Display Posts](#task-three--fetch-and-display-posts)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Application Workflow](#application-workflow)
- [Key Concepts Practiced](#key-concepts-practiced)
- [Possible Improvements](#possible-improvements)
- [Author](#author)
- [License](#license)

---

## Overview

Each task is organized in a separate folder containing:

- An `index.html` file for the page structure.
- A dedicated JavaScript file containing the task logic.

The project progresses from working with built-in JavaScript objects to manipulating HTML elements and consuming data from an external REST API.

---

## Learning Objectives

By completing this lab, the following JavaScript concepts are practiced:

- Creating and calling reusable functions.
- Accepting function parameters and returning values.
- Working with the JavaScript `Date` object.
- Selecting HTML elements using the DOM.
- Listening for browser events with `addEventListener()`.
- Cloning existing elements using `cloneNode()`.
- Generating random RGB colors.
- Creating and appending HTML elements dynamically.
- Fetching data from a REST API.
- Handling asynchronous operations using Promises.
- Processing JSON responses.
- Handling request errors with `.catch()`.

---

## Project Structure

```text
Lab Two/
├── Task One/
│   ├── index.html
│   └── TaskOne.js
├── Task Two/
│   ├── index.html
│   └── TaskTwo.js
├── Task Three/
│   ├── index.html
│   └── TaskThree.js
├── image.png
└── README.md
```

### Folder Structure Preview

---

## Tasks

### Task One — Get Day Name

The first task defines a function that receives a date string and returns the corresponding day name.

#### Requirements

1. Create a function that accepts one date string parameter.
2. Convert the provided string into a JavaScript `Date` object.
3. Get the numeric day index using `getDay()`.
4. Return the matching day name, such as `Saturday` or `Sunday`.

#### Example

```javascript
getDayName("2026-08-20");
```

#### Expected Output

```text
Thursday
```

#### Main Concepts

- Functions
- Parameters and return values
- JavaScript `Date` object
- Arrays
- Array indexing
- Console output

#### How It Works

The `getDay()` method returns a number between `0` and `6`, where `0` represents Sunday and `6` represents Saturday. The returned number is used as an index in an array containing the seven day names.

---

### Task Two — Clone Elements with Random Colors

The second task listens for a click on an HTML `<div>`, creates a copy of the clicked element, assigns a random background color to the copy, and appends the new element to the page.

#### Requirements

1. Select the original `<div>` using its ID.
2. Attach a click event listener to the element.
3. Clone the element using `cloneNode(true)`.
4. Generate a random RGB color.
5. Apply the generated color to the cloned element.
6. Append the cloned element to the document body.

#### Interaction Flow

```text
Click the original div
        ↓
Generate a random RGB color
        ↓
Clone the original div
        ↓
Apply the generated color
        ↓
Append the clone to the page
```

#### Random Color Format

```text
rgb(red, green, blue)
```

Each color channel is generated dynamically using `Math.random()` and `Math.floor()`.

#### Main Concepts

- DOM selection
- Event listeners
- Callback functions
- Arrow functions
- `cloneNode()`
- Inline style manipulation
- Random number generation
- Dynamic element insertion

> **Current behavior:** The click listener is attached to the original element. Newly cloned elements do not automatically receive the same listener.

---

### Task Three — Fetch and Display Posts

The third task defines a function that accepts the requested number of posts, fetches them from the JSONPlaceholder REST API in one request, and displays the returned posts as cards.

#### API Endpoint

```text
https://jsonplaceholder.typicode.com/posts
```

The `_limit` query parameter controls the number of returned posts:

```text
https://jsonplaceholder.typicode.com/posts?_limit=6
```

#### Requirements

1. Create a function that accepts only one parameter.
2. Use the parameter as the number of posts to request.
3. Send one request using the `_limit` query parameter.
4. Convert the response to JSON.
5. Create one card for each returned post.
6. Display the post title and body inside each card.
7. Append all cards to the `#posts` container.
8. Handle fetch errors appropriately.

#### Example Usage

```javascript
fetchPosts(6);
```

This request produces six post cards on the page.

#### Card Content

Each dynamically generated card contains:

- The post title inside an `<h1>` element.
- The post body inside a `<p>` element.
- A border, margin, and padding for basic visual separation.

#### Main Concepts

- Fetch API
- REST APIs
- Query parameters
- Promises
- `.then()` and `.catch()`
- JSON processing
- DOM element creation
- Template literals
- Dynamic rendering
- Error handling

---

## Technologies Used

- **HTML5** — page structure and JavaScript integration.
- **JavaScript (ES6+)** — application logic and DOM manipulation.
- **DOM API** — element selection, cloning, styling, and rendering.
- **Fetch API** — asynchronous HTTP requests.
- **JSONPlaceholder** — external fake REST API used for testing and learning.
- **Visual Studio Code** — development and project organization.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Open the Project

```bash
cd "Lab Two"
code .
```

### 3. Run a Task

Open the required task folder and launch its `index.html` file in a browser.

For a smoother development experience, use the **Live Server** extension in Visual Studio Code:

1. Right-click the task's `index.html` file.
2. Select **Open with Live Server**.
3. Interact with the task in the browser.

> Task Three requires an active internet connection to retrieve posts from JSONPlaceholder.

---

## Application Workflow

```text
Task One
Date String → Date Object → Day Index → Day Name

Task Two
Click Event → Clone Element → Generate Color → Append Clone

Task Three
Post Count → Fetch Request → JSON Response → Create Cards → Render Posts
```

---

## Key Concepts Practiced

### JavaScript Fundamentals

- Functions and parameters
- Return statements
- Arrays and indexing
- Template literals
- Arrow functions

### Browser and DOM

- Element selection
- Event handling
- Element cloning
- Dynamic styling
- Creating and appending elements

### Asynchronous JavaScript

- HTTP requests
- Fetch API
- Promises
- JSON responses
- Error handling

---

## Possible Improvements

- Validate the date before attempting to return a day name.
- Remove the unreachable statement after the first `return` in Task One.
- Use the ISO date format `YYYY-MM-DD` for more consistent date parsing.
- Generate RGB values up to `255` inclusively.
- Attach click behavior to cloned elements when recursive cloning is required.
- Move inline styles into separate CSS files.
- Add a responsive card layout using CSS Grid or Flexbox.
- Validate the post count before sending the API request.
- Display loading and error messages inside the page.
- Use `async/await` as an alternative to Promise chaining.
- Create cards using DOM properties instead of assigning API content through `innerHTML`.
- Improve accessibility with semantic elements and descriptive headings.

---

## Author

**Omar Ali Abdullatif Khalifa**

- NTI JavaScript — Lab Two
- Computer Science Student

---

## License

This project was created for educational and training purposes.
