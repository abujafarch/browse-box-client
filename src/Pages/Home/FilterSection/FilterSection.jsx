import { useRef, useState } from "react";


const FilterSection = () => {

    const [priceRangeOk, setPriceRangeOk] = useState(true)
    const maxPrice = useRef()
    const minPrice = useRef()
    console.log(priceRangeOk)

    const priceRangeCheck = (e) => {
        e.preventDefault()
        const maxPriceInt = parseInt(maxPrice.current.value)
        const minPriceInt = parseInt(minPrice.current.value)

        console.log(minPriceInt, maxPriceInt)
        console.log(priceRangeOk)

        if (maxPriceInt <= minPriceInt || !maxPriceInt || !minPriceInt) {
            setPriceRangeOk(false)
        }
        else {
            setPriceRangeOk(true)
        }
    }


    return (
        <div className="md:min-w-[250px] md:max-w-[250px] md:p-0 text-black space-y-5 md:block fixed left-0 bottom-0 bg-white w-full p-5 hidden">
            {/* BRANDS SORTING HERE */}
            <div>
                <h3 className="text-black font-bold font-raleway">BRANDS</h3>

                <div className="space-y-1 ml-3">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="brand1" value="Samsung" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand1">Samsung</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="brand1" value="iPhone" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand1">iPhone</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="brand1" value="Dell" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand1">Dell</label>
                    </div>
                </div>
            </div>

            {/* CATEGORY SORTING HERE */}
            <div>
                <h3 className="text-black font-bold font-raleway">CATEGORY</h3>

                <div className="space-y-1 ml-3">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="brand1" value="Samsung" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand1">Mobile</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="brand1" value="iPhone" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand1">Laptop</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="brand1" value="Dell" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand1">Stationary</label>
                    </div>
                </div>
            </div>

            {/* PRICE RANGE SORTING HERE */}
            <form onChange={priceRangeCheck} >
                <h3 className="text-black font-bold font-raleway">PRICE RANGE</h3>

                <div className="flex gap-2 items-center mt-2">
                    <div className="">
                        <p>Min Price</p>
                        <input ref={minPrice} type="number" name="minPrice" className="outline-none px-3 py-2 border-2 border-[#E8788C] rounded-sm w-full appearance-none" min={0} defaultValue={0} />
                    </div>

                    <p className="mt-5 border w-3 border-[#E8788C]"></p>

                    <div className="">
                        <p className="text-right">Max Price</p>
                        <input ref={maxPrice} type="number" name="maxPrice" className="outline-none px-3 py-2 border-2 border-[#E8788C] rounded-sm w-full appearance-none" min={1} defaultValue={1} />
                    </div>
                </div>

                <div className="mt-5">
                    <button disabled={!priceRangeOk} className={`w-full rounded-sm py-2 text-white text-lg ${priceRangeOk? "bg-[#E8788C]" :"bg-gray-500 cursor-not-allowed"}`}>Search</button>
                </div>
            </form>

            {/* PRICE LOW HIGH SORTING HERE */}
            <div>
                <h3 className="text-black font-bold font-raleway">SORT AS PRICE</h3>

                <form className="space-y-1 ml-3">
                    <div className="flex items-center gap-2">
                        <input type="radio" name="brand1" value="Samsung" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand1">Low to High</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="brand1" value="iPhone" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand1">High to Low</label>
                    </div>
                </form>
            </div>

            {/* SORTING AS DATE */}
            <div>
                <h3 className="text-black font-bold font-raleway">SORT AS DATE</h3>

                <form className="space-y-1 ml-3">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="brand1" value="Samsung" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand1">Newest to Oldest</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FilterSection;