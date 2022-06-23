let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");



let coloMode = document.querySelector(".color-mode");
let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let mainhead = document.querySelector(".mainhhead");

const enableDarkMode = () => {

    document.body.classList.add("darkmode");

    localStorage.setItem("darkMode" ,"enabled");
    coloMode.style.color = "White"
    coloMode.style.backgroundColor = "black";
    mainhead.style.backgroundColor = "black";
    sun.style.display = "inline-block"
    moon.style.display = "none"
};

const disableDarkMode = () => {

    document.body.classList.remove("darkmode");

    localStorage.setItem("darkMode" , "null");
    coloMode.style.color = "black"
    coloMode.style.backgroundColor = "white";
    mainhead.style.backgroundColor = "white";
    sun.style.display = "none"
    moon.style.display = "inline-block"

}

if(darkMode === "enabled"){
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode)
    } else{
        disableDarkMode();
        console.log(darkMode)
    }
}
);





// function colorSetting(){
//     let coloSet = document.querySelector("#setcolor");  
//     coloSet.style.display = "block";
// }


// function colorSetClose(){
//     let coloSet = document.querySelector("#setcolor");  
//     coloSet.style.display = "none";
// }


// function colorSetting(){
//     let coloSet = document.querySelector("#setcolor");  

//     if (coloSet.style.display === "none") {
//         coloSet.style.display = "block";
//       } else {
//         coloSet.style.display = "none";
//       }
// }

