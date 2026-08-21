/* 1.	Clone HTML div when it is clicked and change the background of the new copy to a random color then append it to the body. */
let div = document.getElementById("div1");

div.addEventListener("click", function(event){
    let color = randomColor();
    let newDiv = div.cloneNode(true)
    newDiv.style.backgroundColor = color;
    document.body.appendChild (newDiv);
});


const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}