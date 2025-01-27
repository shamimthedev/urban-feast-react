import { IoMdClose } from "react-icons/io"
import ItemCard from "./ItemCard"
import { useSelector } from "react-redux"
import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const [activeCart, setActiveCart] = useState(false)
    const cartItems = useSelector((state) => state.cart.cart);
    const totalQty = cartItems.reduce((totalQty, item)=> totalQty + item.qty, 0)
    const totalPrice = cartItems.reduce((total, item)=> total + item.qty * item.price, 0)

    const navigate = useNavigate()
    return (
        <>
            <div className={`p-5 fixed right-0 top-0 bg-white w-full lg:w-[25vw] h-full ${activeCart ? 'translate-x-0' : "translate-x-full"} transition-all duration-500 z-50`}>
                <div className="flex justify-between items-center my-3">
                    <span className="text-xl font-bold text-gray-800">My Order</span>
                    <IoMdClose onClick={() => setActiveCart(!activeCart)} className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl hover:border-red-300 hover:text-red-300 rounded-md cursor-pointer" />
                </div>
                {
                    cartItems.length > 0 ?
                    cartItems.map((food) => {
                        return (
                            <ItemCard 
                            key={food.id}
                            id={food.id}
                            name={food.name}
                            price={food.price}
                            qty={food.qty}
                            img={food.img}
                            />
                        )
                    }) : <h2 className="font-bold text-xl text-gray-800 text-center">Your cart is empty</h2>
                }

                <div className="absolute bottom-2">
                    <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
                    <h3 className="font-semibold text-gray-800">Total Amount: {totalPrice}</h3>
                    <hr className="w-[90vw] lg:w-[20vw] my-2" />
                    <button onClick={()=>navigate('/success')} className="px-3 py-2 rounded-lg bg-green-500 text-white w-[90vw] lg:w-[20vw] font-bold cursor-pointer">Checkout</button>
                </div>
            </div>
            <FaShoppingCart onClick={() => setActiveCart(!activeCart)} className={`fixed bottom-4 right-4 rounded-full bg-white shadow-md p-3 text-5xl cursor-pointer ${totalQty > 0 && 'animate-bounce transition-all delay-500'}`} />
        </>
    )
}

export default Cart