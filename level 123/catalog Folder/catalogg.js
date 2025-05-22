let productData = [];
let firstPage = true;
let renderCartDiv = false;
let cartItems = [];
let totalPrice = 0;

const container = document.getElementById('container');
const cartDiv = document.getElementById("squadre");
const totalPriceElement = document.getElementById("totalPrice");

// kalatashi vamatebt unordered listit itemeebsss
let cartItemsList = document.createElement("ul");
cartItemsList.id = "cartItemsList";
cartItemsList.style.listStyle = "none";
cartItemsList.style.padding = "10px";
cartDiv.insertBefore(cartItemsList, document.getElementById("cart_btn1"));

// Toggle Cart Visibility
document.getElementById("icon_img3").addEventListener("click", () => {
  renderCartDiv = !renderCartDiv;
  cartDiv.style.display = renderCartDiv ? "block" : "none";
});

// Fetch Product Dataaaaaaaaaaaaaaaaaaa
fetch('https://fakestoreapi.com/products/')
  .then(res => res.json())
  .then(data => {
    productData = data.slice(0, 16);
    renderProducts(productData.slice(0, 8));
  })
  .catch(err => console.error("Error loading data:", err));

//varenderebtt productebss card shiiiiiiiii!!!!!!!!!!
function renderProducts(products) {
  container.innerHTML = '';

  products.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" style="width:300px; height:150px; object-fit:contain; margin-top:20px;" />
      <h3>${item.title}</h3>
      <p>$${item.price}</p>
      <button class="wishlistBtn">🖤 Add Wishlist</button>
      <button class="cartBtn">🛒 Add To Cart</button>
    `;

    // Add to cart
    const cartBtn = card.querySelector('.cartBtn');
    cartBtn.addEventListener('click', () => {
      addToCart(item);
    });

    container.appendChild(card);
  });
}

// cart adding function!!!!!!!!
function addToCart(item) {
  cartItems.push(item);
  totalPrice += item.price;

  updateCartDisplay();
}

// Update Cart Display
function updateCartDisplay() {
  cartItemsList.innerHTML = '';

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.style.marginBottom = '10px';

    li.innerHTML = `
      ${item.title} - $${item.price.toFixed(2)}
      <button style="margin-left: 10px; cursor: pointer; background-color: red; color: white; border: none; border-radius: 5px; width: 35px; height:25px" data-index="${index}">🗑️</button>
    `;

    const deleteBtn = li.querySelector('button');
    deleteBtn.addEventListener('click', () => {
      removeFromCart(index);
    });

    cartItemsList.appendChild(li);
  });

  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Remove from Cart
function removeFromCart(index) {
  const item = cartItems[index];
  if (!item) return;

  totalPrice -= item.price;
  cartItems.splice(index, 1);

  updateCartDisplay();
}

// Sort Products
document.getElementById('selection_section').addEventListener('change', function () {
  switch (this.value) {
    case 'price-asc':
      productData.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      productData.sort((a, b) => b.price - a.price);
      break;
    case 'title-asc':
      productData.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'title-desc':
      productData.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }

  const visibleProducts = firstPage ? productData.slice(0, 8) : productData.slice(8);
  renderProducts(visibleProducts);
});

// Pagination
document.getElementById("btn1").addEventListener("click", () => {
  renderProducts(productData.slice(0, 8));
  firstPage = true;
});

document.getElementById("btn2").addEventListener("click", () => {
  renderProducts(productData.slice(8));
  firstPage = false;
});


document.getElementById('selection_section2').addEventListener('change', function () {
  const category = this.value;

  let filtered = [];

  switch (category) {
    case 'Tecnics':
      filtered = productData.filter(item => item.category === "electronics");
      break;
    case 'Jewerly':
      filtered = productData.filter(item => item.category === "jewelery");
      break;
    case 'Man Section':
      filtered = productData.filter(item => item.category === "men's clothing");
      break;
    case 'Woman Section':
      filtered = productData.filter(item => item.category === "women's clothing");
      break;
    default:
      filtered = productData;
  }

  // Reset to first page when filtering
  firstPage = true;
  renderProducts(filtered.slice(0, 8));
});