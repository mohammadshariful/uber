"use strict";
const navLinks = document.querySelector("#navLinks");
function showBtn() {
    navLinks.style.left = "0";
}
function closeBtn() {
    navLinks.style.left = "-200px";
}
// 
const network = document.querySelector("#network");
const eat = document.querySelector("#eat");
const ride = document.querySelector("#ride");
const aboutOne = document.querySelector("#aboutOne");
const aboutTwo = document.querySelector("#aboutTwo");
const aboutThree = document.querySelector("#aboutThree");
// event-listener

network.addEventListener("click",function () {
    aboutOne.style.display = "block";
    aboutTwo.style.display = "none";
    aboutThree.style.display = "none";
});
eat.addEventListener("click",function () {
    aboutOne.style.display = "none";
    aboutTwo.style.display = "block";
    aboutThree.style.display = "none";
});
ride.addEventListener("click",function () {
    aboutThree.style.display = "block";
    aboutTwo.style.display = "none";
    aboutOne.style.display = "none";
});