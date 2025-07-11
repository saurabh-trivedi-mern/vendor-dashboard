import FeaturedProductsSection from "./components/FeaturedProductsSection";
import ProductsFilterBar from "./components/ProductsFilterBar";
import ProductPageCards from "./components/ProductsPageCards";

export default function Products() {
  return (
    <div className="grid gap-4 p-5">
        <ProductsFilterBar />
        <ProductPageCards />
        <FeaturedProductsSection />
    </div>
  )
}


