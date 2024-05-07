//defien product array of objects
const products = [
    { name: "Laptop", category: "Electronics", price: 1000, stock: 4 },
    { name: "Shirt", category: "Apparel", price: 20, stock: 10 },
    { name: "Coffee Maker", category: "Appliances", price: 100, stock: 3 },
    { name: "Book", category: "Stationery", price: 15, stock: 20 },
    { name: "Phone", category: "Electronics", price: 8000, stock: 8 },
    { name: "Gas Stove", category: "Appliances", price: 3000, stock: 0}
   ];
  //function that filters the `products` array to only include products from a specific category Electronics
   var filteredArrayElectronics=  products.filter(function(product){
    return product.category.match('Electronics')
 
 });     

 console.log("Avaialble Elcronics items are:"); 
 console.log(filteredArrayElectronics);
  //Filter by Price Range between 1500 to 9000
  var filteredArrayPrice=  products.filter(function(product){
    return (product.price >1500 && product.price <9000)
 
 });    
 console.log("Items with in the Price range 1500 and 9000 are:"); 
 console.log(filteredArrayPrice);
 //*Filter Out of Stock Products

 var filteredArrayOutOfStock=  products.filter(function(product){
    return (product.stock<1)
 
 });
 console.log("Items that are out of stock:"); 
 console.log(filteredArrayOutOfStock);