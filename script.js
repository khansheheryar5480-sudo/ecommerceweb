function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 1; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


let img = document.createElement("img");

// Set attributes
img.src1 = "https://thursd.com/storage/media/60906/floral-fragrance-from-the-pink-roses-of-Grasse.jpg";
img.src2 = "https://www.intenseoud.com/cdn/shop/files/1_a3c66e15-4c97-4bd9-8514-28f6776b034f.jpg?v=1737915949";
img.src3 = "https://m.media-amazon.com/images/I/61icsCcbdKL._SL1500_.jpg";
img.src4 = "https://www.bandrbands.com/images/products/detail/18mm-19mm-20mm-21mm-22mm-Oak-Italian-Classic-Vintage-Leather-Watch-Band-Strap-Vintage-Tudor-Submariner-79090.jpg";
img.src5 = "https://th.bing.com/th/id/R.7b4623f64e4b5d472fb12325ddc4d56f?rik=na7NUIKDO%2f0xUQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-T8dtDMg4JQ0%2fTdUn_qMjZmI%2fAAAAAAAAAK8%2fJDwvp4WO7Tw%2fs1600%2f04.jpg&ehk=YneUSUEoYY0WHr1eLOWD1ceaH2kXUPq4zKPXTjW%2bVHk%3d&risl=&pid=ImgRaw&r=0";
img.src6 = "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/4/e/4e7500fLOUAE00006028n_1.jpg";
img.src7 = "https://cdn.mos.cms.futurecdn.net/55ZQmVwWJDrUhztCxVy7Vo-480-80.jpg";
img.src8 = "https://www.pricerunner.dk/product/3239000223/Apple-iPhone-17-256GB-Black.jpg";
img.alt ="";
img.width = 200;

// Add it to the page
document.body.appendChild(img);
const products = [
    { name: "Rose Perfume", category: "perfume", price: 1200,image:img.src1},
    { name: "Oud Perfume", category: "perfume", price: 1800,image:img.src2},
    { name: "Smart Watch", category: "watch", price: 3500,image:img.src3 },
    { name: "Classic Watch", category: "watch", price: 2500,image:img.src4 },
    { name: "Running Shoes", category: "shoes", price: 2200,image:img.src5 },
    { name: "Leather Shoes", category: "shoes", price: 3000,image:img.src6 },
    { name: "folding phone", category: "Phone", price: 150000,image:img.src7 },
    { name: "Smart phone", category: "Phone", price: 70000,image:img.src8 },
    { name: "Smart phone", category: "Phone", price: 70000,image:img.src8 },
    { name: "Smart phone", category: "Phone", price: 70000,image:img.src8 },
    { name: "Smart phone", category: "Phone", price: 70000,image:img.src8 },
    { name: "Smart phone", category: "Phone", price: 70000,image:img.src8 }
];
const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const buttons = document.querySelectorAll(".buttons button");

let currentCategory = "all";

// Display products
function displayProducts(items) {
    productContainer.innerHTML = "";

    if (items.length === 0) {
        productContainer.innerHTML = "<p>No products found</p>";
        return;
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <img src="${item.image}" height="200" width="200">
      
      <h3>${item.name}</h3>
      <p>Category: ${item.category}</p>
      <p class="price">₹${item.price}</p>
      <a id="${item.name}" href="product.html">Buy</a>
    `;

        productContainer.appendChild(card);
    });
}

// Filter logic
function filterProducts() {
    const searchText = searchInput.value.toLowerCase();

    const filtered = products.filter(product => {
        const matchCategory =
            currentCategory === "all" || product.category === currentCategory;

        const matchSearch =
            product.name.toLowerCase().includes(searchText);

        return matchCategory && matchSearch;
    });

    displayProducts(filtered);
}

// Button click
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        currentCategory = btn.dataset.category;
        filterProducts();
    });
});

// Search input
searchInput.addEventListener("keyup", filterProducts);

// Initial load
displayProducts(products);

