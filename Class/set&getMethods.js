// calculate area of rectengle usig set and get method;

class Area{
    length; width;
    
    set setLength(length){
         this.length = length;
    }
    set setWidth(width){
           this.width = width;
    }
    get getArea(){
        return this.length* this.width;
    }
}

const rec = new Area;
rec.setLength = 5;
rec.setWidth = 4;
console.log(rec.getArea);
