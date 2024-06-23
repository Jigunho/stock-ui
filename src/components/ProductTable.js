// const api = require('./common/api');
alert('test')
document.addEventListener('DOMContentLoaded', () => {
  const productInput = document.getElementById('productInput');
  const fetchProductsButton = document.getElementById('fetchProducts');
  const productTable = document.getElementById('productTable');

  console.log('test')

  fetchProductsButton.addEventListener('click', () => {
    alert('click')
    
    return
    const query = productInput.value;
    api.get(`/products?query=${query}`)
      .then(response => {
        const products = response.data;
        productTable.innerHTML = `
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          ${products.map(product => `
            <tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
            </tr>
          `).join('')}
        `;
      })
      .catch(error => {
        productTable.innerHTML = 'Error fetching products';
        console.error(error);
      });
  });
});
