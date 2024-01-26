export class WaterCharacters{
    constructor(nom,pv,pa,imageFront,imageBack){
        this.nom = nom
        this.pv = pv
        this.pa = pa
        this.imageFront = imageFront
        this.imageBack = imageBack
    }
}

//HIPPO
export class Hippo extends WaterCharacters {
    constructor(nom,pv,pa,imageFront,imageBack){
        super(nom,pv,pa,imageFront,imageBack)
    }
        //Attaque 1
        wings(ennemy){
            if (this.pv >0) {
                ennemy.pv -= this.pa + Math.floor(this.pa/100 *10)
            }
        } ;

        //Attaque 2
        corns(ennemy){
            if (this.pv >0) {
                ennemy.pv -= this.pa
            }
        } ;

        //Attaque 3
        kick(ennemy){
            if (this.pv >0) {
                ennemy.pv -= this.pa + Math.floor(this.pa/100 *25)
            }
        } ;

        //Attaque 4
        angryEyes(ennemy){
            if (this.pv >0) {
                ennemy.pv -= this.pa + Math.floor(this.pa/100 *40)
            }
        }  
}

//SHARK
export class Shark extends WaterCharacters {
    constructor(nom,pv,pa,imageFront,imageBack){
        super(nom,pv,pa,imageFront,imageBack)
    }
    //Attaque 1
    teeth(ennemy){
        if (this.pv >0) {
            ennemy.pv -= this.pa + Math.floor(this.pa/100 *35)
        }
    }

    //Attaque 2
    speed(ennemy){
        if (this.pv >0) {
            ennemy.pv -= this.pa + Math.floor(this.pa/100 *50)
        }
    }

    //Attaque 3
    laser(ennemy){
        if (this.pv >0) {
            ennemy.pv -= this.pa *3
        }
    }

    //Attaque 4
    swallow(ennemy){
        if (this.pv >0) {
            ennemy.pv -= this.pa *2 + Math.floor(this.pa/100 *10)
        }
    }
}


//MOUTH
export class Mouth extends WaterCharacters {
    constructor(nom,pv,pa,imageFront,imageBack){
        super(nom,pv,pa,imageFront,imageBack)
    }

    //Attaque 1
    vomit(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa *2 + Math.floor(this.pa/100 *40)
        }
    }
    //Attaque 2
    muscle(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa *3
        }
    }

    //Attaque 3
    flyingTeeth(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa *2 + Math.floor(this.pa/100 *10)
        }
    }

    //Attaque 4
    eathquake(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa *4 + Math.floor(this.pa/100 *20)
        }
    }
}

//TURTLE
export class Turtle extends WaterCharacters {
    constructor(nom,pv,pa,imageFront,imageBack){
        super(nom,pv,pa,imageFront,imageBack)
    }

    fume(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa + Math.floor(this.pa/100 *25)
        }
    }

    step(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa + Math.floor(this.pa/100 *30)
        }
    }

    toxicAir(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa *2 + Math.floor(this.pa/100 *10)
        }
    }

    carapace(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa + Math.floor(this.pa/100 *7)
        }
    }
}
