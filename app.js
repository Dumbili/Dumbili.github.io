document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll("img");

for ( const image of images)
{
    fetch("https://en.wikipedia.org/wiki/Premier_League#/media/File:Premier_League_Logo.svg")
    .then (Response=> Response.json())
    .then (data => {
    image.src=data.message
    image.width=100;
    image.height= 100;}


)
}
}
)