

let employee={
    rate:10,
    hours:10,
    getwagte:function(){
        return this.rate*this.hours;
    }
}

console.log(employee.getwagte());


function Circle (radius){
    this.radius=radius;
    this.draw=function(){
        console.log("draw");
    }
}

const another=new Circle(1);
console.log(another.draw());