

// Instantiating the global app object
var app = {};
document.querySelector(".header__burger").addEventListener("click", function (e) {
    document.querySelector(".header__navbar").classList.toggle("active");
    document.querySelector(".header__burger").classList.toggle("active");

})

