// calculate area of rectangle usig constructor;

class Area{
    length; width;
    constructor(l, w){
        this.length = l;
        this.width = w;        
    }

    calculateArea(){
        return (this.length*this.width);
    }
}

const rec = new Area(4, 5);
console.log(rec.calculateArea());