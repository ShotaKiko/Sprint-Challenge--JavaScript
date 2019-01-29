// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attr) {
//     this.length = attr.length;
//     this.width = attr.width;
//     this.height = attr.height;
//   }

// CuboidMaker.prototype.volume = function(){
//     return `The volume is ${this.length * this.width * this.height} units cubed`
//   }
  
//   CuboidMaker.prototype.surfaceArea = function(){
//     return `The surface area is ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)} units squared`
//   }



class CuboidMakerRefactor {
    constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
    }

    calculateVolume(){
        return `The volume is ${this.length * this.width * this.height} units cubed`
    }

    calculateSurfaceArea(){
        return `The surface area is ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)} units squared`
    }
}


const cuboidRefactor = new CuboidMakerRefactor(4, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('~~~~~~~~~~~~~~~~~~Below is the refactored to class syntax version~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(cuboidRefactor.calculateVolume()); // 100
console.log(cuboidRefactor.calculateSurfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerRefactor {
    constructor(length, width, height){
        super(length, width, height);
    }
    cubeVolume(){
        return `The volume of this cube is ${this.length**3} units cubed.`
    }
    cubeSA(){
        return `The surface area of this cube is ${6 * (this.length** 2)} units squared.`
    }
}

const gameCube = new CubeMaker(2, 2, 2)
console.log('')
console.log('~~~~~~~~~~~~~~~~~~Below is the stretch goal logs for cube volume and SA~~~~~~~~~~~~~~~~~~~~~~~~~~~~``')
console.log(gameCube.cubeVolume()); // 8
console.log(gameCube.cubeSA()); //24
