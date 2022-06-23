const hexCode = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 0, "A", "B", "C", "D", "E", "F"];
const getRandom = () => {
    return hexCode[Math.floor(Math.random() * hexCode.length)];
}
let button = document.querySelector("button");
let span = document.querySelector("span");
button.addEventListener("click", () => {
    let hex = "#";
    for (let i = 0; i < 6; i++)
    {
        hex+=getRandom();
    }
    span.innerText = hex;
    span.style.color = hex;
    document.body.style.background = hex;
});