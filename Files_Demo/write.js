const fs = require('fs');
const readline = require('readline');

function copyProductData() {
  try {
    const data = fs.readFileSync('product.json', 'utf8');
    fs.writeFileSync('backup.json', data);
    console.log('Data copied to backup.json!');
  } catch (err) {
    console.error('Error copying product data:', err);
  }
}

// Returns a Promise that resolves when user input is done and product.json updated
function addProductFromUser() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter name: ', (name) => {
      rl.question('Enter city: ', (city) => {
        const product = { name, city };

        let products = [];
        try {
          const data = fs.readFileSync('product.json', 'utf8');
          products = JSON.parse(data);
        } catch {
          // file not found or empty, start with empty array
        }

        products.push(product);

        try {
          fs.writeFileSync('product.json', JSON.stringify(products, null, 2));
          console.log('Product added to product.json!');
          copyProductData(); // Copy after writing
          rl.close();
          resolve();
        } catch (err) {
          rl.close();
          reject(err);
        }
      });
    });
  });
}

module.exports = {
  copyProductData,
  addProductFromUser
};
