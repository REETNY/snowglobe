const firstBaseBulbs = [...document.querySelectorAll(".levels1 .lightBulbs")];
const secondBaseBulbs = [...document.querySelectorAll(".levels2 .lightBulbs")];
const thirdBaseBulbs = [...document.querySelectorAll(".levels3 .lightBulbs")];

const globe = document.querySelector(".globe");
const globeCont = document.getElementsByClassName("globeCont")[0];
const shakeBtn = document.querySelector("#shake");

colorsArr = ["#F7C815","#2F70AF","#F5624D", "#CC231E", "#34A65F", "#0F8A5F", "#235E6F", "#034F1B", "E6DCD1", "#7E121D", "#BD3634", "#CEAC5C", "#fff"];


const ranNum = () => {
    return Math.floor(Math.random() * colorsArr.length);
}

function coloredBulbs(){
    firstBaseBulbs.forEach((bulb) => {
        bulb.style.background = `${colorsArr[ranNum()]}`
    })

    secondBaseBulbs.forEach((bulb) => {
        bulb.style.background = `${colorsArr[ranNum()]}`
    })

    thirdBaseBulbs.forEach((bulb) => {
        bulb.style.background = `${colorsArr[ranNum()]}`
    })
}

let intervalSec = 1000;

let intervalTimer = setInterval(coloredBulbs, intervalSec);

function changeTimer(){
   clearInterval(intervalTimer);

   if(intervalSec == 2500){
        intervalSec = 1000;
   }else if(intervalSec < 2500){
        intervalSec += 500;
   }

   intervalTimer = setInterval(coloredBulbs, intervalSec);
}

setTimeout(() => {
    setInterval(changeTimer, 50000)
}, 180000);


console.log(globe.clientWidth)

function getRanNum(){
    return Math.floor(Math.random() * globe.clientWidth + 10);
}

function geneNum(){
    return Math.floor(Math.random() * 10);
}

const snowFall = () => {
    const snowBall1 = document.createElement("div");
    snowBall1.classList.add("snowBall");
    snowBall1.style.left = `${getRanNum()}px`
    snowBall1.style.animationDuration = `${geneNum()}s`;

    const snowBall2 = document.createElement("div");
    snowBall2.classList.add("snowBall");
    snowBall2.style.left = `${getRanNum()}px`
    snowBall2.style.animationDuration = `${geneNum()}s`;

    const snowBall3 = document.createElement("div");
    snowBall3.classList.add("snowBall");
    snowBall3.style.left = `${getRanNum()}px`
    snowBall3.style.animationDuration = `${geneNum()}s`;

    const snowBall4 = document.createElement("div");
    snowBall4.classList.add("snowBall");
    snowBall4.style.left = `${getRanNum()}px`
    snowBall4.style.animationDuration = `${geneNum()}s`;

    const snowBall5 = document.createElement("div");
    snowBall5.classList.add("snowBall");
    snowBall5.style.left = `${getRanNum()}px`
    snowBall5.style.animationDuration = `${geneNum()}s`;

    globe.append(snowBall1, snowBall2, snowBall3, snowBall4, snowBall5)

    removeDiv(snowBall1, snowBall2, snowBall3, snowBall4, snowBall5)
}

function removeDiv(snowBall1, snowBall2, snowBall3, snowBall4, snowBall5){
    
    setTimeout(() => {
        globe.removeChild(snowBall1);
        globe.removeChild(snowBall2);
        globe.removeChild(snowBall3);
        globe.removeChild(snowBall4);
        globe.removeChild(snowBall5);
    }, 25000)
}

let snowWatch;

shakeBtn.addEventListener("click", () => {
    globeCont.style.animationName = `shake`;
    globeCont.style.animationDuration = `2s`;
    globeCont.style.animationTimingFunction = `linear`;

    shakeBtn.disabled = true;

    snowWatch = setInterval(snowFall, 1500);


    setTimeout(() => {
        clearInterval(snowWatch);
        shakeBtn.disabled = false;
    }, 300000)

    setTimeout(() => {
        globeCont.style.animationName = ``;
        globeCont.style.animationDuration = ``;
        globeCont.style.animationTimingFunction = ``;
    }, 4000)
});