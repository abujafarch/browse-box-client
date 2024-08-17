

const ProductCard = ({ product }) => {
    return (
        <div className="text-black border rounded-md font-inter">
            <img className="w-full rounded-t-md" src={product?.productImage}/>
            <div className="p-2">
                <p className="text-xl font-semibold">{product?.productName}</p>
                <p className="text-gray-500 text-sm">{product?.category}</p>
                <p className="my-2">{product?.description}</p>
                <p className="text-gray-500 font-medium">rating: {product?.ratings}</p>
                <p className=" font-medium">Price: {product?.price}</p>
                <p className="text-gray-500 text-sm font-medium font-inter">{product?.creationDate} </p>
            </div>
        </div>
    );
};

export default ProductCard;