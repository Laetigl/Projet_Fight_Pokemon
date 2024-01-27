import * as INSTANCES from './module/instances.js'
import * as CLASS from './module/class.js'

//Sound
// let sound = document.querySelector("audio")
// sound.volume=0

//Boutons accueil
let chooseBtnHippo = document.querySelectorAll(".infos button")[0] //boutons 4 choix
let chooseBtnShark = document.querySelectorAll(".infos button")[1] //boutons 4 choix
let chooseBtnMouth = document.querySelectorAll(".infos button")[2] //boutons 4 choix
let chooseBtnTurtle = document.querySelectorAll(".infos button")[3] //boutons 4 choix

//Ecrans
let screenOne= document.querySelector(".mapWater") //ecran 1
let screenTwo = document.querySelector(".battleWater") //ecran 2
let backMenu = document.querySelector(".battleWater button") //bouton menu
let backGame = document.querySelector(".gameOver button")
let screenGameOver = document.querySelector(".gameOver")
let screenWinner = document.querySelector(".champion")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let arrayHippo = document.querySelectorAll(".attacks")[0]
let arrayShark = document.querySelectorAll(".attacks")[1]
let arrayMouth = document.querySelectorAll(".attacks")[2]
let arrayTurtle = document.querySelectorAll(".attacks")[3]

let btnOne = document.querySelectorAll(".one")
let btnTwo = document.querySelectorAll(".two")
let btnThree = document.querySelectorAll(".three")
let btnFour = document.querySelectorAll(".four")

let arrayAttack = [arrayHippo,arrayShark,arrayTurtle,arrayMouth]

let listePerso = [INSTANCES.hippo,INSTANCES.shark,INSTANCES.turtle,INSTANCES.mouth]

let gentilDiv = document.querySelector(".gentil")
let gentilImg = document.querySelector(".gentil img")
let mechantDiv = document.querySelector(".ennemy")
let mechantImg = document.querySelector(".ennemy img")

//-------------------------------------------------------------------------------
//Bouton 1 : Hippo
chooseBtnHippo.addEventListener('click', ()=>{
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    gentilDiv.setAttribute("class","gentil")
    gentilImg.src = INSTANCES.hippo.imageFront
    
    let perso = listePerso.slice()
        perso.splice(0,1)
        perso.splice(getRandomInt(0,2), 1)
        perso.splice(getRandomInt(0,1), 1)
        console.log(perso);

    let mean 
    switch (perso[0]){
        case INSTANCES.shark:
            mean = INSTANCES.shark
            break
        case INSTANCES.turtle:
            mean = INSTANCES.turtle
            break
        case INSTANCES.mouth:
            mean = INSTANCES.mouth
            break 
    }
    mechantImg.src = mean.imageBack

    //Tableau des attaques
    arrayAttack.splice(0,1)
    arrayAttack.forEach(element => {
        element.classList.add('hide')
    });
    
    let messageScore = document.querySelector(".frame")

    let attackhippo = [btnOne[0],btnTwo[0],btnThree[0],btnFour[0]]

    attackhippo.forEach(element => {
        element.addEventListener("click",()=>{
                if(mean.pv > 0){
                switch (element) {
                    case btnOne[0]:
                        INSTANCES.hippo.attackOne(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo a utilisé son attaque "wings". Il reste : ${mean.pv} de pv à l'ennemi`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            alert("stop")
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" //you win
                        } 
                        //fonction attaque du boss
                        setTimeout(() => {
                        if(INSTANCES.hippo.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.hippo)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.hippo)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.hippo)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.hippo)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de l'hippo${INSTANCES.hippo.pv}`);
                        }, 1000);

                        break;

                    case btnTwo[0]:
                        INSTANCES.hippo.attackTwo(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo a utilisé son attaque "corns". Il reste : ${mean.pv} à l'ennemi`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            alert("stop")
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" //you win
                        } 
                        //fonction attaque du boss
                        setTimeout(() => {
                            if(INSTANCES.hippo.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.hippo)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.hippo)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.hippo)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.hippo)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de l'hippo${INSTANCES.hippo.pv}`);
                        }, 1000);

                        break;
                    case btnThree[0]:
                        INSTANCES.hippo.attackThree(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo a utilisé son attaque "kick". Il reste : ${mean.pv} à l'ennemi`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            alert("stop")
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" //you win
                        } 
                        //fonction attaque du boss
                        setTimeout(() => {
                            if(INSTANCES.hippo.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.hippo)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.hippo)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.hippo)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.hippo)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de l'hippo${INSTANCES.hippo.pv}`);
                        }, 1000);

                        break;
                    case btnFour[0]:
                        INSTANCES.hippo.attackFour(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo a utilisé son attaque "angryeyes". Il reste : ${mean.pv} à l'ennemi`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            alert("stop")
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" //you win
                        } 
                        //fonction attaque du boss
                        setTimeout(() => {
                            if (INSTANCES.hippo.pv <= 0) {
                                INSTANCES.hippo.pv = 0
                                alert("stop")
                                screenTwo.style.display="none";
                                screenGameOver.style.display="block"
                
                            } else if(INSTANCES.hippo.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.hippo)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.hippo)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.hippo)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.hippo)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.hippo.pv} de pv à Hippo`)
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de l'hippo${INSTANCES.hippo.pv}`);
                        }, 1000);

                        break;
                    // default:
                    //     break; 
                }
            }  
        })
    });
})

