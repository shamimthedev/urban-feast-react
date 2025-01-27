import { FaStar } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addToCart } from '../redux/slices/CartSlice'

const FoodCart = ({ id, name, price, desc, rating, img, handleToast }) => {
    const dispatch = useDispatch()
    return (
        <div className="bg-white rounded-lg w-[250px] font-bold flex flex-col p-5 gap-2">
            <img className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out" src={img} alt={name} />
            <div className="flex justify-between text-sm">
                <h2>{name}</h2>
                <span className="text-green-500">৳{price}</span>
            </div>
            <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
            <div className="flex justify-between">
                <span className="flex justify-center items-center gap-1">
                    <FaStar className="text-yellow-400" /> {rating}
                </span>
                <button
                    onClick={() => {
                        dispatch(addToCart({
                            id, name, price, rating, img, qty: 1
                        }));
                        handleToast(name)
                    }}
                    className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm cursor-pointer">Add to cart</button></div>
        </div>
    )
}

export default FoodCart