# Dynamic Product System - Browns and More

## Overview
The shop page now uses a dynamic product loading system that fetches products from a JavaScript data source and displays them automatically.

## How It Works

### 1. Product Data (`js/products.js`)
All products are defined in the `products` array in `js/products.js`. Each product has:
- `id`: Unique product identifier
- `name`: Product name
- `category`: Product category (truffles, bars, boxes, specialty, pralines, caramel)
- `price`: Current price in INR
- `oldPrice`: Original price (for showing discount)
- `image`: Path to product image (relative to `img/` folder)
- `description`: Short product description

### 2. Product Images
Product images should be placed in: `img/products/`

**Image naming convention:**
- product-1.jpg
- product-2.jpg
- product-3.jpg
- etc.

The system includes error handling - if an image is not found, it falls back to a default image.

### 3. Adding New Products

To add a new product, edit `js/products.js` and add an object to the `products` array:

```javascript
{
    id: 9,
    name: "Your Product Name",
    category: "category-name",
    price: 299,
    oldPrice: 399,
    image: "products/product-9.jpg",
    description: "Product description"
}
```

Then add the corresponding image to `img/products/` folder.

### 4. Features

**Sorting:**
- Default order
- A to Z (alphabetical)
- Price: Low to High
- Price: High to Low

**Filtering:**
Products can be filtered by category programmatically using:
```javascript
filterProducts('category-name');
```

**Dynamic Count:**
The "Showing X of Y results" text updates automatically based on displayed products.

### 5. Product Categories

Current categories:
- `truffles` - Chocolate truffles
- `bars` - Chocolate bars
- `boxes` - Gift boxes and assortments
- `specialty` - Special chocolates
- `pralines` - Pralines
- `caramel` - Caramel chocolates

You can add more categories as needed.

### 6. Customization

**To change currency:**
Edit line 60 in `products.js`:
```javascript
<h4><span>₹${product.price}</span>...
```
Replace `₹` with your desired currency symbol.

**To modify product layout:**
Edit the `productHTML` template in the `renderProducts()` function in `products.js`.

## File Structure

```
brownsandmore/
├── img/
│   └── products/          ← Place product images here
│       ├── product-1.jpg
│       ├── product-2.jpg
│       └── ...
├── js/
│   ├── products.js        ← Product data and rendering logic
│   └── main.js
└── shop.html              ← Shop page
```

## Testing

1. Open `shop.html` in a browser
2. Products should load automatically
3. Try the sorting dropdown
4. Check that images display correctly

## Troubleshooting

**Products not showing:**
- Check browser console for errors (F12)
- Verify `products.js` is loaded before `main.js`
- Ensure product data is valid JSON format

**Images not displaying:**
- Verify images are in `img/products/` folder
- Check image file names match the `image` property in product data
- Ensure image files are .jpg, .png, or .webp format

**Sorting not working:**
- Check that the select dropdown has class `select-form`
- Verify event listener is attached in `products.js`

## Future Enhancements

Possible additions:
- Add to cart functionality
- Search functionality
- Price range filtering
- Category filter buttons
- Product quick view modal
- Load more/pagination
- Backend integration (API)
