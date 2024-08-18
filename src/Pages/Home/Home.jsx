
import FilterSection from "./FilterSection/FilterSection";
import { IoSearch } from "react-icons/io5";
import ProductSection from "./ProductSection/ProductSection";
import { useEffect, useState } from "react";


const Home = () => {

    const [filterOpen, setFilterOpen] = useState(false)
    const [products, setProducts] = useState([])
    const [brandName, setBrandName] = useState(' ')
    const [categoryName, setCategoryName] = useState(' ')
    const [minPrice, setMinPrice] = useState(' ')
    const [maxPrice, setMaxPrice] = useState(' ')
    const [highLowPrice, setHighLowPrice] = useState(' ')
    const [newest, setNewest] = useState("false")

    // console.log(brandName, categoryName, minPrice, maxPrice, highLowPrice, newest)


    useEffect(() => {
        fetch(`http://localhost:5000/all-products?brandName=${brandName}&categoryName=${categoryName}&minPrice=${minPrice}&maxPrice=${maxPrice}&highLowPrice=${highLowPrice}&newest=${newest}`)

            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [brandName, categoryName, minPrice, maxPrice, highLowPrice, newest])


    const handleSearch = (e) => {
        e.preventDefault()
        console.log(e.target.search.value)
        const search = e.target.search.value
        fetch(`http://localhost:5000/searched-products?search=${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }

    return (
        <div className="max-w-[1320px] text-[#E8788C] mx-auto px-3 mt-4 sm:mt-6 md:mt-8 lg:mt-10  overflow-x-hidden">

            <form onSubmit={handleSearch} className="border-2 border-[#E8788C] pl-3 max-w-[500px] mx-auto rounded-sm flex items-center justify-center mb-5 sm:mb-12">
                <input name="search" className="outline-none py-1 w-full text-lg text-[#797878]" placeholder="Search Product" type="text" />
                <button className="text-2xl bg-[#E8788C] py-2 px-3 text-white"><IoSearch /></button>
            </form>

            <div className="flex gap-5">
                <FilterSection
                    setFilterOpen={setFilterOpen}
                    filterOpen={filterOpen}
                    setBrandName={setBrandName}
                    setCategoryName={setCategoryName}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    setNewest={setNewest}
                    setHighLowPrice={setHighLowPrice}
                />


                <ProductSection setFilterOpen={setFilterOpen} filterOpen={filterOpen} products={products} />
            </div>
        </div>
    );
};

export default Home;