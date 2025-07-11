import AnalyticsFilterBar from "./components/AnalyticsFilterBar";
import AnalyticsPageCards from "./components/AnalyticsPageCards";
import ConversionFunnel from "./components/ConversionFunnel";
import ProductViewsOverTime from "./components/ProductViewsOverTime";
import ConversionRateByProduct from "./components/ConversinRateByProduct";
import ProductsPerformance from "./components/ProductsPerformance";

export default function AnalyticsPage(){
  return (
    <div className="grid gap-2 p-4">
        <AnalyticsFilterBar />
        <AnalyticsPageCards />
        <ConversionFunnel />
        <div className="flex flex-row gap-6">
          <ProductViewsOverTime />
          <ConversionRateByProduct />
        </div>
        <ProductsPerformance />
    </div>
  )
}


