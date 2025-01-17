class Calculator {
    //properties
    resultAdd;
    resultMultiply;
    //Methods
    add(a, b) {
        this.resultAdd = a + b
        return this.resultAdd
    }
    multiply(a, b) {
        this.resultMultiply = a * b
    }
    square() {
        console.log(this.resultMultiply ** 2)
    }
}
const obj = new Calculator()
res1 = obj.add(2, 5)
console.log(res1)
obj.multiply(2, 5)
obj.square()
// console.log(obj.resultMultiply)
