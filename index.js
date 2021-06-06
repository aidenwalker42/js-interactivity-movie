const theButton = document.getElementById("newmovie");
const inputField = document.querySelector("input");
const theMovie = document.querySelector("li");

let key = 0;
function addMovie(){

    document.querySelector("ul").innerHTML += "<li>" + inputField.value + 
    "<button class=\"" + key + "\">" +  "x" + "</button>" + "</li>";
    document.querySelector(parseInt(key)).addEventListener("click", removeMovie);
    key++;
}
function removeMovie(evt) {
    evt.target.parentElement.innerHTML = "LOL";
}
theButton.addEventListener("click", addMovie);