//-------------------------------------------------------------------------------
//Bouton 2 : SHARK
chooseBtnShark.addEventListener('click', ()=>{
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    gentilImg.src = INSTANCES.shark.imageFront
    
    let perso = listePerso.slice()
    perso.splice(1,1)
    perso.splice(getRandomInt(0,2), 1)
    perso.splice(getRandomInt(0,1), 1)
    console.log(perso);

    let mean 
    switch (perso[0]){
        case INSTANCES.hippo:
            mean = INSTANCES.hippo
            break
        case INSTANCES.turtle:
            mean = INSTANCES.turtle
            break
        case INSTANCES.mouth:
            mean = INSTANCES.mouth
            break 
    }

    mechantImg.src = mean.imageBack
    //Tableau des attaques
    arrayAttack.splice(1,1)
    arrayAttack.forEach(element => {
        element.classList.add('hide')
    });

    let messageScore = document.querySelector(".frame")

    let attackshark = [btnOne[1],btnTwo[1],btnThree[1],btnFour[1]]
    console.log(attackshark);

    attackshark.forEach(element => {
        element.addEventListener("click",()=>{
            if (mean.pv <= 0) {
                mean.pv = 0
                alert("stop")
                screenTwo.style.display="none";
                screenGameOver.style.display="block" //you win
                
            } else if(mean.pv > 0){
                switch (element) {
                    case btnOne[1]:
                        INSTANCES.shark.attackOne(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark a utilisé son attaque "teeth". Il reste : ${mean.pv} de pv à l'ennemi`)
                       
                        //fonction attaque du boss
                        setTimeout(() => {
                        if(INSTANCES.shark.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.shark)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.shark)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.shark)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.shark)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de Shark : ${INSTANCES.shark.pv}`);
                        }, 1000);

                        break;

                    case btnTwo[1]:
                        INSTANCES.shark.attackTwo(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark a utilisé son attaque "speed". Il reste : ${mean.pv} à l'ennemi`)
                        //fonction attaque du boss
                        setTimeout(() => {
                            if(INSTANCES.shark.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.shark)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.shark)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.shark)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.shark)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de Shark : ${INSTANCES.shark.pv}`);
                        }, 1000);

                        break;
                    case btnThree[1]:
                        INSTANCES.shark.attackThree(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark a utilisé son attaque "laser". Il reste : ${mean.pv} à l'ennemi`)
                        //fonction attaque du boss
                        setTimeout(() => {
                            if(INSTANCES.shark.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.shark)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.shark)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.shark)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.shark)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de Shark : ${INSTANCES.shark.pv}`);
                        }, 1000);

                        break;
                    case btnFour[1]:
                        INSTANCES.shark.attackFour(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark a utilisé son attaque "swallow". Il reste : ${mean.pv} à l'ennemi`)
                        //fonction attaque du boss
                        setTimeout(() => {
                            if (INSTANCES.shark.pv <= 0) {
                                INSTANCES.shark.pv = 0
                                alert("stop")
                                screenTwo.style.display="none";
                                screenGameOver.style.display="block"
                
                            } else if(INSTANCES.shark.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.shark)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.shark)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.shark)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.shark)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.shark.pv} de pv à Shark`)
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de Shark : ${INSTANCES.shark.pv}`);
                        }, 1000);
                        break;

                    default:
                        break; 
                }
            }  
        });
    });
});

