const products = [
  { id: 1, name: 'Laptop', price: 27000 },
  { id: 2, name: 'Smart Phone', price: 15000 },
  { id: 3, name: 'Tablet', price: 30000 }
];

function getTotalPrice(products) {
  return new Promise((resolve, reject) => {

    if (products.length === 0) {
      reject("No product found");
    } else {
      let total = 0;

      for (let product of products) {
        total += product.price;
      }

      resolve(total);
    }

  });
}

getTotalPrice(products)
  .then(result => console.log("Total Price:", result))
  .catch(error => console.log(error));