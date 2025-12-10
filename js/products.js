// Products data - Add your chocolate products here
const products = [
    {
        id: 1,
        name: "Assorted Chocolates",
        category: "assorted",
        price: 599,
        oldPrice: 799,
        image: "products/assorted or moulded.png",
        description: "Premium assorted & moulded chocolates"
    },
    {
        id: 2,
        name: "Chocolate Bonbons",
        category: "bonbons",
        price: 399,
        oldPrice: 499,
        image: "products/bonbons.png",
        description: "Handcrafted chocolate bonbons"
    },
    {
        id: 3,
        name: "Chocolate Bars",
        category: "bars",
        price: 249,
        oldPrice: 299,
        image: "products/chocolate bars.png",
        description: "Premium chocolate bars"
    },
    {
        id: 4,
        name: "Chocolate Spread",
        category: "spread",
        price: 299,
        oldPrice: 349,
        image: "products/chocolate spread.png",
        description: "Rich chocolate spread"
    },
    {
        id: 5,
        name: "Chocolate Cookies",
        category: "cookies",
        price: 199,
        oldPrice: 249,
        image: "products/cookies.png",
        description: "Delicious chocolate cookies"
    },
    {
        id: 6,
        name: "Cocoa Powder",
        category: "powder",
        price: 349,
        oldPrice: 449,
        image: "products/cocoa powder.png",
        description: "Premium cocoa powder"
    },
    {
        id: 7,
        name: "Compound Chocolate",
        category: "compound",
        price: 279,
        oldPrice: 329,
        image: "products/compound.png",
        description: "Quality compound chocolate"
    },
    {
        id: 8,
        name: "Beverages Mix",
        category: "beverages",
        price: 229,
        oldPrice: 279,
        image: "products/beverages mix.png",
        description: "Chocolate beverage mix"
    },
    {
        id: 9,
        name: "Chocolate Tablets",
        category: "tablets",
        price: 279,
        oldPrice: 329,
        image: "products/chocolate tablets.png",
        description: "Premium chocolate tablets"
    },
    {
        id: 10,
        name: "Dehydrated Dragee",
        category: "dragee",
        price: 349,
        oldPrice: 399,
        image: "products/dehydrated dragee.png",
        description: "Crunchy dehydrated dragee"
    },
    {
        id: 11,
        name: "Double Twist",
        category: "twist",
        price: 199,
        oldPrice: 249,
        image: "products/double twist.png",
        description: "Classic double twist chocolates"
    },
    {
        id: 12,
        name: "Dryfruit Dragee",
        category: "dragee",
        price: 399,
        oldPrice: 449,
        image: "products/dryfruit dragee.png",
        description: "Premium dryfruit dragee"
    },
    {
        id: 13,
        name: "Energy Bar 1",
        category: "energy",
        price: 149,
        oldPrice: 199,
        image: "products/energy bar 1.png",
        description: "Nutritious chocolate energy bar"
    },
    {
        id: 14,
        name: "Energy Bar 2",
        category: "energy",
        price: 149,
        oldPrice: 199,
        image: "products/energy bar 2.png",
        description: "Protein-rich chocolate energy bar"
    },
    {
        id: 15,
        name: "Flow Chocolate",
        category: "flow",
        price: 449,
        oldPrice: 499,
        image: "products/flow.png",
        description: "Smooth flowing chocolate"
    },
    {
        id: 16,
        name: "Foil Wrapped",
        category: "wrapped",
        price: 299,
        oldPrice: 349,
        image: "products/foil wrapped.png",
        description: "Premium foil wrapped chocolates"
    },
    {
        id: 17,
        name: "Powder Coated",
        category: "coated",
        price: 329,
        oldPrice: 379,
        image: "products/powder coated.png",
        description: "Delicious powder coated chocolates"
    },
    {
        id: 18,
        name: "Praline",
        category: "praline",
        price: 499,
        oldPrice: 599,
        image: "products/praline.png",
        description: "Luxurious chocolate pralines"
    },
    {
        id: 19,
        name: "Sauces & Fillings",
        category: "sauces",
        price: 249,
        oldPrice: 299,
        image: "products/sauces & fillings.png",
        description: "Rich chocolate sauces & fillings"
    }
];

// Pagination variables
let currentPage = 1;
const productsPerPage = 8;

