// (function(){
//     let toggle  = document.querySelector("#toggle");
//     let circle = document.querySelector("#circle");
//     let box1 = document.querySelector(".box-1");
//     let box2 = document.querySelector(".box-2");
//     let arrowRight = box1.querySelector("i");
//     let arrowLeft = box2.querySelector("i");
//     let themeDark = false;

//     function togglePosition(){
//         circle.classList.toggle("change");
//         themeDark = false ? themeDark ==true: themeDark == false;
//         toggleTheme();
//     }
//     function toggleTheme(){
//         let sect = document.querySelector("#sect");
//         let content = sect.querySelector(".content");
//         let input = content.querySelector("input");

//         if(themeDark){
//             sect.style.background = "#202252";
//             content.style.background ="#38356D";
//             input.style.background = "#202252";
//         }
//         else{
//             sect.style.background = "#ffa98a";
//          content.style.background = "#f79b7a";
//          input.style.background = "#ffa98a";
//         }

//     }
//     let box1Visible = true;

//     function toggleVisibility(){
//         if(box1Visible){
//             box1.classList.add("toggle");
//             box2.classList.add("toggle");
//             box1Visible =false;
//         }else{
//             box1.classList.remove("toggle");
//             box2.classList.remove("toggle");
//             box1Visible = true;
//         }
//     }
//     circle.addEventListener("click", togglePosition);
//     arrowRight.addEventListener("click",toggleVisibility);
//     arrowLeft.addEventListener("click",toggleVisibility);
// })();

(function () {
    let toggle = document.querySelector("#toggle");
    let circle = document.querySelector("#circle");
    let box1 = document.querySelector(".box-1");
    let box2 = document.querySelector(".box-2");
    let arrowRight = box1.querySelector("i");
    let arrowLeft = box2.querySelector("i");
    let themeDark = false;
 
    function togglePosition() {
       circle.classList.toggle("change");
       themeDark = false ? themeDark == true : themeDark == false;
       toggleTheme();
    }
 
    function toggleTheme() {
       let sect = document.querySelector("#sect");
       let content = sect.querySelector(".content");
       let input = content.querySelector("input");
 
       if (themeDark) {
          sect.style.background = "#202252";
          content.style.background = "#38356D";
          input.style.background = "#202252";
       } else {
                sect.style.background = "#ffa98a";
                content.style.background = "#f79b7a";
                input.style.background = "#ffa98a";
       }
    }
 
    let box1Visible = true;
 
    function toggleVisibility() {
       if (box1Visible) {
          box1.classList.add("toggle");
          box2.classList.add("toggle");
          box1Visible = false;
       } else {
          box1.classList.remove("toggle");
          box2.classList.remove("toggle");
          box1Visible = true;
       }
    }
 
    circle.addEventListener("click", togglePosition);
    arrowRight.addEventListener("click", toggleVisibility);
    arrowLeft.addEventListener("click", toggleVisibility);
 })();
 