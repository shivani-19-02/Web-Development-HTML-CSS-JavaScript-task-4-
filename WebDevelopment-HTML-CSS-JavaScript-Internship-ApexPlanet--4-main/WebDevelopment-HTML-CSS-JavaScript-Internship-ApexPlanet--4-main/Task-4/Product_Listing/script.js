const products = [
  { name: "Laptop", category: "electronics", price: 1200, rating: 4.7 },
  { name: "T-Shirt", category: "clothing", price: 25, rating: 4.1 },
  { name: "Smartphone", category: "electronics", price: 800, rating: 4.5 },
  { name: "Jacket", category: "clothing", price: 60, rating: 4.3 },
  { name: "Headphones", category: "electronics", price: 200, rating: 4.8 },
  { name: "Jeans", category: "clothing", price: 40, rating: 4.0 }
];

document.getElementById('categoryFilter').addEventListener('change', renderProducts);
document.getElementById('sortOption').addEventListener('change', renderProducts);

function renderProducts() {
  const category = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('sortOption').value;

  let filtered = category === "all" ? [...products] : products.filter(p => p.category === category);

  switch (sort) {
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "priceLow":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "priceHigh":
      filtered.sort((a, b) => b.price - a.price);
      break;
  }

  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p><strong>Category:</strong> ${p.category}</p>
      <p><strong>Price:</strong> $${p.price}</p>
      <p><strong>Rating:</strong> ${p.rating}</p>
    `;
    productList.appendChild(div);
  });
}

renderProducts();