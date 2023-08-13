//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name, legs ){
        this._name = name
        this._legs = legs
    }
    get name(){
        return this._name
    }
    get legs(){
        return this._legs
    }
    talk(){
        console.log(`this ${this._name} with ${this._legs} legs actually talk`);
    }
}
class goat extends Animal{
    constructor(name, legs, horn, stupid){
        super(name, legs)
        this.horn = horn
        this.stupid = stupid
    }
   
}
let goats = new goat('mama Goat', 4, 2, true);
goats.talk()
console.log (goats);

