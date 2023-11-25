import Product from "@/components/Product";
import { PRODUCTS } from "@/lib/data";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold px-6 text-center">
        Welcome to the store
      </h1>
      <div className="grid grid-cols-1 mt-10">
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10 mx-auto items-start mb-10">
          {PRODUCTS.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