//-------------------------------------------------------------------------------

//Bouton 3 : Mouth
chooseBtnMouth.addEventListener('click', ()=>{
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    gentilImg.src = INSTANCES.mouth.imageFront
    
    let perso = listePerso.slice()
    console.log(listePerso);
    perso.splice(3,1)
    perso.splice(getRandomInt(0,2), 1)
    perso.splice(getRandomInt(0,1), 1)
    console.log(perso);

    let mean 
    switch (perso[0]){
        case INSTANCES.hippo:
            mean = INSTANCES.hippo
            break
        case INSTANCES.turtle:
            mean = INSTANCES.turtle
            break
        case INSTANCES.shark:
            mean = INSTANCES.shark
            break 
    }

    mechantImg.src = mean.imageBack
    //Tableau des attaques
    arrayAttack.splice(3,1)
    arrayAttack.forEach(element => {
        element.classList.add('hide')
    });

    let messageScore = document.querySelector(".frame")

    let attackmouth = [btnOne[2],btnTwo[2],btnThree[2],btnFour[2]]

    attackmouth.forEach(element => {
        element.addEventListener("click",()=>{
            if(mean.pv > 0){
                switch (element) {
                    case btnOne[2]:
                        INSTANCES.mouth.attackOne(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth a utilisé son attaque "vomit". Il reste : ${mean.pv} de pv à l'ennemi`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            alert("stop")
                            screenTwo.style.display="none";
                            screenGameOver.style.display="block" //you win
                        }
                        //fonction attaque du boss
                        setTimeout(() => {
                        if(INSTANCES.mouth.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.mouth)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.mouth)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.mouth)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.mouth)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de Mouth : ${INSTANCES.mouth.pv}`);
                        }, 1000);

                        break;

                    case btnTwo[2]:
                        INSTANCES.mouth.attackTwo(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth a utilisé son attaque "muscle". Il reste : ${mean.pv} à l'ennemi`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            alert("stop")
                            screenTwo.style.display="none";
                            screenGameOver.style.display="block" //you win
                        }
                        //fonction attaque du boss
                        setTimeout(() => {
                            if(INSTANCES.mouth.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.mouth)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.mouth)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.mouth)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.mouth)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de Mouth : ${INSTANCES.mouth.pv}`);
                        }, 1000);

                        break;
                    case btnThree[2]:
                        INSTANCES.mouth.attackThree(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth a utilisé son attaque "flying teeth". Il reste : ${mean.pv} à l'ennemi`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            alert("stop")
                            screenTwo.style.display="none";
                            screenGameOver.style.display="block" //you win
                        }
                        //fonction attaque du boss
                        setTimeout(() => {
                            if(INSTANCES.shark.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.mouth)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.mouth)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.mouth)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.mouth)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de Mouth : ${INSTANCES.mouth.pv}`);
                        }, 1000);

                        break;
                    case btnFour[2]:
                        INSTANCES.mouth.attackFour(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth a utilisé son attaque "earthquake". Il reste : ${mouth.pv} à l'ennemi`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            alert("stop")
                            screenTwo.style.display="none";
                            screenGameOver.style.display="block" //you win
                        }
                        //fonction attaque du boss
                        setTimeout(() => {
                            if (INSTANCES.mouth.pv <= 0) {
                                INSTANCES.mouth.pv = 0
                                alert("stop")
                                screenTwo.style.display="none";
                                screenGameOver.style.display="block"
                
                            } else if(INSTANCES.shark.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.shark)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.mouth)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.mouth)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.mouth)
                                    console.log("4");
                                    messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.mouth.pv} de pv à Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        alert("stop")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                            console.log(`Vie de Mouth : ${INSTANCES.mouth.pv}`);
                        }, 1000);

                        break;
                    default:
                        break; 
                }
            }  
        })
    })
})


