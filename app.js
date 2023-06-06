// // const color = 'teal';

// // const obj = {};
// // obj.color = '#123111';
// // obj[color] = '#123111';
// // obj[1+4-2*8] = '#123111';

// // for(let [k,v] of Object.entries(obj)){
// //     console.log(k,v);
// // }

// // const add = (x,y) => x+y;
// // const mult = (x,y) =>x*y;
// // const square = (x) => x*x;
// // const power = (x,y) = x**y;

// // // const myMath = {};
// // // myMath.add = add;
// // // myMath.mult = mult;

// // // const myMat = {add,mult,square, power};

// // const myMath = {
// //     add: function(x,y){
// //         return x,y;
// //     },
// //     mult : (x,y)=>{
// //         return x * y;
// //     }
// // };

// // function getHypotenuse(a,b){
// //     return Math.sqrt(a**2 + b**2);
// // }

// // function getArea(a,b){
// //     return a*b/2;
// // }

// // let side1 = 4;
// // const side2 = 3;
// // let
// // const side3 = getHypotenuse(side1,side2);
// // const area = getArea(side1,side2);
// // side1 = 9;

// const rightTriangle = {
//     a: 9,
//     b: 12,
//     printThis(){
//         console.log(this);
//     },
//     getArea(){
//         return this.a * this.b / 2;
//     },
//     getHypotenuse(){
//         this.printThis();
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     }
// }


// function Triangle(a,b){
//     this.a = a;
//     this.b = b;
// }


// Triangle.prototype.getArea = function(){
//     return this.a * this.b / 2;
// };
// Triangle.prototype.getHypotenuse = function(){
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
// };
// const tri1 = new Triangle(3,4);
// tri1.getHypotenuse();  //5
// const tri2 = new Triangle(9,12);
// tri2.getHypotenuse();  //15

// // Array.prototype.push = function (val){
// //  console.log(`SO YOU WANT TO ADD ${val}`);
// //  console.log("SORRY DON'T FEEL LIKE IT");
// // }

class Triangle{
    constructor(a,b,c){
        for(let side of [a,b,c]){
            if(!Number.isFinite(side) || side<=0 ){
                throw new Error("Sides must be positive numbers");
            }
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet(){
        console.log('hello from triangle!!!');
    }
    display(){
        console.log(`Triangle with sides of ${this.a} and ${this.b} and ${this.c}`)
    }
    getArea(){
        const {a,b,c} = this;
        const s = (a+b+c) /2;
        return Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    isBig(){
        return this.getArea()> 50;
    }
}

// const t1 = new Triangle(3,4,5);
// const t2 = new Triangle(5,9,10);
// const t3 = new Triangle(30,40,50);
// t1.display();


class RightTriangle extends Triangle{
    constructor(a,b,c){
        if(a*a + b*b !== c*c){
            throw new Error('Invalid C side for right triangle');
        };    
        console.log("INSIDE RIGHT TRIANGLE CONSTRUCTOR");
        super(a,b,c);
        this.hypot = c;
    }
    isRightTriangle(){
        return true;
    }
    display(){
        return "Right " +super.display();
    }
}