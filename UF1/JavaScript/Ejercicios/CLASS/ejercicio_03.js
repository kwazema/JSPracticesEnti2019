
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() { return this.width * this.height}
    getPirament() { return (this.width * 2) +  (this.height*2)}
}

const restangle_01 = new Rectangle(8,5);
const restangle_02 = new Rectangle(15,20);

console.log(restangle_01.getArea());
console.log(restangle_01.getPirament());

console.log(restangle_02.getArea());
console.log(restangle_02.getPirament());