//-------------------------------------------------------------------------------

//Bouton 4 : Turtle
chooseBtnTurtle.addEventListener('click', ()=>{
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    gentilImg.src = INSTANCES.turtle.imageFront
    
    let perso = listePerso.slice()
    perso.splice(2,1)
    perso.splice(getRandomInt(0,2), 1)
    perso.splice(getRandomInt(0,1), 1)
    console.log(perso);

    let mean 
    switch (perso[0]){
        case INSTANCES.hippo:
            // mechantImg.src = INSTANCES.shark.imageBack
            mean = INSTANCES.hippo
            break
        case INSTANCES.mouth:
            // mechantImg.src = INSTANCES.turtle.imageBack
            mean = INSTANCES.mouth
            break
        case INSTANCES.shark:
            // mechantImg.src = INSTANCES.mouth.imageBack
            mean = INSTANCES.shark
            break 
    }

    mechantImg.src = mean.imageBack
    //Tableau des attaques
    arrayAttack.splice(2,1)
    arrayAttack.forEach(element => {
        element.classList.add('hide')
    });


let messageScore = document.querySelector(".frame")
let attackturtle= [btnOne[3],btnTwo[3],btnThree[3],btnFour[3]]

attackturtle.forEach(element => {
    element.addEventListener("click",()=>{
        if(mean.pv > 0){
            switch (element) {
                case btnOne[3]:
                    INSTANCES.turtle.attackOne(mean)
                    console.log(mean.pv);
                    messageScore.style.display="block"
                    messageScore.innerHTML = (`Turtle a utilisé son attaque "fume". Il reste : ${mean.pv} de pv à l'ennemi`)
                    if (mean.pv <= 0) {
                        mean.pv = 0
                        alert("stop")
                        screenTwo.style.display="none";
                        screenGameOver.style.display="block" //you win
                    } 
                    //fonction attaque du boss
                    setTimeout(() => {
                    if(INSTANCES.turtle.pv > 0){
                    let randomAttack = Math.floor(Math.random()*3)
                        switch (randomAttack) {
                            case 0:
                                mean.attackOne(INSTANCES.turtle)
                                console.log("1");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 1:
                                mean.attackTwo(INSTANCES.turtle)
                                console.log("2");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;

                            case 2:
                                mean.attackThree(INSTANCES.turtle)
                                console.log("3");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 3:
                                mean.attackFour(INSTANCES.turtle)
                                console.log("4");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break; 
                        }
                    }
                        console.log(`Vie de Turtle : ${INSTANCES.turtle.pv}`);
                    }, 1000);

                    break;

                case btnTwo[3]:
                    INSTANCES.turtle.attackTwo(mean)
                    console.log(mean.pv);
                    messageScore.style.display="block"
                    messageScore.innerHTML = (`Turtle a utilisé son attaque "step". Il reste : ${mean.pv} à l'ennemi`)
                    if (mean.pv <= 0) {
                        mean.pv = 0
                        alert("stop")
                        screenTwo.style.display="none";
                        screenGameOver.style.display="block" //you win
            
                    } 
                    //fonction attaque du boss
                    setTimeout(() => {
                        if(INSTANCES.turtle.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                        switch (randomAttack) {
                            case 0:
                                mean.attackOne(INSTANCES.turtle)
                                console.log("1");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 1:
                                mean.attackTwo(INSTANCES.turtle)
                                console.log("2");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;

                            case 2:
                                mean.attackThree(INSTANCES.turtle)
                                console.log("3");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 3:
                                mean.attackFour(INSTANCES.turtle)
                                console.log("4");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break; 
                        }
                    }
                        console.log(`Vie de Turtle : ${INSTANCES.turtle.pv}`);
                    }, 1000);

                    break;
                case btnThree[3]:
                    INSTANCES.turtle.attackThree(mean)
                    console.log(mean.pv);
                    messageScore.style.display="block"
                    messageScore.innerHTML = (`Turtle a utilisé son attaque "toxic air". Il reste : ${mean.pv} à l'ennemi`)
                    if (mean.pv <= 0) {
                        mean.pv = 0
                        alert("stop")
                        screenTwo.style.display="none";
                        screenGameOver.style.display="block" //you win
                    } 
                    //fonction attaque du boss
                    setTimeout(() => {
                        if(INSTANCES.turtle.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                        switch (randomAttack) {
                            case 0:
                                mean.attackOne(INSTANCES.turtle)
                                console.log("1");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 1:
                                mean.attackTwo(INSTANCES.turtle)
                                console.log("2");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;

                            case 2:
                                mean.attackThree(INSTANCES.turtle)
                                console.log("3");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 3:
                                mean.attackFour(INSTANCES.turtle)
                                console.log("4");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break; 
                        }
                    }
                        console.log(`Vie de Turtle : ${INSTANCES.turtle.pv}`);
                    }, 1000);

                    break;
                case btnFour[3]:
                    INSTANCES.turtle.attackFour(mean)
                    console.log(mean.pv);
                    messageScore.style.display="block"
                    messageScore.innerHTML = (`Turtle a utilisé son attaque "carapace". Il reste : ${mean.pv} à l'ennemi`)
                    if (mean.pv <= 0) {
                        mean.pv = 0
                        alert("stop")
                        screenTwo.style.display="none";
                        screenGameOver.style.display="block" //you win
                    } 
                    //fonction attaque du boss
                    setTimeout(() => {
                        if (INSTANCES.turtle.pv <= 0) {
                            INSTANCES.turtle.pv = 0
                            alert("stop")
                            screenTwo.style.display="none";
                            screenGameOver.style.display="block"
            
                        } else if(INSTANCES.turtle.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                        switch (randomAttack) {
                            case 0:
                                mean.attackOne(INSTANCES.turtle)
                                console.log("1");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 1:
                                mean.attackTwo(INSTANCES.turtle)
                                console.log("2");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;

                            case 2:
                                mean.attackThree(INSTANCES.turtle)
                                console.log("3");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 3:
                                mean.attackFour(INSTANCES.turtle)
                                console.log("4");
                                messageScore.innerHTML = (`${mean.nom} a utilisé son attaque. Il reste : ${INSTANCES.turtle.pv} de pv à Turtle`)
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    alert("stop")
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break; 
                        }
                    }
                        console.log(`Vie de Turtle : ${INSTANCES.turtle.pv}`);
                    }, 1000);

                    break;
                default:
                    break; 
            }
        }  
    })
})
})
//--------------------------------------------------------------------

//Bouton retour au menu
backMenu.addEventListener('click', ()=>{
    location.reload() //refresh the page (go back to menu)
})

backGame.addEventListener('click', () =>{
    location.reload() //refresh the page (go back to menu)

})