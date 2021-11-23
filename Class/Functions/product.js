var uniq = 1;
function Product(){
    this.product_ID;
    this.productName;
    this.productCost;
    this.productMRP;
    this.isOnSale;
    this.productCategory;
    this.productSubCategory; 
    this.quantity;
    this.colors;
    this.size;
    
    this.data = function(productName, productCost, productMRP, isOnSale, productCategory, productSubCategory, quantity, color, size){
        product_ID = uniq++;
        this.productName = productName;      
        this.productCost = productCost;        
        this.productMRP = productMRP;
        this.isOnSale = isOnSale;
        this.productCategory = productCategory;
        this.productSubCategory = productSubCategory;
        this.quantity = quantity;
        this.colors = color.map(function(element){
            return element;
        });
        this.size = size.map(function(element){
            return element;
        });
    }

    this.printData = function(){
        console.log(
            product_ID,
            this.productName,
            this.productCost,
            this.productMRP,
            this.isOnSale,
            this.productCategory,
            this.productSubCategory, 
            this.quantity,
            this.colors,
            this.size);
        }
}

const mobileX1 = new Product()
mobileX1.data("Samsung", 10000, 12000, 12345, 'A', 'AA', 10, ["Red", "Green", "Black"], [11, 22, 33]);
mobileX1.printData();

const mobileX2 = new Product()
mobileX2.data("Realme", 10000, 12000, 12345, 'A', 'AA', 10, ["Red", "Green", "Black"], [11, 22, 33]);
mobileX2.printData();

const mobileX3 = new Product()
mobileX3.data("Realme", 10000, 12000, 12345, 'A', 'AA', 10, ["Red", "Green", "Black"], [11, 22, 33]);
mobileX3.printData();

const mobileX4 = new Product()
mobileX4.data("Realme", 10000, 12000, 12345, 'A', 'AA', 10, ["Red", "Green", "Black"], [11, 22, 33]);
mobileX4.printData();


// let pID=1;
// function Product(product_Cost,product_MRP,isONSale,productCategory,productSubCategory,Quantity,colorsArray,sizeArray){
//     product_ID=pID++
//     this.product_ID=product_ID
//     this.product_Cost=product_Cost
//     this.product_MRP=product_MRP
//     this.isONSale=isONSale
//     this.productCategory=productCategory
//     this.productSubCategory=productSubCategory
//     this.Quantity=Quantity
//     // this.colorsArray=colorsArray
//     // this.sizeArray=sizeArray
//     this.colorsArray=colorsArray.map(function(colors){
//         return colors
//     })
//     this.sizeArray=sizeArray.map(function(size){
//         return size
//     })

// }
// const mobileX1=new Product(200,300,"Yes","Womens Wear","Jeans",4,["Red","Yellow"],[32,60])
// const mobileX2=new Product(300,400,"Yes","Womens Wear","Jeans",4,["Red","Yellow"],[32,60])
// console.log(mobileX1.product_ID+" " + " "+mobileX1.product_Cost+" "+mobileX1.product_MRP+" "+" "+mobileX1.isONSale+" "+mobileX1.productCategory+" "+mobileX1.productSubCategory+" "+mobileX1.Quantity+" "+mobileX1.colorsArray+" "+mobileX1.sizeArray)
// console.log(mobileX2.product_ID+" " + " "+mobileX2.product_Cost+" "+mobileX2.product_MRP+" "+" "+mobileX2.isONSale+" "+mobileX2.productCategory+" "+mobileX2.productSubCategory+" "+mobileX2.Quantity+" "+mobileX2.colorsArray+" "+mobileX2.sizeArray)