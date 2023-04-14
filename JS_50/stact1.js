

var stack = function () {
    this.count = 0
    this.storage = {}


    //add a value on the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and return the values at the end of the stack
    this.pop = function () {
        if (this.count === 0) {
            return undefined
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count]
        return result;
    }

    //show the size of the numbers
    this.size=function(){
        return this.count;
    }

    // show the item on the bottom 
    this.peek=function(){
        return this.storage[this.count-1];
    }
}


var myStack=new stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(5);
myStack.pop()

console.log(myStack.size());
