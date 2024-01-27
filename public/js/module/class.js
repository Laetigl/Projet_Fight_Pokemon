export class WaterCharacters{
    constructor(nom,pv,pa,imageFront,imageBack,){
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
        attackOne(ennemy){
            if (this.pv >0) {
                ennemy.pv -= this.pa + Math.floor(this.pa/100 *10)
            }
        } ;

        //Attaque 2
        attackTwo(ennemy){
            if (this.pv >0) {
                ennemy.pv -= this.pa
            }
        } ;

        //Attaque 3
        attackThree(ennemy){
            if (this.pv >0) {
                ennemy.pv -= this.pa + Math.floor(this.pa/100 *25)
            }
        } ;

        //Attaque 4
        attackFour(ennemy){
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
    attackOne(ennemy){
        if (this.pv >0) {
            ennemy.pv -= this.pa + Math.floor(this.pa/100 *35)
        }
    }

    //Attaque 2
    attackTwo(ennemy){
        if (this.pv >0) {
            ennemy.pv -= this.pa + Math.floor(this.pa/100 *50)
        }
    }

    //Attaque 3
    attackThree(ennemy){
        if (this.pv >0) {
            ennemy.pv -= this.pa *3
        }
    }

    //Attaque 4
    attackFour(ennemy){
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
    attackOne(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa *2 + Math.floor(this.pa/100 *40)
        }
    }
    //Attaque 2
    attackTwo(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa *3
        }
    }

    //Attaque 3
    attackThree(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa *2 + Math.floor(this.pa/100 *10)
        }
    }

    //Attaque 4
    attackFour(ennemy){
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

    attackOne(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa + Math.floor(this.pa/100 *25)
        }
    }

    attackTwo(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa + Math.floor(this.pa/100 *30)
        }
    }

    attackThree(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa *2 + Math.floor(this.pa/100 *10)
        }
    }

    attackFour(ennemy){
        if (this.pv>0) {
            ennemy.pv -= this.pa + Math.floor(this.pa/100 *7)
        }
    }
}
