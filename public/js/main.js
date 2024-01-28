import * as INSTANCES from './module/instances.js'
import * as CLASS from './module/class.js'

function sound() {
    INSTANCES.music.loop = true
    INSTANCES.music.volume = 0.2
    INSTANCES.music.play()
}

//Welcome bouton
let chooseBtnHippo = document.querySelectorAll(".infos button")[0] //boutons 4 choix
let chooseBtnShark = document.querySelectorAll(".infos button")[1] //boutons 4 choix
let chooseBtnMouth = document.querySelectorAll(".infos button")[2] //boutons 4 choix
let chooseBtnTurtle = document.querySelectorAll(".infos button")[3] //boutons 4 choix

//Ecrans
let screenOne= document.querySelector(".mapWater") //screen 1
let screenTwo = document.querySelector(".battleWater") //screen 2
let backMenu = document.querySelector(".battleWater button") //bouton menu
let backGame = document.querySelector(".gameOver button")
let backGamebis = document.querySelector(".champion button")
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
let progress = document.querySelector(".progres")

let barEnnemy = document.querySelector(".progresEnnemy")

//-------------------------------------------------------------------------------
//Bouton 1 : Hippo
chooseBtnHippo.addEventListener('click', ()=>{
    sound()
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    gentilDiv.setAttribute("class","gentil")
    gentilImg.src = INSTANCES.hippo.imageFront 
    progress.style.display="block"

    //Getting random player for the ennemy
    let perso = listePerso.slice()
        perso.splice(0,1)
        perso.splice(getRandomInt(0,2), 1)
        perso.splice(getRandomInt(0,1), 1)
        console.log(perso);

    //Creating a new variable to target the ennemy 
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

    //Array of the attack of our player
    arrayAttack.splice(0,1)
    arrayAttack.forEach(element => {
        element.classList.add('hide')
    });

    //Display of the fight
    let messageScore = document.querySelector(".frame")

    let attackhippo = [btnOne[0],btnTwo[0],btnThree[0],btnFour[0]]

    let life 
    let lifeEnnemy

    attackhippo.forEach(element => {
        element.addEventListener("click",()=>{
            mechantImg.classList.add("damage")
            gentilDiv.classList.add("moving")
            if(mean.pv > 0){
                switch (element) {
                    case btnOne[0]:
                        INSTANCES.hippo.attackOne(mean)
                        console.log(mean.pv);
                        //Progression bar of ennemy:
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo used his attack "wings". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            alert("Ennemy die")
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        } 
                        //Random attack of the ennemy
                        setTimeout(() => {
                        if(INSTANCES.hippo.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.hippo)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    //Progression bar of Hippo:
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"

                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        alert("Hippo dead")
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.hippo)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                     
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.hippo)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                     
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.hippo)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                     life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                     console.log(life);
                                     progress.style.width=life +"%"
                                     
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);
                        break;

                    case btnTwo[0]:
                        INSTANCES.hippo.attackTwo(mean)
                        console.log(mean.pv);
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"

                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo used his attack "corns". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        } 
                        setTimeout(() => {
                            if(INSTANCES.hippo.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.hippo)
                                    console.log("1");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.hippo)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.hippo)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.hippo)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);

                        break;
                    case btnThree[0]:
                        INSTANCES.hippo.attackThree(mean)
                        console.log(mean.pv);
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"

                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo used his attack "kick". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        } 
                        setTimeout(() => {
                            if(INSTANCES.hippo.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.hippo)
                                    console.log("1");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.hippo)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.hippo)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.hippo)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);

                        break;
                    case btnFour[0]:
                        INSTANCES.hippo.attackFour(mean)
                        console.log(mean.pv);
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"

                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo used his attack "angryeyes". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        } 
                        setTimeout(() => {
                            if (INSTANCES.hippo.pv <= 0) {
                                INSTANCES.hippo.pv = 0
                                screenTwo.style.display="none";
                                screenGameOver.style.display="block"
                
                            } else if(INSTANCES.hippo.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.hippo)
                                    console.log("1");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.hippo)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.hippo)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.hippo)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.hippo.pv} of life score for Hippo`)
                                    life = Math.round((INSTANCES.hippo.pv / INSTANCES.hippo.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.hippo.pv <= 0) {
                                        INSTANCES.hippo.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);
                        break;
                }
            }  
        })
    });
})

//Bouton 2 : SHARK
chooseBtnShark.addEventListener('click', ()=>{
    sound()
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

    arrayAttack.splice(1,1)
    arrayAttack.forEach(element => {
        element.classList.add('hide')
    });

    let messageScore = document.querySelector(".frame")

    let attackshark = [btnOne[1],btnTwo[1],btnThree[1],btnFour[1]]
    console.log(attackshark);
    let life 
    let lifeEnnemy

    attackshark.forEach(element => {
        element.addEventListener("click",()=>{
            mechantImg.classList.add("damage")
            gentilDiv.classList.add("moving")
            if(mean.pv > 0){
                switch (element) {
                    case btnOne[1]:
                        INSTANCES.shark.attackOne(mean)
                        console.log(mean.pv);
                        mechantImg.classList.add("damageEnnemy")
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark used his attack "teeth". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block"  
                        } 
                        setTimeout(() => {
                        if(INSTANCES.shark.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.shark)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.shark)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.shark)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.shark)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);

                        break;

                    case btnTwo[1]:
                        INSTANCES.shark.attackTwo(mean)
                        console.log(mean.pv);
                        mechantImg.classList.add("damageEnnemy")
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark used his attack "speed". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        } 
                        setTimeout(() => {
                            if(INSTANCES.shark.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.shark)
                                    console.log("1");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.shark)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.shark)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.shark)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);

                        break;
                    case btnThree[1]:
                        INSTANCES.shark.attackThree(mean)
                        console.log(mean.pv);
                        mechantImg.classList.add("damageEnnemy")
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark used his attack "laser". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        } 
                        setTimeout(() => {
                            if(INSTANCES.shark.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.shark)
                                    console.log("1");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.shark)
                                    console.log("2");
                                    messageScore.innerHTML = (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.shark)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.shark)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);

                        break;
                    case btnFour[1]:
                        INSTANCES.shark.attackFour(mean)
                        console.log(mean.pv);
                        mechantImg.classList.add("damageEnnemy")
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark used his attack "swallow". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        } 
                        setTimeout(() => {
                            if (INSTANCES.shark.pv <= 0) {
                                INSTANCES.shark.pv = 0
                                screenTwo.style.display="none";
                                screenGameOver.style.display="block"
                
                            } else if(INSTANCES.shark.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.shark)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.shark)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.shark)
                                    console.log("3");
                                    messageScore.innerHTML = (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.shark)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack.There is ${INSTANCES.shark.pv} life score for Shark`)
                                    life = Math.round((INSTANCES.shark.pv / INSTANCES.shark.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.shark.pv <= 0) {
                                        INSTANCES.shark.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);
                        break;
                }
            }  
        });
    });
});

