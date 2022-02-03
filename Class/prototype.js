function Electronic(){
    this.product = [1,2,3,4,6]
}

function Hardware(){
    this.product = [1]
}
function totalProductCount() {
    return this.product.length    
}

function getProductById(id){
    return this.product.filter(function(element){
        if(Element.id === id){
            return element
        }       
    })
}

Electronic.prototype.totalProductCount = totalProductCount;

const ak = new Electronic()
console.log(ak.totalProductCount());