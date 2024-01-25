import * as INSTANCES from './module/instances.js'

//Boutons accueil
let chooseBtnHippo = document.querySelectorAll(".infos button")[0] //boutons 4 choix
let chooseBtnShark = document.querySelectorAll(".infos button")[1] //boutons 4 choix
let chooseBtnMouth = document.querySelectorAll(".infos button")[2] //boutons 4 choix
let chooseBtnTurtle = document.querySelectorAll(".infos button")[3] //boutons 4 choix

//Images players
let allImage = [
    "https://img.pokemondb.net/sprites/black-white/anim/shiny/kingdra.gif",
    "https://img.pokemondb.net/sprites/black-white/anim/normal/sharpedo.gif",
    "https://img.pokemondb.net/sprites/black-white/anim/shiny/exploud.gif",
    "https://img.pokemondb.net/sprites/black-white/anim/shiny/torkoal.gif"
]

//Image
let hippoImg = document.querySelector(".hippo")
let sharkImg = document.querySelector(".shark")
let mouthImg = document.querySelector(".mouth")
let turtleImg = document.querySelector(".turtle")

let listAllImg = [hippoImg,sharkImg,mouthImg,turtleImg]
let newRandom = []

//Ecrans
let screenOne= document.querySelector(".mapWater") //ecran 1
let screenTwo = document.querySelector(".battleWater") //ecran 2
let backMenu = document.querySelector(".battleWater button") //bouton menu
let allCharacters = [INSTANCES.hippo,INSTANCES.shark,INSTANCES.mouth,INSTANCES.turtle]

let chooseCharacter


//Bouton 1 : Hippo
chooseBtnHippo.addEventListener('click', ()=>{
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    chooseCharacter = allCharacters[0]
    console.log(chooseCharacter);
    hippoImg.classList.add("choix")

    // let i = Math.floor(Math.random() * (listAllImg.splice(i, 1)).length);
    // newRandom.push(listAllImg[i]);
    
    console.log(listAllImg);

    // let newRandom = listAllImg.splice(0,1) 
    // newRandom = Math.floor(Math.random() * listAllImg.length)
    // return listAllImg[newRandom]
    

    document.querySelectorAll(".pokemon").forEach(element => {
        if (element.classList.contains("choix")) {
            console.log("ok");
            console.log(hippoImg);
        } else{
            element.classList.add("hide")
        }
    })  
})

//Bouton 2 : Shark
chooseBtnShark.addEventListener('click', ()=>{
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    chooseCharacter = allCharacters[1]
    console.log(chooseCharacter);
    sharkImg.classList.add("choix")

    Array.from(document.querySelectorAll(".pokemon")).forEach(element => {
        if (element.classList.contains("choix")) {
            console.log("ok");
            console.log(sharkImg);
        } else{
            element.classList.add("hide")
        }
    })  
})

//Bouton 3 : Mouth
chooseBtnMouth.addEventListener('click', ()=>{
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    chooseCharacter = allCharacters[2]
    console.log(chooseCharacter);
    mouthImg.classList.add("choix")

    Array.from(document.querySelectorAll(".pokemon")).forEach(element => {
        if (element.classList.contains("choix")) {
            console.log("ok");
            console.log(mouthImg);
        } else{
            element.classList.add("hide")
        }
    })  
})

//Bouton 4 : Turtle
chooseBtnTurtle.addEventListener('click', ()=>{
    screenTwo.style.display="block";
    screenOne.classList.add("hide")
    chooseCharacter = allCharacters[3]
    console.log(chooseCharacter);
    turtleImg.classList.add("choix")

    Array.from(document.querySelectorAll(".pokemon")).forEach(element => {
        if (element.classList.contains("choix")) {
            console.log("ok");
            console.log(turtleImg);
        } else{
            element.classList.add("hide")
        }
    })  
})


//Bouton retour au menu
backMenu.addEventListener('click', ()=>{
    location.reload() //refresh the page (go back to menu)
})
