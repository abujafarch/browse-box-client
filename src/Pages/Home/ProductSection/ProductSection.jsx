import ProductCard from "./ProductCard";

const ProductSection = ({ filterOpen, setFilterOpen, products }) => {
    return (
        <div className="">
            <h1 className="text-black text-center font-bold font-raleway mb-5">PRODUCTS YOU LOOKING FOR</h1>

            <div className="md:hidden text-white flex justify-center my-5" >
                <button
                    onClick={() => setFilterOpen(true)}
                    className="font-inter font-medium text-lg bg-[#E8788C] rounded-sm px-3 py-1 ">
                    Filter</button>
            </div>


            <div className="gap-3 grid lg:grid-cols-3 sm:grid-cols-2">
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