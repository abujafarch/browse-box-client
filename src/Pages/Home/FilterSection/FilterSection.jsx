import { useEffect, useRef, useState } from "react";


const FilterSection = ({ filterOpen, setFilterOpen }) => {

    const [priceRangeOk, setPriceRangeOk] = useState(true)
    const [brands, setBrands] = useState([])
    const [category, setCategory] = useState([])
    // const [brandArray, setBrandArray] = useState([])
    // const [categoryArray, setCategoryArray] = useState([])

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

    useEffect(() => {
        fetch('http://localhost:5000/brand-category')
            .then(res => res.json())
            .then(data => {
                setBrands(data[0].brands)
                setCategory(data[0].category)
            })
    }, [])

    const brandHandle = (e) => {
        // const checkValue = e.target.value
        // const isChecked = e.target.checked
        // if (isChecked) {
        //     setBrandArray([...brandArray, checkValue])
        // }
        // else {
        //     const newBrandArray = brandArray.filter(brand => brand !== checkValue)
        //     setBrandArray(newBrandArray)
        // }

        console.log(e.target.value)
    }

    const categoryHandle = (e) => {
        // const checkValue = e.target.value
        // const isChecked = e.target.checked

        // if (isChecked) {
        //     setCategoryArray([...categoryArray, checkValue])
        // }
        // else {
        //     const newCategoryArray = categoryArray.filter(item => item !== checkValue)
        //     setCategoryArray(newCategoryArray)
        // }

        console.log(e.target.value)
    }

    const priceRangeHandle = (e) => {
        e.preventDefault()
        const form = e.target
        const minPrice = form.minPrice.value
        const maxPrice = form.maxPrice.value
        console.log(maxPrice, minPrice)
    }

    const highLowHandle = (e) => {
        console.log(e.target.value)
    }

    const newOldHandle = (e) => {
        const isChecked = e.target.checked
        console.log(isChecked)
    }



    return (
        <div className={`min-w-[250px] max-w-[250px] md:h-auto h-screen md:overflow-y-hidden overflow-y-scroll md:p-0 text-black space-y-5 md:bg-white bg-[#ebebeb] p-5 md:block md:static fixed md:rounded-none md:border-none border-t rounded-md ${filterOpen ? 'right-0 top-0' : '-right-[260px] top-0'} transition-all ease-in-out duration-300`}>

            <div className="flex justify-end">
                <button onClick={() => setFilterOpen(false)} className={`font-inter font-semibold bg-[#E8788C] text-white rounded-sm px-3 py-1 md:hidden`}>Close</button>
            </div>


            {/* BRANDS SORTING HERE */}
            <div>
                <h3 className="text-black font-bold font-raleway">BRANDS</h3>

                {/* <form className="space-y-1 ml-3">
                    {
                        brands.map((brand, indx) => <div onClick={brandHandle} key={indx} className="flex items-center gap-2">
                            <input type="checkbox" name={brand} value={brand} className="cursor-pointer w-4 h-4 " />
                            <label htmlFor={brand}>{brand}</label>
                        </div>)
                    }
                </form> */}

                <select onChange={brandHandle} className="space-y-1 mt-3 px-3 py-2 w-full outline-none border-2 border-[#E8788C] rounded-sm">
                    <option value=" ">select brand</option>
                    {
                        brands.map((brand, indx) => <option key={indx} className="flex items-center gap-2" value={brand}>{brand}</option>)
                    }
                </select>

            </div>


            {/* CATEGORY SORTING HERE */}
            <div>
                <h3 className="text-black font-bold font-raleway">CATEGORY</h3>
                {/* <form className="space-y-1 ml-3">

                    {
                        category.map((item, indx) => <div key={indx} onClick={categoryHandle} className="flex items-center gap-2">
                            <input type="radio" name={item} value={item} className="cursor-pointer w-4 h-4 " />
                            <label htmlFor={item}>{item}</label>
                        </div>)
                    }
                </form> */}

                <select onChange={categoryHandle} className="space-y-1 mt-3 px-3 py-2 w-full outline-none border-2 border-[#E8788C] rounded-sm">
                    <option value=" ">select category</option>
                    {
                        category.map((item, indx) => <option key={indx} className="flex items-center gap-2" value={item}>{item}</option>)
                    }
                </select>
            </div>


            {/* jodi karo vercel a deploy nia problem face koren tara module 61.(9-11) dekhte paro */}

            {/* PRICE RANGE SORTING HERE */}
            <form onChange={priceRangeCheck} onSubmit={priceRangeHandle}>
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
                    <button disabled={!priceRangeOk} className={`w-full rounded-sm py-2 text-white text-lg ${priceRangeOk ? "bg-[#E8788C]" : "bg-gray-500 cursor-not-allowed"}`}>Search</button>
                </div>
            </form>

            {/* PRICE LOW HIGH SORTING HERE */}
            <div>
                <h3 className="text-black font-bold font-raleway">SORT AS PRICE</h3>
                {/* <form className="space-y-1 ml-3">
                    <div className="flex items-center gap-2">
                        <input type="radio" name="brand1" value="lowHigh" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand1">Low to High</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="brand2" value="highLow" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="brand2">High to Low</label>
                    </div>
                </form> */}
                <select onChange={highLowHandle} className="space-y-1 mt-3 px-3 py-2 w-full outline-none border-2 border-[#E8788C] rounded-sm">
                    <option value=" ">select</option>
                    <option value="highLow">High to Low</option>
                    <option value="lowHigh">Low to High</option>
                </select>
            </div>

            {/* SORTING AS DATE */}
            <div>
                <h3 className="text-black font-bold font-raleway">SORT AS DATE</h3>

                <div className="space-y-1 ml-3">
                    <div className="flex items-center gap-2">
                        <input onClick={newOldHandle} type="checkbox" name="hello" value="newOld" className="cursor-pointer w-4 h-4 " />
                        <label htmlFor="hello">Newest to Oldest</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;