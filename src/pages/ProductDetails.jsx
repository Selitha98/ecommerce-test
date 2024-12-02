import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import { useProductDetails } from "../hooks/useProducts";

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
  const {productId} = useParams()
  const { data :productDetails, isLoading} = useProductDetails(productId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen mt-16">
        <Spinner size={70} />
      </div>
    );
  }

  return (
    <div className="p-4 mt-14">
       <Product product={productDetails} />
    </div>
  )
}

export default ProductDetails
