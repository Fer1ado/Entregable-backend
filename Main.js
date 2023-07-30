

class ProductManager{
    constructor(){
        this.products = []
    }

    

    addProduct(product) {

        let productIsOkForAdding = true;

        if (!this.isProductComplete(product)) {
            console.error('The product is not complete.');
            productIsOkForAdding = false;
        }
    
        if (!productIsOkForAdding) {
            console.error('The product could not be added.');
            return;
        }

        ProductManager.this.products.push(product);

    }

    getProducts() {
        return ProductManager.products;
    }




    isProductComplete(product) {
        for (const prop in product) {
            if (!product[prop]) {
                return false;
            }
        }
        return true;
    }

}

class Product{
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.agregarId()

    }

    static agregarId(){
       if(this.incrementoId){
        this.incrementoId++
       } else{
        this.incrementoId = 1
       }
       return this.incrementoId

    }
    
}



const producto1 = new Product("manzana", "roja", 550, [], "MM284", 76)
const producto2 = new Product("pera", "verde", 687, [], "MM248", 54)
const producto3 = new Product("mandarina", "naranja", 354, [], "MA275", 206)
const producto4 = new Product("Piña", "dulce", 845, [], "PI265", 126)
const productofallido = new Product("casona de la esquina antigua")
//console.log(producto1)

const agregarProducto = new ProductManager()

agregarProducto.addProduct(producto1)
agregarProducto.addProduct(producto2)
agregarProducto.addProduct(producto3)
agregarProducto.addProduct(producto4)

agregarProducto.addProduct(producto4) // producto ya agregado
agregarProducto.addProduct(productofallido) // producto que no cumple con criterio



//console.log(agregarProducto)



const check = (productofallido) => {

const chequeo = comprobar(productofallido)
    if(chequeo.includes(undefined)) {
        console.log("Faltan campos obligatorios para agregar el producto")
    }
    else 
    {console.log(productofallido)}
}





//const chequeo = Object.values(productofallido)
//console.log(chequeo.includes(undefined))

function isProductComplete(productofallido) {
   for (const prop in productofallido) {
        if (!productofallido[prop]) {
            return false;
        }
    }else { return true;
    console.log("chequeo exitoso")
    }
}
