import ProductCard from "./ProductCard";

const ProductSection = ({ filterOpen, setFilterOpen }) => {
    return (
        <div className="">
            <h1 className="text-black text-center font-bold font-raleway mb-5">PRODUCTS YOU LOOKING FOR</h1>

            <div className="md:hidden text-white flex justify-center my-5" >
                <button
                    onClick={() => setFilterOpen(true)}
                    className="font-inter font-medium text-lg bg-[#E8788C] rounded-sm px-3 py-1 ">
                    Filter</button>
            </div>


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