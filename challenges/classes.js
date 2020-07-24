// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length,width,height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker(4,5,5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


// so I feel like I wouldn't use super in this since we are only using the 1 side length but I am going to base everything on the length property so that I can show to use super
class CubeMaker extends CuboidMaker{
    constructor(length,width,height){
        super(length,width,height);
        this.width = this.length;
        this.height = this.length;
    }
    cubeVolume(){
        return Math.pow(this.length,3)
    }

    cubeSurfaceArea(){
        return 6 * Math.pow(this.length,2)
    }
}