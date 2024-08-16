import ProductCard from "./ProductCard";

const ProductSection = () => {
    return (
        <div className="">
            <h1 className="text-black text-center font-bold font-raleway mb-5">PRODUCTS YOU LOOKING FOR</h1>
            <div className="flex gap-3 flex-wrap justify-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default ProductSection;