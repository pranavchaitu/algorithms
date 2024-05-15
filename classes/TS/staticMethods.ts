//class methods or static methods
//this is for the created  object from the class (the blueprint to create objects)

class Point {
    x : number
    y : number
    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }
    static calculateDistance(a : Point, b : Point){
        const dx = a.x - b.x
        const dy = a.y - b.y
        return console.log(`distance b/w two points is ${Math.hypot(dx,dy).toFixed(2)} units`)
    }
}

//this will be a right way as we are decalring a method which inself takes two classes and we can call it on class 

const a = new Point(1,3)
const b = new Point(1,5)
Point.calculateDistance(a,b)

//this will be a wrong way as we can see the method should not be dedicated to a single instance right
// a.calculateDistance(9,7)

