import FoodCart from "./FoodCart"
import FoodData from './../data/FoodData';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const FoodItem = () => {
    const category = useSelector((state) => state.category.category)
    const search = useSelector((state) => state.search.search)
    const handleToast = (name) => toast.success(`Added ${name}`)
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex flex-wrap justify-center lg:justify-start gap-10 mx-6 my-10">
                {
                    FoodData.filter((food) => {
                        if (category === "All") {
                            return food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                        } else {
                            return(
                                category === food.category && food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                            )
                        }
                    }).map((food) => (
                        <FoodCart
                            key={food.id}
                            id={food.id}
                            name={food.name}
                            desc={food.desc}
                            price={food.price}
                            rating={food.rating}
                            img={food.img}
                            handleToast={handleToast}
                        />
                    ))}

            </div>
        </>
    )
}

export default FoodItem