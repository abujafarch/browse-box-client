

const ProductCard = () => {
    return (
        <div className="text-black border rounded-md font-inter">
            <img className="w-full rounded-t-md" src="https://firebasestorage.googleapis.com/v0/b/lenden-57b3b.appspot.com/o/ultarnew.webp?alt=media&token=24fbc32c-c0e3-46aa-b7a5-92ee758b13ac" />
            <div className="p-2">
                <p className="text-xl font-semibold">Samsung s22 Ultra</p>
                <p className="text-gray-500 text-sm">Mobile</p>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, soluta repellat? Ipsa, autem repellat earum.</p>
                <p className="text-gray-500 font-medium">rating: 4.5</p>
                <p className=" font-medium">Price: 120000tk</p>
                <p className="text-gray-500 text-sm font-medium font-inter">Created at 12-08-2024, 12:30PM </p>
            </div>
        </div>
    );
};

export default ProductCard;