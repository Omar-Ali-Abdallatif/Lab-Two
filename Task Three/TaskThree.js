/* Write a function that accepts one parameter: the number of posts to fetch.
The function should:
•	Fetch the requested number of posts from https://jsonplaceholder.typicode.com/posts in a single request (using the ?_limit query parameter).
•	Display the fetched posts as cards, with the total number of cards equal to the number of posts requested.
•	The function must accept only one parameter.
•	You are free to separate the fetching logic from the rendering logic, or keep both within a single function — but you must not break the above requirements.
*/


fetchPosts(6);

function fetchPosts(number) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${number}`)
    .then(res => res.json())
    .then(posts => {
    let container = document.getElementById("posts");
    container.innerHTML = ""; 

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let card = document.createElement("div");
        card.className = "card";
        card.style.border = "1px solid #ccc";
        card.style.padding = "15px";
        card.style.margin = "10px";
        card.innerHTML = `
                            <h1>${post.title}</h1>
                            <p>${post.body}</p>
        `;
        container.appendChild(card);
    }
    
})
    .catch(error => {
        console.error("Error fetching posts:", error);
    });
}