//Bouton 3 : Mouth
chooseBtnMouth.addEventListener('click', ()=>{
    sound()
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

    arrayAttack.splice(3,1)
    arrayAttack.forEach(element => {
        element.classList.add('hide')
    });

    let messageScore = document.querySelector(".frame")

    let attackmouth = [btnOne[2],btnTwo[2],btnThree[2],btnFour[2]]
    let life 
    let lifeEnnemy

    attackmouth.forEach(element => {
        element.addEventListener("click",()=>{
            mechantImg.classList.add("damage")
            gentilDiv.classList.add("moving")
            if(mean.pv > 0){
                switch (element) {
                    case btnOne[2]:
                        INSTANCES.mouth.attackOne(mean)
                        console.log(mean.pv);
                        mechantImg.classList.add("damageEnnemy")
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth used his attack "vomit". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        }
                        setTimeout(() => {
                        if(INSTANCES.mouth.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.mouth)
                                    console.log("1");
                                    messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.mouth)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.mouth)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.mouth)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);

                        break;

                    case btnTwo[2]:
                        INSTANCES.mouth.attackTwo(mean)
                        console.log(mean.pv);
                        mechantImg.classList.add("damageEnnemy")
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth used his attack "muscle". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        }
                        setTimeout(() => {
                            if(INSTANCES.mouth.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.mouth)
                                    console.log("1");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.mouth)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.mouth)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.mouth)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);

                        break;
                    case btnThree[2]:
                        INSTANCES.mouth.attackThree(mean)
                        console.log(mean.pv);
                        mechantImg.classList.add("damageEnnemy")
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth used his attack "flying teeth". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        }
                        setTimeout(() => {
                            if(INSTANCES.mouth.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.mouth)
                                    console.log("1");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.mouth)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.mouth)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.mouth)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);

                        break;
                    case btnFour[2]:
                        INSTANCES.mouth.attackFour(mean)
                        console.log(mean.pv);
                        mechantImg.classList.add("damageEnnemy")
                        lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                        console.log(lifeEnnemy);
                        barEnnemy.style.width = lifeEnnemy + "%"
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth used his attack "earthquake". There is ${mean.pv} life score for the ennemy`)
                        if (mean.pv <= 0) {
                            mean.pv = 0
                            screenTwo.style.display="none";
                            screenWinner.style.display="block" 
                        }
                        setTimeout(() => {
                            if (INSTANCES.mouth.pv <= 0) {
                                INSTANCES.mouth.pv = 0
                                screenTwo.style.display="none";
                                screenGameOver.style.display="block"
                
                            } else if(INSTANCES.mouth.pv > 0){
                            let randomAttack = Math.floor(Math.random()*3)
                            switch (randomAttack) {
                                case 0:
                                    mean.attackOne(INSTANCES.mouth)
                                    console.log("1");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 1:
                                    mean.attackTwo(INSTANCES.mouth)
                                    console.log("2");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;

                                case 2:
                                    mean.attackThree(INSTANCES.mouth)
                                    console.log("3");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break;
                                case 3:
                                    mean.attackFour(INSTANCES.mouth)
                                    console.log("4");
                                    messageScore.innerHTML =  (`${mean.nom} used his attack. There is ${INSTANCES.mouth.pv} life score for Mouth`)
                                    life = Math.round((INSTANCES.mouth.pv / INSTANCES.mouth.pvMax)*100)                        
                                    console.log(life);
                                    progress.style.width=life +"%"
                                    if (INSTANCES.mouth.pv <= 0) {
                                        INSTANCES.mouth.pv = 0
                                        screenTwo.style.display="none";
                                        screenGameOver.style.display="block"
                                    } 
                                    break; 
                            }
                        }
                        }, 3000);
                        break;
                }
            }  
        })
    })
})

//Bouton 4 : Turtle
chooseBtnTurtle.addEventListener('click', ()=>{
    sound()
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
            mean = INSTANCES.hippo
            break
        case INSTANCES.mouth:
            mean = INSTANCES.mouth
            break
        case INSTANCES.shark:
            mean = INSTANCES.shark
            break 
    }
    mechantImg.src = mean.imageBack

    arrayAttack.splice(2,1)
    arrayAttack.forEach(element => {
        element.classList.add('hide')
    });


let messageScore = document.querySelector(".frame")
let attackturtle= [btnOne[3],btnTwo[3],btnThree[3],btnFour[3]]
let life
let lifeEnnemy

attackturtle.forEach(element => {
    element.addEventListener("click",()=>{
        mechantImg.classList.add("damage")
        gentilDiv.classList.add("moving")
        if(mean.pv > 0){
            switch (element) {
                case btnOne[3]:
                    INSTANCES.turtle.attackOne(mean)
                    console.log(mean.pv);
                    mechantImg.classList.add("damageEnnemy")
                    lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                    console.log(lifeEnnemy);
                    barEnnemy.style.width = lifeEnnemy + "%"
                    messageScore.style.display="block"
                    messageScore.innerHTML = (`Turtle used his attack "fume". There is ${mean.pv} of life score for the ennemy`)
                    if (mean.pv <= 0) {
                        mean.pv = 0
                        screenTwo.style.display="none";
                        screenWinner.style.display="block" 
                    } 
                    setTimeout(() => {
                    if(INSTANCES.turtle.pv > 0){
                    let randomAttack = Math.floor(Math.random()*3)
                        switch (randomAttack) {
                            case 0:
                                mean.attackOne(INSTANCES.turtle)
                                console.log("1");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 1:
                                mean.attackTwo(INSTANCES.turtle)
                                console.log("2");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;

                            case 2:
                                mean.attackThree(INSTANCES.turtle)
                                console.log("3");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 3:
                                mean.attackFour(INSTANCES.turtle)
                                console.log("4");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break; 
                        }
                    }
                    }, 3000);

                    break;

                case btnTwo[3]:
                    INSTANCES.turtle.attackTwo(mean)
                    console.log(mean.pv);
                    mechantImg.classList.add("damageEnnemy")
                    lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                    console.log(lifeEnnemy);
                    barEnnemy.style.width = lifeEnnemy + "%"
                    messageScore.style.display="block"
                    messageScore.innerHTML = (`Turtle used his attack "step". There is ${mean.pv} of life score for the ennemy`)
                    if (mean.pv <= 0) {
                        mean.pv = 0
                        screenTwo.style.display="none";
                        screenWinner.style.display="block" 
                    } 
                    setTimeout(() => {
                        if(INSTANCES.turtle.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                        switch (randomAttack) {
                            case 0:
                                mean.attackOne(INSTANCES.turtle)
                                console.log("1");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 1:
                                mean.attackTwo(INSTANCES.turtle)
                                console.log("2");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;

                            case 2:
                                mean.attackThree(INSTANCES.turtle)
                                console.log("3");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 3:
                                mean.attackFour(INSTANCES.turtle)
                                console.log("4");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break; 
                        }
                    }
                    }, 3000);

                    break;
                case btnThree[3]:
                    INSTANCES.turtle.attackThree(mean)
                    console.log(mean.pv);
                    mechantImg.classList.add("damageEnnemy")
                    lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                    console.log(lifeEnnemy);
                    barEnnemy.style.width = lifeEnnemy + "%"
                    messageScore.style.display="block"
                    messageScore.innerHTML = (`Turtle used his attack "toxic air". There is ${mean.pv} of life score for the ennemy`)
                    if (mean.pv <= 0) {
                        mean.pv = 0
                        screenTwo.style.display="none";
                        screenWinner.style.display="block" 
                    } 
                    setTimeout(() => {
                        if(INSTANCES.turtle.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                        switch (randomAttack) {
                            case 0:
                                mean.attackOne(INSTANCES.turtle)
                                console.log("1");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 1:
                                mean.attackTwo(INSTANCES.turtle)
                                console.log("2");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;

                            case 2:
                                mean.attackThree(INSTANCES.turtle)
                                console.log("3");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 3:
                                mean.attackFour(INSTANCES.turtle)
                                console.log("4");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break; 
                        }
                    }
                    }, 3000);

                    break;
                case btnFour[3]:
                    INSTANCES.turtle.attackFour(mean)
                    console.log(mean.pv);
                    mechantImg.classList.add("damageEnnemy")
                    lifeEnnemy = Math.round((mean.pv / mean.pvMax)*100)
                    console.log(lifeEnnemy);
                    barEnnemy.style.width = lifeEnnemy + "%"
                    messageScore.style.display="block"
                    messageScore.innerHTML = (`Turtle used his attack "carapace". There is ${mean.pv} of life score for the ennemy`)
                    if (mean.pv <= 0) {
                        mean.pv = 0
                        screenTwo.style.display="none";
                        screenWinner.style.display="block" 
                    } 
                    setTimeout(() => {
                        if (INSTANCES.turtle.pv <= 0) {
                            INSTANCES.turtle.pv = 0
                            screenTwo.style.display="none";
                            screenGameOver.style.display="block"
            
                        } else if(INSTANCES.turtle.pv > 0){
                        let randomAttack = Math.floor(Math.random()*3)
                        switch (randomAttack) {
                            case 0:
                                mean.attackOne(INSTANCES.turtle)
                                console.log("1");
                                messageScore.innerHTML =(`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 1:
                                mean.attackTwo(INSTANCES.turtle)
                                console.log("2");
                                messageScore.innerHTML =(`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;

                            case 2:
                                mean.attackThree(INSTANCES.turtle)
                                console.log("3");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break;
                            case 3:
                                mean.attackFour(INSTANCES.turtle)
                                console.log("4");
                                messageScore.innerHTML = (`${mean.nom} used his attack. There is ${INSTANCES.turtle.pv} life score for Turtle`)
                                life = Math.round((INSTANCES.turtle.pv / INSTANCES.turtle.pvMax)*100)                        
                                console.log(life);
                                progress.style.width=life +"%"
                                if (INSTANCES.turtle.pv <= 0) {
                                    INSTANCES.turtle.pv = 0
                                    screenTwo.style.display="none";
                                    screenGameOver.style.display="block"
                                } 
                                break; 
                        }
                    }
                    }, 3000);
                    break;
            }
        }  
    })
})
})
//Bouton retour au menu
backMenu.addEventListener('click', ()=>{
    location.reload() //refresh the page (go back to menu)
})

backGame.addEventListener('click', () =>{
    location.reload() //refresh the page (go back to menu)
})

backGamebis.addEventListener('click', () =>{
    location.reload() //refresh the page (go back to menu)
})