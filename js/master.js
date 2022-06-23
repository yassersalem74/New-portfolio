// function darkmode(){
//     var setTheme = document.body;
//     setTheme.classList.toggle("dark-mode");

//     var theme;

//     if (setTheme.classList.contains("dark-mode")){
//         console.log("dark mode");
//         theme = "DARK";
//     }
//     else {
//         console.log("Ligt mode");
//         theme = "LIGHT";
//     }
//     localStorage.setItem("PageTheme","theme");


// }
// let GetTheme = localStorage.getItem("PageTheme");

// if(GetTheme === "DARK"){
//     document.body.classList = "dark-mode";
// }


// Active Link 
var navb = document.querySelectorAll('.navbar a');
navb.forEach(a => {

        a.addEventListener('click', (e) => {
            handelActive(e);
        });
});

// Set Color in Local Storge

var mainColor = localStorage.getItem("colorOption");
if(mainColor !== null){

    document.documentElement.style.setProperty('--main--color', mainColor);

    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");

        if(element.dataset.color === mainColor) {
            element.classList.add("active");
        }
    });
}


// Switch Color For Page
var colorList = document.querySelectorAll(".color-list li");
colorList.forEach(li => {
    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

        localStorage.setItem("colorOption",  e.target.dataset.color);
        handelActive (e);
    });
});




// function darkmode(){
//     body.style.backgroundColor = "white";
// }