// Function to render products
function renderProducts(productsToRender = products, page = 1) {
    const productContainer = document.querySelector('.product-item-shop');
    
    if (!productContainer) {
        console.error('Product container not found');
        return;
    }

    // Calculate pagination
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = productsToRender.slice(startIndex, endIndex);
    
    // Build all HTML at once
    let productsHTML = '';

    paginatedProducts.forEach(product => {
        productsHTML += `
            <div class="col-lg-3 col-sm-6 padding-15 single-item ${product.category}">
                <div class="product-item">
                    <div class="product-thumb">
                        <img src="img/${product.image}" alt="${product.name}" onerror="this.src='img/choclate.png'">
                        <ul class="product-btn-group">
                            <li><a href='product-details.html?id=${product.id}'><i class="ti-shopping-cart-full"></i></a></li>
                            <li><a href="img/${product.image}" class="img-popup" data-gall="products-carousel"><i class="ti-gallery"></i></a></li>
                            <li><a href="#" onclick="addToWishlist(${product.id}); return false;"><i class="ti-heart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product-content text-center">
                        <h3>${product.name}</h3>
                        <h4><span>₹${product.price}</span>${product.oldPrice ? '<span class="old">₹' + product.oldPrice + '</span>' : ''}</h4>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Set all HTML at once
    productContainer.innerHTML = productsHTML;

    // Update pagination
    currentPage = page;
    renderPagination(productsToRender.length);
    
    // Update showing count
    updateShowingCount(startIndex + 1, Math.min(endIndex, productsToRender.length), productsToRender.length);
}

// Function to update showing count
function updateShowingCount(start, end, total) {
    const showingElement = document.querySelector('.product-showing p');
    if (showingElement) {
        showingElement.textContent = `Showing ${start}–${end} of ${total} results`;
    }
}

// Function to render pagination
function renderPagination(totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const paginationWrap = document.querySelector('.pagination-wrap');
    
    if (!paginationWrap || totalPages <= 1) {
        if (paginationWrap) paginationWrap.style.display = 'none';
        return;
    }
    
    paginationWrap.style.display = 'flex';
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `<li><a href="#" onclick="changePage(${currentPage - 1}); return false;" ${currentPage === 1 ? 'style="pointer-events: none; opacity: 0.5;"' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none" style="transform: rotate(180deg);"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.71097L1.71097 0L9.04371 7.33274L1.71097 14.6655L0 12.9545L5.62177 7.33274L0 1.71097Z" fill="currentColor"/></svg></a></li>`;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `<li><a href="#" onclick="changePage(${i}); return false;" class="${i === currentPage ? 'active' : ''}">${i}</a></li>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<li><span>...</span></li>`;
        }
    }
    
    // Next button
    paginationHTML += `<li><a href="#" onclick="changePage(${currentPage + 1}); return false;" ${currentPage === totalPages ? 'style="pointer-events: none; opacity: 0.5;"' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.71097L1.71097 0L9.04371 7.33274L1.71097 14.6655L0 12.9545L5.62177 7.33274L0 1.71097Z" fill="currentColor"/></svg></a></li>`;
    
    paginationWrap.innerHTML = paginationHTML;
}

// Function to change page
function changePage(page) {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (page < 1 || page > totalPages) return;
    
    renderProducts(products, page);
    
    // Scroll to top of products section
    document.querySelector('.product-section').scrollIntoView({ behavior: 'smooth' });
}

// Function to filter products
function filterProducts(category) {
    if (category === 'all' || !category) {
        renderProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        renderProducts(filtered);
    }
}

// Function to sort products
function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // Default order
            break;
    }
    
    renderProducts(sortedProducts);
}

// Function to add to wishlist (placeholder)
function addToWishlist(productId) {
    console.log('Added product to wishlist:', productId);
    alert('Product added to wishlist!');
}

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    
    // Setup sort dropdown
    const sortSelect = document.querySelector('.select-form');
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            const value = e.target.value;
            switch(value) {
                case 'Top Sales':
                    sortProducts('default');
                    break;
                case 'New Product':
                    sortProducts('default');
                    break;
                case 'A To Z Product':
                    sortProducts('name-asc');
                    break;
                case 'Price Low to High':
                    sortProducts('price-low');
                    break;
                case 'Price High to Low':
                    sortProducts('price-high');
                    break;
                default:
                    renderProducts();
            }
        });
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, renderProducts, filterProducts, sortProducts };
}
