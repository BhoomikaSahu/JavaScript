function Electronic(){
    this.product = [1,2,3,4,5,6]
}
function Hardware(){
    this.product = []
}
function totalProductCount(){
  return this.product.length
}
function getProductById(id){
  return this.product.filter(function(element){
    if (element.id === id){
      return element
    }
  })
}

Electronic.prototype.totalProductCount = totalProductCount;
Hardware.prototype.totalProductCount = totalProductCount;

Electronic.prototype.getProductById = getProductById;
Hardware.prototype.getProductById = getProductById;

const ak = new Electronic()
console.log(ak.totalProductCount())