import Product from "../components/Product";

// Example usage
const exampleProduct = {
    name: "Vintage Leather Jacket",
    shortDescription: "Classic stylish leather jacket with modern fit",
    price: 249.99,
    originalPrice: 299.99,
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/401",
      "/api/placeholder/600/402"
    ],
    description: `
      <p>Elevate your style with our Vintage Leather Jacket, crafted for the modern adventurer. Made from premium genuine leather, this jacket offers both durability and timeless elegance.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>100% Genuine Leather</li>
        <li>Classic Fit with Modern Silhouette</li>
        <li>Multiple Pockets for Convenience</li>
        <li>Soft Inner Lining for Comfort</li>
      </ul>
      
      <p>Whether you're hitting the city streets or exploring the countryside, this jacket is your perfect companion.</p>
    `
  };

function ProductDetails() {

  return (
    <div className="p-4 mt-14">
       <Product product={exampleProduct} />
       
    </div>
  )
}

export default ProductDetails
