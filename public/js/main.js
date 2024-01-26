import * as INSTANCES from './module/instances.js'
import * as CLASS from './module/class.js'

//Boutons accueil
let chooseBtnHippo = document.querySelectorAll(".infos button")[0] //boutons 4 choix
let chooseBtnShark = document.querySelectorAll(".infos button")[1] //boutons 4 choix
let chooseBtnMouth = document.querySelectorAll(".infos button")[2] //boutons 4 choix
let chooseBtnTurtle = document.querySelectorAll(".infos button")[3] //boutons 4 choix

//Image
let hippoImg = document.querySelector(".hippo")
let sharkImg = document.querySelector(".shark")
let mouthImg = document.querySelector(".mouth")
let turtleImg = document.querySelector(".turtle")

let newRandom = []

//Ecrans
let screenOne= document.querySelector(".mapWater") //ecran 1
let screenTwo = document.querySelector(".battleWater") //ecran 2
let backMenu = document.querySelector(".battleWater button") //bouton menu

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let solocharacter = document.querySelectorAll(".characters")
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
console.log(INSTANCES.hippo.image);
//Bouton 1 : Hippo
chooseBtnHippo.addEventListener('click', ()=>{
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    gentilDiv.setAttribute("class","gentil")
    gentilImg.src = INSTANCES.hippo.imageFront
    
    // hippoImg.classList.add("choix") //ajoute le pokémon choisit en haut à droite
    let perso = listePerso.slice()
    perso.splice(0,1)
    perso.splice(getRandomInt(0,2), 1)
    perso.splice(getRandomInt(0,1), 1)
    console.log(perso);

    let mean 
    switch (perso[0]){
        case INSTANCES.shark:
            // mechantImg.src = INSTANCES.shark.imageBack
            mean = INSTANCES.shark

            break
        case INSTANCES.turtle:
            // mechantImg.src = INSTANCES.turtle.imageBack
            mean = INSTANCES.turtle
            break
        case INSTANCES.mouth:
            // mechantImg.src = INSTANCES.mouth.imageBack
            mean = INSTANCES.mouth
            break 
    }
    mechantImg.src = mean.imageBack

    //Tableau des attaques
    arrayAttack.splice(0,1)
    arrayAttack.forEach(element => {
        element.classList.add('hide')
    });

    // btnOne[0].addEventListener('click', () =>{
    //         console.log("hello");
    //         INSTANCES.hippo.wings(mean)
    //         console.log(mean.pv);
    //     }) 
    //     btnTwo[0].addEventListener('click', () =>{
    //         INSTANCES.hippo.corns(mean)
    //         console.log(mean.pv);
    //     }) 
    //     btnThree[0].addEventListener('click', () =>{
    //         INSTANCES.hippo.kick(mean)
    //         console.log(mean.pv);
    //     }) 
    //     btnFour[0].addEventListener('click', () =>{
    //         INSTANCES.hippo.angryEyes(mean)
    //         console.log(mean.pv);
    //     }) 
    
    let messageScore = document.querySelector(".frame")

    let attackhippo = [btnOne[0],btnTwo[0],btnThree[0],btnFour[0]]

    // let listAttackShark = [teeth(ennemy),speed(ennemy),laser(ennemy),swallow(ennemy)]

    attackhippo.forEach(element => {
        element.addEventListener("click",()=>{
            if (mean.pv <= 0) {
                mean.pv = 0
                alert("stop")
                screenTwo.style.display="none";

            } else if(mean.pv > 0){
                switch (element) {
                    case btnOne[0]:
                        INSTANCES.hippo.wings(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo a utilisé son attaque "wings". Il reste : ${mean.pv} de pv à l'ennemi`)
                        break;
                        //fonction attaque du boss

                    case btnTwo[0]:
                        INSTANCES.hippo.corns(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo a utilisé son attaque "corns". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                    case btnThree[0]:
                        INSTANCES.hippo.kick(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo a utilisé son attaque "kick". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                    case btnFour[0]:
                        INSTANCES.hippo.angryEyes(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Hippo a utilisé son attaque "angryeyes". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                
                    default:
                        break; 
                }
            }
            
        })
    });

    })


    // let oneEnnemy = ennemy.splice(Math.floor(Math.random() * listAllImg.length -1), 1)
    
    // let myennemy
    // ennemy.forEach(element => {
    //     element.classList.add('hide')    

    // console.log(oneEnnemy) //target de ennemy
    // });

    // let backArray;
    // backArray = []
    // listAllImg.forEach(element => {
    //     if (element.classList.contains('choix') == false){
    //         backArray.push(element);
    //     }
    // });

    // backArray.forEach(backSrc => {
    //     if (backSrc.classList.contains('shark')) {
    //         backSrc.firstElementChild.setAttribute('src', 'public/src/img/back/backsharpedo.gif')
            
    //     } else if (backSrc.classList.contains('mouth')){
    //         backSrc.firstElementChild.setAttribute('src', 'public/src/img/back/backexploud.gif')

    //     } else if (backSrc.classList.contains('turtle')){
    //         backSrc.firstElementChild.setAttribute('src', 'public/src/img/back/backturtle.gif')

    //     } else if (backSrc.classList.contains('hippo')){
    //         backSrc.firstElementChild.setAttribute('src', 'public/src/img/back/backkingdra.gif')
    //     }
    // });
    

    // !! Create a shallow copy of listAllImg to avoid modifying it directly
    // let ennemy = listAllImg.slice()
    // let oneEnnemy = ennemy.splice(Math.floor(Math.random() * listAllImg.length -1), 1)
    
    // let myennemy
    // ennemy.forEach(element => {
    //     element.classList.add('hide')    

    // console.log(oneEnnemy) //target de ennemy
    // });

    
    // while (INSTANCES.hippo.pv >0 && myennemy.pv>0) {

    //     btnOne[0].addEventListener('click', () =>{
    //         console.log("hello");
    //         INSTANCES.hippo.wings(oneEnnemy)
    //         console.log(oneEnnemy.pv);
    //     }) 
        
    //     btnTwo[0].addEventListener('click', () =>{
    //         INSTANCES.hippo.corns(oneEnnemy)
    //         console.log(oneEnnemy.pv);
    //     }) 
        
    //     btnThree[0].addEventListener('click', () =>{
    //         INSTANCES.hippo.kick(oneEnnemy)
    //         console.log(oneEnnemy.pv);
    //     }) 
    //     btnFour[0].addEventListener('click', () =>{
    //         INSTANCES.hippo.angryEyes(oneEnnemy)
    //         console.log(oneEnnemy.pv);
    //     }) 

    //     }
    

//-------------------------------------------------------------------------------
//Bouton 2 : SHARK
chooseBtnShark.addEventListener('click', ()=>{
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    gentilImg.src = INSTANCES.shark.imageFront
    
    // hippoImg.classList.add("choix") //ajoute le pokémon choisit en haut à droite
    let perso = listePerso.slice()
    perso.splice(1,1)
    perso.splice(getRandomInt(0,2), 1)
    perso.splice(getRandomInt(0,1), 1)
    console.log(perso);

    let mean 
    switch (perso[0]){
        case INSTANCES.hippo:
            // mechantImg.src = INSTANCES.shark.imageBack
            mean = INSTANCES.hippo

            break
        case INSTANCES.turtle:
            // mechantImg.src = INSTANCES.turtle.imageBack
            mean = INSTANCES.turtle
            break
        case INSTANCES.mouth:
            // mechantImg.src = INSTANCES.mouth.imageBack
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

    // let listAttackShark = [teeth(ennemy),speed(ennemy),laser(ennemy),swallow(ennemy)]

    attackshark.forEach(element => {
        element.addEventListener("click",()=>{
            if (mean.pv <= 0) {
                mean.pv = 0
                alert("stop")
                screenTwo.style.display="none";

            } else if(mean.pv > 0){
                switch (element) {
                    case btnOne[1]:
                        INSTANCES.shark.teeth(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark a utilisé son attaque "wings". Il reste : ${mean.pv} de pv à l'ennemi`)
                        break;
                        //fonction attaque du boss

                    case btnTwo[1]:
                        INSTANCES.shark.speed(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark a utilisé son attaque "corns". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                    case btnThree[1]:
                        INSTANCES.shark.laser(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark a utilisé son attaque "kick". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                    case btnFour[1]:
                        INSTANCES.shark.swallow(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Shark a utilisé son attaque "angryeyes". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                
                    default:
                        break; 
                }
            }
            
            
        })
    });
})

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
            // mechantImg.src = INSTANCES.shark.imageBack
            mean = INSTANCES.hippo
            break
        case INSTANCES.turtle:
            // mechantImg.src = INSTANCES.turtle.imageBack
            mean = INSTANCES.turtle
            break
        case INSTANCES.shark:
            // mechantImg.src = INSTANCES.mouth.imageBack
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
            if (mean.pv <= 0) {
                mean.pv = 0
                alert("stop")
                screenTwo.style.display="none";

            } else if(mean.pv > 0){
                switch (element) {
                    case btnOne[2]:
                        INSTANCES.mouth.vomit(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth a utilisé son attaque "wings". Il reste : ${mean.pv} de pv à l'ennemi`)
                        break;
                        //fonction attaque du boss

                    case btnTwo[2]:
                        INSTANCES.mouth.muscle(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth a utilisé son attaque "corns". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                    case btnThree[2]:
                        INSTANCES.mouth.flyingTeeth(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth a utilisé son attaque "kick". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                    case btnFour[2]:
                        INSTANCES.mouth.eathquake(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Mouth a utilisé son attaque "angryeyes". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                
                    default:
                        break; 
                }
            }
            
            
        })
    });
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
            if (mean.pv <= 0) {
                mean.pv = 0
                alert("stop")
                screenTwo.style.display="none";

            } else if(mean.pv > 0){
                switch (element) {
                    case btnOne[3]:
                        INSTANCES.turtle.fume(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Turtle a utilisé son attaque "wings". Il reste : ${mean.pv} de pv à l'ennemi`)
                        break;
                        //fonction attaque du boss

                    case btnTwo[3]:
                        INSTANCES.turtle.step(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Turtle a utilisé son attaque "corns". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                    case btnThree[3]:
                        INSTANCES.turtle.toxicAir(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Turtle a utilisé son attaque "kick". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                    case btnFour[3]:
                        INSTANCES.turtle.carapace(mean)
                        console.log(mean.pv);
                        messageScore.style.display="block"
                        messageScore.innerHTML = (`Turtle a utilisé son attaque "angryeyes". Il reste : ${mean.pv} à l'ennemi`)
                        break;
                
                    default:
                        break; 
                }
            }
            
            
        })
    });
})
//--------------------------------------------------------------------

//Bouton retour au menu
backMenu.addEventListener('click', ()=>{
    location.reload() //refresh the page (go back to menu)
})